# Çalışma Programı Takip Uygulaması

Birden çok çalışma programını (İngilizce Master Plan, IELTS Academic...) takip eden,
**mobil öncelikli**, e-posta+şifre girişli statik web uygulaması. Girişten sonra
program seçim ekranı gelir; her programın ilerlemesi ayrı izlenir. Görünüm
**Azure DevOps Boards/Sprints** esinli ve sade.

- **Frontend:** statik HTML/CSS/JS — Bootstrap 5 + Bootstrap Icons + jQuery (CDN).
- **Üyelik & veri:** [Supabase](https://supabase.com) (Auth + Postgres, ücretsiz katman).
- **Barındırma:** GitHub Pages (ücretsiz, sunucusuz).
- **Kod standardı:** `FRONTEND_STANDARD.md` (KT* modül deseni, jQuery DOM katmanı,
  SonarJS/Stylelint). MVC'ye özgü parçalar statik+Supabase'e uyarlandı (detay aşağıda).

## Klasör yapısı

```
index.html                              Giriş (login)
programs.html                           Program seçim ekranı (ana ekran)
app.html                                Takip ekranı (?program=<id> ile açılır)
css/core/theme.css                      Azure renk değişkenleri + global override
css/pages/*.css                         Sayfa bazlı stil
js/core/                                kt-config, kt-swal, kt-helpers, kt-data, kt-auth
js/pages/                               login.js, programs.js, app.js
data/programs.json                      Program kayıt defteri (id, başlık, planUrl, taskCount)
data/programs/<id>/source-plan.md       Program kaynağı (Markdown)
data/programs/<id>/plan.json            Üretilen plan (parser çıktısı)
tools/build-plan.mjs                    Dönüştürücü: node tools/build-plan.mjs [programId]
data/plan.json                          DONUK eski dosya (cache geçişi; yakında silinecek)
```

**Çoklu program modeli:** Her görev ID'si programa aittir. İngilizce planın ID'leri
tarihsel nedenle öneksizdir (`w1-pzt`) ve **asla öneklenmemelidir** (Supabase'deki
mevcut ilerleme bu ID'lerde). Yeni programların ID'leri build sırasında öneklenir
(`ielts.w1-pzt`) — böylece tek `task_progress` tablosu şema değişikliği olmadan tüm
programları taşır.

## Kurulum

### 1) Supabase

1. [supabase.com](https://supabase.com) → yeni proje oluştur (ücretsiz).
2. **Authentication → Providers → Email**: açık olsun. **Sign-ups**'ı kapat
   (davetli kullanım): _Authentication → Sign In / Providers_ altında
   "Allow new users to sign up" kapalı.
3. **Authentication → Users → Add user** ile kendine bir hesap oluştur
   ("Auto confirm user" işaretli).
4. **SQL Editor**'de aşağıyı çalıştır (tablo + Row Level Security):

   ```sql
   create table public.task_progress (
     user_id uuid not null default auth.uid()
       references auth.users(id) on delete cascade,
     task_id text not null,
     updated_at timestamptz not null default now(),
     primary key (user_id, task_id)
   );

   alter table public.task_progress enable row level security;

   create policy "sel own" on public.task_progress
     for select using (auth.uid() = user_id);
   create policy "ins own" on public.task_progress
     for insert with check (auth.uid() = user_id);
   create policy "del own" on public.task_progress
     for delete using (auth.uid() = user_id);
   ```

5. **Project Settings → API**'den **Project URL** ve **anon public** key'i kopyala,
   `js/core/kt-config.js` içindeki iki sabite yapıştır:

   ```js
   const SUPABASE_URL = 'https://xxxx.supabase.co';
   const SUPABASE_ANON_KEY = 'eyJ...';
   ```

   > anon key istemcide durmak için tasarlanmıştır; veriyi RLS korur.
   > `service_role` key'i **asla** buraya koyma.

### 2) Lokal çalıştırma

`file://` ile açılmaz (plan.json fetch'i ve Supabase HTTP ister). Proje kökünde:

```powershell
npm run serve          # http://localhost:3000  (npx serve)
# veya:
python -m http.server 8080
```

Tarayıcıda aç → Supabase'de oluşturduğun hesapla giriş yap → görevleri işaretle →
sayfayı yenile, işaretler kalmalı.

### 3) GitHub Pages'e yayın

```powershell
git init
git add .
git commit -m "İlk sürüm"
git branch -M main
git remote add origin https://github.com/<kullanıcı>/ingilizce-tracker.git
git push -u origin main
```

GitHub'da **Settings → Pages → Build and deployment**: Source = "Deploy from a
branch", Branch = `main` / `/ (root)` → Save. Birkaç dakika sonra:

```
https://<kullanıcı>.github.io/ingilizce-tracker/
```

> GitHub Free planında Pages için repo **public** olmalıdır. Yollar göreli
> (`css/...`, `js/...`, `data/...`) olduğundan alt-yolda sorunsuz çalışır.

Bu URL'i telefonunda aç, aynı hesapla giriş yap — ilerlemen her cihazdan gelir.

## Geliştirme

```powershell
npm install            # lint araçları (ilk sefer)
npm run lint           # ESLint (SonarJS) + Stylelint
npm run build:plan     # source-plan.md değişirse plan.json'ı yeniden üret
```

## Standart uyarlaması (MVC → statik + Supabase)

`FRONTEND_STANDARD.md` ASP.NET MVC/Razor için yazılmıştır. **Aynen korunan:**
Revealing Module Pattern (`KT[Page]` + `init()`), jQuery DOM/event katmanı + ES2020+,
`const/let`, `??`/`??=`, optional chaining, `.dataset`, `Number.parseInt`, S1192
sabitleri, `<template>`+`.text()` render, erişilebilirlik, `KTSwal`/`KTHelpers`,
ESLint 9 flat + SonarJS + Stylelint.

**Karşılığıyla değişen (sunucu yok):**

| Standart (MVC) | Bu projede |
|---|---|
| Razor layout/partial, `@section` | Düz HTML sayfalar |
| `KTAjax` (`$.ajax`+antiforgery) | `KTData` — Supabase SDK sarmalayıcı; hata yine merkezde `KTSwal` |
| Render yöntem 1 (Razor partial) | Yok; ana yöntem `<template>`+`.text()` |
| `asp-append-version` | Elle `?v=1` query (GitHub Pages'te Razor yok) |
| Metronic/Vuexy template | Sade Bootstrap 5 (CDN) |
| SonarQube sunucu taraması, `Program.cs` | Kapsam dışı (sunucu yok) |
