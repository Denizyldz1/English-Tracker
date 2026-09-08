# 🔧 DEV PRACTICE — C# / Dart + MSSQL (20 Hafta, İngilizce)

> **Profil:** Bildiği becerileri keskin tutan, çalışan bir geliştirici: C# ve Dart pratik problemleri + MSSQL + Flutter mini-görevleri. Haftada 5 gün süren bir pratik programı (Pazartesi'den Cuma'ya, her biri 30-40 dk). HER ŞEY tarayıcıda yürür: bir siteyi açarsın, orada çözersin, sekmeyi kaparsın. Kurulacak bir şey yok, yerel proje yok — yerel Flutter derinliğine de girilmiyor. Tek başına ayakta durur ve istersen başka bir programın yanında da çakışma yaratmadan yürüyebilir.
> **Sistem:** **Pzt+Salı** = haftanın dil pratiği ikilisi, 2 haftalık rotasyon — tek haftalar HackerRank'te C# (Algorithms / Data Structures, gönderim dili C#), çift haftalar Exercism'de Dart — Pazartesi taze bir ısınma seti, Salı ana oturumu artı her hafta koşan diller arası yeniden çözümü taşır: C# haftalarında Exercism'deki Dart çözümlerinden bir problem alıp onu C# ile yeniden çözersin, Dart haftalarında HackerRank'teki C# gönderimlerinden birini alıp onu Dart ile yeniden çözersin (bir problem asla "bitmiş" değildir — diğer dilde geri gelir). **Çar+Per** = haftanın MSSQL pratik ikilisi (yalnızca T-SQL), iki günde de saf HackerRank SQL pratiği — her 4. hafta hariç: o haftalar Çarşamba yerine bir DartPad Flutter mini-görevi olur (Perşembe yine o haftanın SQL pratiğini taşır), 10. ve 20. haftalarda ise Çarşamba yerine ücretsiz süreli bir HackerRank sertifikası gelir. **Cuma** = zayıf nokta gözden geçirme günü, istisnasız her hafta: bu hafta en çok zorlanılan şeye dönüp onu sıfırdan yeniden çözersin. Derin Flutter çalışması bilerek kapsam dışı: ileride kendi başına adanmış bir Flutter Advanced programını hak ediyor.
> **Dil notu:** Bilerek İngilizce yazıldı — onu okumak İngilizce pratiğinin bir parçası.

---

## 🧰 Kaynaklar (hepsi doğrulanmış, ücretsiz)

| Kaynak | Ne için | Adres |
|---|---|---|
| HackerRank Algorithms / Data Structures | C# pratiği — artık haftada iki oturum (Pzt ısınma + Salı ana oturum), C# ile çöz, .NET 8; Data Structures alanı kardeş parkur | https://www.hackerrank.com/domains/algorithms |
| Exercism | Dart parkuru — artık tek Dart pratik platformu, artı ücretsiz insan mentorluğu | https://exercism.org/tracks/dart |
| HackerRank SQL | MSSQL pratiği — artık haftada iki oturum (Çar + Per); problem sunuyorsa MS SQL Server motorunu seç | https://www.hackerrank.com/domains/sql |
| HackerRank sertifikaları | ÜCRETSİZ ve süreli: 10. haftada C# (Basic), 20. haftada SQL (Intermediate) | https://www.hackerrank.com/skills-verification |
| DartPad | Flutter mini-görev haftaları: Dart ve Flutter widget'larını tarayıcıda çalıştır — ücretsiz, kayıt yok | https://dartpad.dev |
| W3Schools jQuery | Tarayıcı içi jQuery alıştırmaları, anında kontrol ve sonunda bir quiz | https://www.w3schools.com/jquery/jquery_exercises.asp |

## ⚖️ Sabit Kurallar

1. HER ŞEY tarayıcıda: kurulum yok, yerel dosya yok. Çözdüğün problemlerin geçmişi iki platformda duruyor — HackerRank gönderimlerin (C# ve SQL) ve Exercism çözümler sayfan (Dart) — ve Salı'nın yeniden çözümü hep bu ikisinden birinden seçilir.
2. Diller arası yeniden çözüm asla atlanmaz: C# haftalarında Exercism'deki Dart geçmişinden eski bir problem al ve onu HackerRank'te C# ile yeniden çöz; Dart haftalarında HackerRank'teki C# gönderimlerinden birini al ve onu Exercism'de Dart ile yeniden çöz. Bir problem asla "bitmiş" değildir — diğer dilde geri gelir. Bütün mesele bu.
3. Her çözdüğün problemden sonra en az 2 başka çözüm oku — HackerRank'te Discussions sekmesi, Exercism'de topluluk çözümleri — ve kullanmadığın BİR numara bul.
4. SQL yalnızca MSSQL: T-SQL sözdizimiyle (TOP, GETDATE, ISNULL) yalnızca HackerRank SQL pratiği üzerinden çalış. Problem sunuyorsa MS SQL Server motorunu seç.
5. Her 4. Salı ~10 dakikalık W3Schools jQuery alıştırması içerir — tarayıcıda çözülür, anında kontrol edilir, kurulum gerekmez.
6. Süreli sertifika günleri dürüst geçer: kronometre açık, mola yok. Bir hafta kayarsa hafta uzar; sıra hiç değişmez.
7. Cuma'nın zayıf nokta gözden geçirmesi zorunludur, asla atlanmaz — haftanın ayrı ayrı problemlerini gerçekten kalıcı hale getiren şey budur.

---
# 🟠 FAZ 1 — Rotasyon ve T-SQL Temeli (Hafta 1-10)

### Hafta 1 — Açılış: HackerRank C# Günü ve İlk SQL Pratiği
**Özet:** Haftaya HackerRank C# ile iki oturumla başla (Warmup alt alanı artı Dart tohumunu içeren ana rotasyon günü) ve temel SELECT sorguları üzerine iki HackerRank SQL oturumuyla devam et, Cuma'da zayıf nokta gözden geçirmesiyle kapat.
**Kaynak:** https://www.hackerrank.com/domains/algorithms · https://www.hackerrank.com/domains/data-structures · https://exercism.org/tracks/dart · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** Haftaya HackerRank Algorithms'ın (https://www.hackerrank.com/domains/algorithms) Warmup alt alanından 2 Easy problemle başla, gönderim dili C# (.NET 8) — Salı'nın ana oturumundan önce saf sözdizimi ve I/O pratiği (30-40 dk)
- [ ] **[Salı]** HackerRank Algorithms (https://www.hackerrank.com/domains/algorithms) ya da Data Structures (https://www.hackerrank.com/domains/data-structures) alanında 2 Easy problem çöz, gönderim dili olarak C# (.NET 8) seçerek — editör tarayıcıda çalışır, kurulacak bir şey yok, testler sitede koşar. Dart geçmişin henüz boş, o yüzden bugün tohumu at: iki problemden birini Exercism'de bir de Dart ile çöz; haftaya başlayarak diller arası yeniden çözüm hep bu geçmişten seçilir (30-40 dk)
- [ ] **[Çar]** HackerRank SQL'de (https://www.hackerrank.com/domains/sql) temel SELECT sorgularına alışmak için 2-3 Easy problem çöz — problem sunuyorsa MS SQL Server motorunu seç (30-40 dk)
- [ ] **[Per]** İkinci bir SQL turu: yine temel SELECT alanında 2-3 Easy problem daha çöz — bu kez bir-iki WHERE koşulu ekle ve her sorguyu şemaya iki kez bakmadan yazmayı dene (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: bu hafta HackerRank'te (C# ve SQL) ve Exercism'de çözdüğün her şeye geri dön. Hangisi en zor geldiyse onu seç ve sıfırdan yeniden çöz — süreli, notsuz, eski denemene bakmadan (30-40 dk)

### Hafta 2 — Dart Haftası ve Veriyi Sıralama
**Özet:** Rotasyon Exercism'de iki Dart oturumuna geçiyor; iki SQL oturumu sorgu sonuçlarını sıralamayı ve filtrelemeyi kapsıyor, Cuma zayıf nokta gözden geçirmesiyle haftayı kapatıyor.
**Kaynak:** https://exercism.org/tracks/dart · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** Haftaya henüz denemediğin 2 taze Exercism Dart alıştırmasıyla ısın — şimdilik kolay, temel olanlar; zor seçimleri Salı'nın diller arası çalışmasına sakla (30-40 dk)
- [ ] **[Salı]** Exercism'de 2 Dart alıştırması çöz, rahat bir tempoda. Sonra HackerRank gönderim geçmişini aç, orada C# ile çözdüğün bir problem seç ve onu Exercism'de bir de Dart ile çöz — bir problem asla "bitmiş" değildir, diğer dilde geri gelir. İki sürümü karşılaştır (30-40 dk)
- [ ] **[Çar]** Sıralama ve filtreleme kullanan 1-2 Easy HackerRank SQL problemi çöz — ORDER BY, TOP, OFFSET-FETCH — problem sunuyorsa MS SQL Server motorunu seçerek (30-40 dk)
- [ ] **[Per]** Aynı temada ikinci bir SQL turu: WHERE filtrelemesini ORDER BY / TOP ile birleştiren 2 HackerRank SQL problemi daha çöz, sonra sayfalama tarzı sonuçlar için OFFSET-FETCH kullanan bir tane dene (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: bu haftanın HackerRank SQL ve Exercism Dart çalışmasını tara, seni en çok zorlayan sorguyu ya da alıştırmayı seç ve boş bir dosyadan yeniden yaz — süreli, notsuz (30-40 dk)

### Hafta 3 — HackerRank C# Günü ve JOIN'ler
**Özet:** C# iki HackerRank oturumuyla rotasyonda yine sırada, iki SQL oturumu tabloları JOIN'lerle birleştirmeyi çalışıyor, Cuma'nın zayıf nokta gözden geçirmesi haftayı kapatıyor.
**Kaynak:** https://www.hackerrank.com/domains/algorithms · https://www.hackerrank.com/domains/data-structures · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** HackerRank Algorithms'ın Implementation alt alanından C# ile 2 Easy problem çöz — Salı'nın setinden farklı bir tat, bir spesifikasyonu dikkatle okuyup doğrudan koda çevirmek için iyi bir pratik (30-40 dk)
- [ ] **[Salı]** HackerRank Algorithms ya da Data Structures alanında, gönderim dili olarak C# seçili şekilde 2 Easy problem çöz. Diller arası yeniden çözüm: daha önce Dart ile çözdüğün bir problemi seç (Exercism çözümler sayfan) ve onu burada bir de C# ile çöz. Sonra problemin Discussions sekmesini aç ve kullanmadığın bir yaklaşım yakala (30-40 dk)
- [ ] **[Çar]** JOIN gerektiren 1-2 HackerRank SQL problemi çöz (INNER, LEFT, self join), problem sunuyorsa MS SQL Server motorunu seçerek (30-40 dk)
- [ ] **[Per]** JOIN odaklı ikinci bir SQL turu: bu kez aynı sorguda iki JOIN gerektiren ya da bir self join isteyen 2 HackerRank SQL problemi daha çöz — problem sunuyorsa MS SQL Server motorunu seç (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: bu hafta çözdüğün her şey arasından — HackerRank C#, HackerRank SQL, Exercism geçmişin — en çok direneni seç ve soğuk bir şekilde, süreli, bakmadan yeniden çöz (30-40 dk)

### Hafta 4 — Dart Dönüyor, jQuery Alıştırmaları, DartPad Flutter
**Özet:** Dart iki oturumla geri döndü, Salı'da tarayıcı içi jQuery alıştırmalarıyla; Çarşamba DartPad Flutter mini-görev günü, Perşembe haftanın tek SQL pratiğini taşıyor (toplama fonksiyonları ve GROUP BY), Cuma zayıf nokta gözden geçirmesiyle kapanıyor.
**Kaynak:** https://exercism.org/tracks/dart · https://www.w3schools.com/jquery/jquery_exercises.asp · https://dartpad.dev · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** Henüz açmadığın bir parkur bölümünden, hâlâ kolay seviyede 2 taze Exercism Dart alıştırması daha çöz — Salı'nın jQuery ekiyle öncesinde alıştırma birikimini büyütmeye devam et (30-40 dk)
- [ ] **[Salı]** Exercism'de 2 Dart alıştırması çöz, sonra HackerRank gönderim geçmişini aç, C# ile çözdüğün bir problem al ve onu Exercism'de bir de Dart ile çöz. jQuery bakımı (~10 dk): https://www.w3schools.com/jquery/jquery_exercises.asp adresindeki W3Schools jQuery alıştırmalarının bir bölümünü çöz — site cevaplarını anında kontrol ediyor (30-40 dk)
- [ ] **[Çar]** DartPad Flutter günü: https://dartpad.dev adresine git (ücretsiz, kayıt yok — Flutter widget'ları doğrudan tarayıcıda çalışıyor). StatefulWidget ile bir sayaç kartı widget'ı yap: bir sayı gösteren bir Card ve onu artıran bir buton. Bağımlılıksız tut — pub.dev paketlerinin çoğu DartPad'de yok. Derin Flutter çalışması ileride adanmış bir programa saklı (30-40 dk)
- [ ] **[Per]** Bu haftanın tek SQL durağı: toplama fonksiyonları (COUNT, SUM, AVG) ve temel GROUP BY kullanan 2-3 Easy HackerRank SQL problemi çöz — problem sunuyorsa MS SQL Server motorunu seçerek (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: bu haftanın en zor anına dön — bir HackerRank C#/SQL problemi ya da bir Exercism alıştırması — ve çözümünü sıfırdan yeniden kur, kronometre çalışırken, önceki denemen kapalı (30-40 dk)

### Hafta 5 — HackerRank C# Günü ve Alt Sorgular
**Özet:** İki HackerRank C# oturumu rotasyonu sürdürürken iki SQL oturumu alt sorgulara geçiyor, her zamanki gibi Cuma'nın zayıf nokta gözden geçirmesiyle kapanıyor.
**Kaynak:** https://www.hackerrank.com/domains/algorithms · https://www.hackerrank.com/domains/data-structures · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** HackerRank Algorithms'ın Strings alt alanından C# ile 2 Easy problem çöz — haftayı çeşitlendirmek için Salı'nın setinden daha hafif, farklı bir tat (30-40 dk)
- [ ] **[Salı]** HackerRank Algorithms ya da Data Structures alanında C# ile 2 Easy problem çöz — Easy artık rutin geliyorsa uzun metinli, kısıtları daha sıkı olanları seç. Diller arası yeniden çözüm: daha önce Dart ile çözdüğün bir problemi al (Exercism çözümler sayfan) ve onu burada bir de C# ile çöz. İki sürümü karşılaştır ve hangisinin daha temiz olduğuna, nedenini de söyleyerek karar ver (30-40 dk)
- [ ] **[Çar]** Alt sorgunun işe yaradığı 1-2 HackerRank SQL problemi çöz (skaler, çok değerli, ilişkili alt sorgular), problem sunuyorsa MS SQL Server motorunu seçerek (30-40 dk)
- [ ] **[Per]** İkinci bir alt sorgu turu: alt sorgunun işe yaradığı 2 HackerRank SQL problemi daha çöz, problem sunuyorsa MS SQL Server motorunu seçerek (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: bu haftanın HackerRank ve Exercism çalışmasını düşün ve seni en çok yavaşlatan tek şeyi adlandır. Onu sıfırdan yeniden çöz, süreli, notsuz (30-40 dk)

### Hafta 6 — Dart Haftası ve SQL Toplama Pratiği
**Özet:** Dart iki oturumla üçüncü rotasyon turunu kapatıyor; iki SQL oturumu artık saf HackerRank pratiğine odaklanıyor, yerleşik fonksiyonlar ve GROUP BY ile, Cuma zayıf nokta gözden geçirmesini getiriyor.
**Kaynak:** https://exercism.org/tracks/dart · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** 2 taze Exercism Dart alıştırması çöz, artık salt-kolayın biraz ötesine geçerek — en bariz seçim yerine küçük bir kıvrımı olanları (bir yardımcı fonksiyon, bir uç durum) seç (30-40 dk)
- [ ] **[Salı]** İstikrarlı bir tempoda 2 Exercism Dart alıştırması çöz. Diller arası yeniden çözüm: HackerRank gönderim geçmişinden, Dart ile henüz hiç dokunmadığın bir C# problemi seç ve onu Exercism'de Dart ile yeniden çöz — profilin yeni sürümü otomatik kaydediyor (30-40 dk)
- [ ] **[Çar]** Yerleşik fonksiyonları (metin/tarih/matematik) GROUP BY ile birlikte kullanan 2-3 HackerRank SQL problemi çöz — bugünün teması toplama (aggregation); problem sunuyorsa MS SQL Server motorunu seç (30-40 dk)
- [ ] **[Per]** İkinci bir toplama turu: GROUP BY'ı HAVING ile birleştiren ya da aynı sorguda iki toplama fonksiyonunu zincirleyen 2 HackerRank SQL problemi daha çöz (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: bu haftanın en zorlu problemini ya da alıştırmasını seç — HackerRank C#/SQL ya da Exercism Dart — ve eski çözümün açık olmadan, kronometreyle bir kez daha çöz (30-40 dk)

### Hafta 7 — HackerRank C# Günü ve SQL Merdiveni
**Özet:** Yeni bir rotasyon turu iki HackerRank C# oturumuyla başlıyor ve SQL tarafı teoriden istikrarlı, iki oturumluk bir HackerRank pratik merdivenine geçiyor, Cuma'nın zayıf nokta gözden geçirmesiyle kapanıyor.
**Kaynak:** https://www.hackerrank.com/domains/algorithms · https://www.hackerrank.com/domains/data-structures · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** HackerRank Data Structures'ın Arrays bölümünden C# ile 2 Easy problem çöz — Salı'nın süreli setinden farklı bir tat, tamamen indeksleme ve döngü pratiğine odaklı (30-40 dk)
- [ ] **[Salı]** HackerRank Algorithms ya da Data Structures alanında C# ile 2 Easy problem çöz, bu kez kronometreyle — bir Easy rahatça 15 dakikanın altında düşmeli. Diller arası yeniden çözüm: Exercism çözümler sayfandan bir Dart problemi al ve onu burada bir de C# ile çöz. Sonra Discussions sekmesine bak: LINQ neyi kısalttı — ya da neyi uzattı? (30-40 dk)
- [ ] **[Çar]** SQL pratik günü: HackerRank SQL'de 3-4 Easy problem çöz, problem sunuyorsa MS SQL Server motorunu seçerek. Bir problem zor geliyorsa onu sitedeki denenmiş listende bırak — HackerRank geçmişini tutuyor, sonra tekrar geleceksin (30-40 dk)
- [ ] **[Per]** Merdiveni bir basamak daha ileri taşı: problem sunuyorsa MS SQL Server motorunu seçerek, bu kez Easy-Medium seviyeden 2 HackerRank SQL problemi daha çöz (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: bu haftanın HackerRank C# ve SQL çalışmasına geri bak ve en sallantılı hissettireni seç. Eski gönderimine bakmadan, süreli, sıfırdan yeniden kur (30-40 dk)

### Hafta 8 — Dart Haftası, jQuery Alıştırmaları, DartPad Flutter
**Özet:** Salı iki Dart oturumu artı tarayıcı içi jQuery alıştırmaları; Çarşamba bir DartPad Flutter mini-görevi daha, Perşembe haftanın tek SQL pratiğini taşıyor (JOIN artı GROUP BY), Cuma zayıf nokta gözden geçirmesiyle kapanıyor.
**Kaynak:** https://exercism.org/tracks/dart · https://www.w3schools.com/jquery/jquery_exercises.asp · https://dartpad.dev · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** Daha önce denemediğin bir parkur bölümünden, easy-medium seviyede 2 taze Exercism Dart alıştırması çöz — Salı'nın jQuery bölümünden ve Çarşamba'nın DartPad yapımından önce sakin bir başlangıç (30-40 dk)
- [ ] **[Salı]** İstikrarlı bir tempoda 2 Exercism Dart alıştırması çöz, sonra HackerRank gönderim geçmişini aç ve eski bir C# problemini Exercism'de Dart ile yeniden çöz. jQuery bakımı (~10 dk): https://www.w3schools.com/jquery/jquery_exercises.asp adresindeki W3Schools jQuery alıştırmalarının bir sonraki bölümünü çöz — sitede anında kontrol (30-40 dk)
- [ ] **[Çar]** DartPad Flutter günü: https://dartpad.dev adresine git ve dokununca boyutunu ve rengini değiştiren bir AnimatedContainer yap (onu bir GestureDetector içine sar). Her şey tarayıcıda çalışıyor — kurulum yok, kayıt yok. Bağımlılıksız tut: pub.dev paketlerinin çoğu DartPad'de yok (30-40 dk)
- [ ] **[Per]** Bu haftanın tek SQL durağı: bir JOIN'i GROUP BY ile birleştiren 2-3 Easy-Medium HackerRank SQL problemi çöz — problem sunuyorsa MS SQL Server motorunu seçerek (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: bu haftaki her şey arasından — HackerRank C#/SQL, Exercism Dart, jQuery — en çok tekrar gerektireni bul ve süreli, temiz bir şekilde yeniden yap (30-40 dk)

### Hafta 9 — HackerRank C# Günü ve Easy'den Medium'a SQL
**Özet:** Rotasyonda C# haftası iki oturumla; yapılandırılmış alternatif olarak Interview Preparation Kit devreye giriyor, iki SQL oturumu ilk Medium seviye problemleri karışıma katmaya başlıyor, Cuma zayıf nokta gözden geçirmesiyle kapanıyor.
**Kaynak:** https://www.hackerrank.com/domains/algorithms · https://www.hackerrank.com/domains/data-structures · https://www.hackerrank.com/interview/interview-preparation-kit · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** Bugünkü Interview Kit oturumundan önce ısınma: C# ile 2 Easy HackerRank Algorithms ya da Data Structures problemi — Salı'nın Medium'a çıkışından önce sadece parmaklarını ısıt (30-40 dk)
- [ ] **[Salı]** HackerRank'te C# ile 2 problem çöz, Easy'den ilk Medium'una adım atarak — ya da yapılandırılmış yolu seç ve Interview Preparation Kit'in (https://www.hackerrank.com/interview/interview-preparation-kit) Warm-up Challenges bölümünü çalış. Diller arası yeniden çözüm: Exercism çözümler sayfandaki en eski problemi al ve onu burada bir de C# ile çöz. Eski Dart sürümünle karşılaştır: neyi yanlış hatırlamışsın? (30-40 dk)
- [ ] **[Çar]** HackerRank SQL'de 2 Easy ve 1 Medium problem çöz, problem sunuyorsa MS SQL Server motorunu seçerek. Medium olan seni 15 dakikadan fazla tıkarsa tartışmayı oku, fikri anla ve sorguyu ezberden kendin yaz (30-40 dk)
- [ ] **[Per]** İkinci bir SQL turu: problem sunuyorsa MS SQL Server motorunu seçerek 2 Medium HackerRank SQL problemi çöz — biri seni 15 dakikadan fazla tıkarsa bugünkü gibi önce tartışmayı oku, sonra ezberden yaz (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: bu hafta karşılaştığın en zor şeyi seç, C# ya da SQL, ve onu boş bir editörden yeniden çöz, süreli, geçen seferki sürüme bakmadan (30-40 dk)

### Hafta 10 — Dart Haftası ve C# (Basic) Sertifikası
**Özet:** Dönüm noktası haftası: Salı iki Dart oturumu ve ısınma olarak bir C# yeniden çözümü, ardından Çarşamba ücretsiz süreli HackerRank C# (Basic) sertifikası, Perşembe normal bir SQL oturumu ve Cuma'nın zayıf nokta gözden geçirmesi.
**Kaynak:** https://exercism.org/tracks/dart · https://www.hackerrank.com/skills-verification/c_sharp_basic · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** Rahat bir easy-medium seviyede 2 taze Exercism Dart alıştırması çöz — strese gerek yok, bu haftanın asıl olayı yarınki sertifika (30-40 dk)
- [ ] **[Salı]** Hiçbir şeye bakmadan temiz ve hızlı çözümlere odaklanarak 2 Exercism Dart alıştırması çöz. Sonra bu haftalığına yönü tersine çevir, çünkü yarın sınav günü: Exercism çözümler sayfandaki eski bir Dart problemini al ve onu HackerRank'te C# ile yeniden çöz. Hangi C# özelliklerine otomatik olarak uzandığını fark et (30-40 dk)
- [ ] **[Çar]** 🏁 https://www.hackerrank.com/skills-verification/c_sharp_basic adresinden ÜCRETSİZ süreli HackerRank "C# (Basic)" sertifika sınavına gir. Sessiz 45 dakikalık bir aralık bul, not yok. Sonrasında sonuç ve sertifika HackerRank profilinde görünür — sitede neyin kolay geldiğini, neyin seni şaşırttığını gözden geçir (30-40 dk)
- [ ] **[Per]** Ertesi günün normal SQL pratiği: problem sunuyorsa MS SQL Server motoruyla 2-3 Medium HackerRank SQL problemi çöz — dünkü odak C# sertifikası olsa da SQL tarafını canlı tut (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: sertifika günü bitti — şimdi haftanın en zor Dart alıştırmasını ya da SQL problemini seç ve soğuk bir şekilde, süreli, notsuz yeniden çöz (30-40 dk)

# 🟣 FAZ 2 — Derinleşme ve Sertifikalar (Hafta 11-20)

### Hafta 11 — HackerRank C# Günü ve Medium SQL Sahası
**Özet:** Faz 2, HackerRank'te iki üst seviye C# oturumuyla ve Medium problemlere yerleşen iki SQL oturumuyla açılıyor, Cuma'nın zayıf nokta gözden geçirmesiyle kapanıyor.
**Kaynak:** https://www.hackerrank.com/domains/algorithms · https://www.hackerrank.com/domains/data-structures · https://www.hackerrank.com/interview/interview-preparation-kit · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** Bugünkü Interview Kit oturumundan önce ısınma: C# ile 2 Easy-Medium HackerRank problemi, birkaç haftadır dokunmadığın bir alt alandan seçilmiş (30-40 dk)
- [ ] **[Salı]** HackerRank'te C# ile Easy-Medium seviyesinde 2 problem çöz ya da Interview Preparation Kit'in (https://www.hackerrank.com/interview/interview-preparation-kit) Arrays bölümünü çalış. Diller arası yeniden çözüm: daha önce Dart ile çözdüğün bir problemi al (Exercism çözümler sayfan) ve onu burada bir de C# ile çöz. Her şey iki dilde de kapsanmışsa, çözümünü en az beğendiğini seç ve onu iyileştir (30-40 dk)
- [ ] **[Çar]** HackerRank SQL'de 2-3 Medium problem çöz, problem sunuyorsa MS SQL Server motorunu seçerek. GROUP BY + HAVING kalıplarına odaklan. İki denemede çözdüğün her problem site içi gönderim geçmişinde görünür kalır — Hafta 14'te ona geri döneceksin (30-40 dk)
- [ ] **[Per]** İkinci bir Medium turu: GROUP BY + HAVING etrafında kurulu 2 HackerRank SQL problemi daha çöz, problem sunuyorsa MS SQL Server motorunu seçerek — kalıbı dünkünden daha hızlı yakalamayı hedefle (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: bu haftanın HackerRank C# ve SQL gönderimlerini tara, sana en çok denemeye mal olanı bul ve kronometre altında sıfırdan yeniden çöz (30-40 dk)

### Hafta 12 — Dart Haftası, jQuery Alıştırmaları, DartPad Flutter
**Özet:** Salı iki Dart oturumu ve tarayıcı içi jQuery alıştırmaları; Çarşamba bir DartPad bilgi kartı çevirme mini-görevi, Perşembe haftanın tek SQL pratiğini taşıyor (alt sorgular ve sıralama fonksiyonlarına ilk giriş), Cuma zayıf nokta gözden geçirmesiyle kapanıyor.
**Kaynak:** https://exercism.org/tracks/dart · https://www.w3schools.com/jquery/jquery_exercises.asp · https://dartpad.dev · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** Medium zorlukta 2 taze Exercism Dart alıştırması çöz — soruyu satır satır çevirmek yerine gerçekten önce planlama gerektirenleri seç (30-40 dk)
- [ ] **[Salı]** Medium zorluk hedefleyerek 2 Exercism Dart alıştırması çöz, sonra HackerRank gönderim geçmişini aç ve eski bir C# problemini Exercism'de Dart ile yeniden çöz. jQuery bakımı (~10 dk): https://www.w3schools.com/jquery/jquery_exercises.asp adresindeki W3Schools jQuery alıştırmalarının bir bölümünü daha çöz — site cevaplarını anında kontrol ediyor (30-40 dk)
- [ ] **[Çar]** DartPad Flutter günü: https://dartpad.dev adresine git ve AnimatedSwitcher ile küçük bir bilgi kartı çevirme efekti yap — karta dokununca soru yüzü ile cevap yüzü arasında geçiş olsun. Tamamen tarayıcıda çalışır, kurulacak bir şey yok; bağımlılıksız tut, çünkü pub.dev paketlerinin çoğu DartPad'de yok (30-40 dk)
- [ ] **[Per]** Bu haftanın tek SQL durağı: alt sorgulara dayanan ya da sıralama fonksiyonlarına (ROW_NUMBER, RANK) ilk kez değinen 2-3 Medium HackerRank SQL problemi çöz — problem sunuyorsa MS SQL Server motorunu seçerek (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: bu haftadan — Exercism'de Dart, HackerRank'te SQL ya da DartPad görevi — en zor geleni seç ve süreli, bakmadan yeniden kur (30-40 dk)

### Hafta 13 — HackerRank C# Günü ve SQL'de Pencere Fonksiyonları
**Özet:** C# rotasyonu iki oturumla Easy'den Medium'a çıkıyor; iki SQL oturumu sıralama ve pencere tarzı problemlerle devam ediyor, Cuma'nın zayıf nokta gözden geçirmesiyle kapanıyor.
**Kaynak:** https://www.hackerrank.com/domains/algorithms · https://www.hackerrank.com/domains/data-structures · https://www.hackerrank.com/interview/interview-preparation-kit · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** Bugünkü Interview Kit oturumundan önce ısınma: C# ile 2 Medium HackerRank Algorithms ya da Data Structures problemi — süslemesiz, Dictionaries and Hashmaps bölümünden önce sadece istikrarlı tekrar (30-40 dk)
- [ ] **[Salı]** HackerRank'te C# ile 2 problem çöz, artık Medium hedefleyerek — ya da Interview Preparation Kit'in (https://www.hackerrank.com/interview/interview-preparation-kit) Dictionaries and Hashmaps bölümünü al. Diller arası yeniden çözüm: Exercism çözümler sayfandan en son Faz 1'de dokunduğun bir Dart problemi seç ve onu burada bir de C# ile çöz — önce ezberden, sonra eski Dart sürümünle karşılaştır (30-40 dk)
- [ ] **[Çar]** HackerRank SQL'de sıralama ya da ardışık satır içeren 2-3 Medium problem çöz — bunlar genelde ROW_NUMBER, RANK ya da LAG/LEAD ister; problem sunuyorsa MS SQL Server motorunu seç. Pencere fonksiyonları paslanmış geliyorsa ilk 10 dakikayı ROW_NUMBER/RANK/LAG/LEAD sözdizimini gözden geçirmeye ayır (30-40 dk)
- [ ] **[Per]** İkinci bir pencere fonksiyonu turu: ROW_NUMBER, RANK ya da LAG/LEAD kullanan 2 Medium HackerRank SQL problemi daha çöz, problem sunuyorsa MS SQL Server motorunu seçerek (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: bu haftanın HackerRank C# ve SQL boyunca en pürüzlü anına dön ve onu sıfırdan yeniden çöz, kronometre açık, eski notlar yok (30-40 dk)

### Hafta 14 — Dart Haftası ve SQL Tekrar Turu
**Özet:** Dart oturumları sürüyor; Çarşamba seni daha önce yenen problemleri yeniden çözerek eski SQL borçlarını kapatıyor, Perşembe aynı konularda taze problemlerle bu ustalığı kontrol ediyor, Cuma zayıf nokta gözden geçirmesini getiriyor.
**Kaynak:** https://exercism.org/tracks/dart · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** Tercihen uzun süredir kaçındığın bir parkur bölümünden, medium zorlukta 2 taze Exercism Dart alıştırması çöz — Çarşamba eski SQL borçlarını kapatmakla ilgili, bugün bir Dart borcunu da kapat (30-40 dk)
- [ ] **[Salı]** Medium zorluk ya da üstünü hedefleyerek 2 daha zor Exercism Dart alıştırması çöz. Diller arası yeniden çözüm: HackerRank gönderim geçmişinden, ilk çözümünde döngü kullandığın bir C# problemi seç ve onu Exercism'de Dart ile, daha fonksiyonel bir tarzda yeniden çöz (döngü yerine Dart koleksiyon metotları) (30-40 dk)
- [ ] **[Çar]** HackerRank SQL'deki (problem sunuyorsa MS SQL Server motoru) çözülmüş ve denenmiş geçmişini aç ve ilk seferinde zorlanmış olduğun 2-3 problemi, eski gönderimlerine bakmadan yeniden çöz. Geçtiğin anda site onları çözüldü olarak işaretler; inatçı olanlar denenmiş listende kalır (30-40 dk)
- [ ] **[Per]** Dün yeniden çözdüğün konularda 2 taze Medium HackerRank SQL problemi çöz — gerçekten ustalaşmış mıydın yoksa eski sorguyu mu ezberlemiştin, kontrol et (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: bu hafta eski SQL borçlarını kapatmakla geçti — şimdi dokunduğun en zor şeyi (SQL ya da Dart) seç ve bir kez daha, süreli, sıfırdan çöz (30-40 dk)

### Hafta 15 — HackerRank C# Günü ve İlk Hard Denemesi
**Özet:** C# iki oturumla Medium seviyede rotasyon sırasını alıyor, iki SQL oturumu Hard problemlere ilk ciddi denemeleri yapıyor, Cuma'nın zayıf nokta gözden geçirmesiyle kapanıyor.
**Kaynak:** https://www.hackerrank.com/domains/algorithms · https://www.hackerrank.com/domains/data-structures · https://www.hackerrank.com/interview/interview-preparation-kit · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** Bugünkü Interview Kit oturumundan önce ısınma: C# ile 2 Medium HackerRank problemi, Sorting dışındaki bir alandan seçilmiş — haftanın geri kalanı için genel problem çözme kasını gevşek tut (30-40 dk)
- [ ] **[Salı]** HackerRank Algorithms ya da Data Structures alanında C# ile 2 Medium problem çöz — ya da Interview Preparation Kit'in (https://www.hackerrank.com/interview/interview-preparation-kit) Sorting bölümünü çalış. Diller arası yeniden çözüm: Exercism çözümler sayfandan bir Dart problemi al ve onu burada bir de C# ile çöz, null-safety farklarına dikkat ederek. Dart, C#'ın düşündürmediği neyi düşündürdü sana? (30-40 dk)
- [ ] **[Çar]** HackerRank SQL'de 1 Hard problem dene (problem sunuyorsa MS SQL Server motoru) — herhangi bir ipucuna bakmadan önce ona 20 odaklı dakika ver. Çözsen de çözemesen de sitedeki en üstteki tartışma gönderisini oku ve ana fikri İngilizce anlatabildiğinden emin ol. Kalan zamanı özgüven tazelemek için 1 Medium problemle değerlendir (30-40 dk)
- [ ] **[Per]** İkinci bir Hard (ya da zorlu bir Medium) HackerRank SQL problemi dene, dünkü yaklaşımının üzerine inşa ederek — sekmeyi kapatmadan önce ana numarayı kendi cümlelerinle yaz (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: bugünkü Hard SQL denemesinden sonra, tüm hafta boyunca en zor tek şeyi seç — C#, SQL ya da Dart — ve çözümünü süreli, bakmadan yeniden kur (30-40 dk)

### Hafta 16 — Dart Haftası, jQuery Alıştırmaları, DartPad Flutter
**Özet:** Son birleşik bakım haftası: Salı iki Dart oturumu artı tarayıcı içi jQuery alıştırmaları, Çarşamba son DartPad Flutter mini-görevi, Perşembe haftanın tek (ve şimdiye kadarki en zor) SQL pratiğini taşıyor, Cuma zayıf nokta gözden geçirmesiyle kapanıyor.
**Kaynak:** https://exercism.org/tracks/dart · https://www.w3schools.com/jquery/jquery_exercises.asp · https://dartpad.dev · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** Medium zorlukta 2 taze Exercism Dart alıştırması çöz — bu son DartPad haftası, bugünü işler zorlaşmadan önceki son kolay Dart turun say (30-40 dk)
- [ ] **[Salı]** Hazırsan 2 daha zor Exercism Dart alıştırması çöz, değilse istikrarlı medium seviyede olanları, sonra HackerRank gönderim geçmişini aç ve eski bir C# problemini Exercism'de Dart ile yeniden çöz. jQuery bakımı (~10 dk): https://www.w3schools.com/jquery/jquery_exercises.asp adresindeki W3Schools jQuery alıştırmalarında henüz yapmadığın son bölümü çöz (30-40 dk)
- [ ] **[Çar]** DartPad Flutter günü: https://dartpad.dev adresine git ve kaydırılıp silinebilen öğeleri olan küçük bir ListView yap — Dismissible widget'ıyla bir öğeyi kaydırarak kaldır ve bir SnackBar göster. Hepsi tarayıcıda, kayıt yok; bağımlılıksız tut (pub.dev paketlerinin çoğu DartPad'de yok). Bu, planlanmış son Flutter oturumu — daha büyük Flutter planları kendi programını bekliyor (30-40 dk)
- [ ] **[Per]** Bu haftanın tek SQL durağı: JOIN'leri, toplamayı ve pencere fonksiyonlarını karıştıran 2-3 Medium-zorlu HackerRank SQL problemi çöz — problem sunuyorsa MS SQL Server motorunu seçerek (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: son DartPad haftası bitti — şimdi bu haftanın en zor HackerRank ya da Exercism problemini bul ve soğuk bir şekilde, süreli yeniden çöz (30-40 dk)

### Hafta 17 — HackerRank C# Günü ve SQL Karma Seti
**Özet:** Son düzenli pratik haftası: iki Medium C# oturumu ve gerçek sınav çeşitliliğini taklit eden karma zorlukta bir set kuran iki SQL oturumu, Cuma'nın zayıf nokta gözden geçirmesiyle kapanıyor.
**Kaynak:** https://www.hackerrank.com/domains/algorithms · https://www.hackerrank.com/domains/data-structures · https://www.hackerrank.com/interview/interview-preparation-kit · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** Bugünkü Interview Kit oturumundan önce ısınma: C# ile 2 Medium HackerRank problemi, programın erken bir döneminden bir alt alanı tekrar ziyaret ederek şimdi ne kadar hızlandığını gör (30-40 dk)
- [ ] **[Salı]** HackerRank'te C# ile 2 Medium problem çöz — ya da Interview Preparation Kit'in (https://www.hackerrank.com/interview/interview-preparation-kit) String Manipulation bölümünü al. Diller arası yeniden çözüm: Exercism çözümler sayfanda en çok yeniden çalıştığın Dart problemini seç ve onu burada bir kez daha C# ile çöz. Süreni tut ve o "yavaş" hissini kırmaya çalış (30-40 dk)
- [ ] **[Çar]** HackerRank SQL'de karma set: 1 Easy (hız — 5 dakikanın altında), 2 Medium ve zaman kalırsa Hafta 15'teki Hard problemi tekrar ziyaret et. Problem sunuyorsa MS SQL Server motorunu seç. Bu, sertifika hazırlığından önceki son serbest formlu pratiğin (30-40 dk)
- [ ] **[Per]** İkinci bir karma tur: 1 Easy, 1 Medium ve — Hafta 15'teki Hard problem hâlâ çözülmediyse — ona bir deneme daha, HackerRank SQL'de, problem sunuyorsa MS SQL Server motoruyla (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: bu hafta sana en çok zorluk çıkaran problemi seç — C# ya da SQL — ve eski gönderimin açık olmadan, kronometre çalışırken sıfırdan yeniden çöz (30-40 dk)

### Hafta 18 — Dart Haftası ve Süreli Hazırlık 1. Tur
**Özet:** Dart iki oturumla rotasyonu sürdürüyor, SQL çalışması Çarşamba süreli bir turla ve Perşembe bir gözden geçir-ve-alıştır turuyla sınav koşullarına geçiyor, Cuma'nın zayıf nokta gözden geçirmesiyle kapanıyor.
**Kaynak:** https://exercism.org/tracks/dart · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** Önce topluluk çözümlerine bakmadan, medium zorlukta 2 taze Exercism Dart alıştırması çöz — karşılaştırmadan önce kendi yaklaşımını masaya koymak istiyorsun (30-40 dk)
- [ ] **[Salı]** 2 daha zor Exercism Dart alıştırması çöz. HackerRank gönderim geçmişinden bir C# problemi al ve onu Exercism'de Dart ile yeniden çöz, sonra iki geçmişe birden göz gezdir — HackerRank gönderimlerin ve Exercism çözümler sayfan — ve en beğendiğin 3 çözümü seç (30-40 dk)
- [ ] **[Çar]** Sertifika hazırlığı, 1. tur: 35 dakikalık bir kronometre kur ve HackerRank SQL'de (problem sunuyorsa MS SQL Server motoru) çözebildiğin kadar Medium problem çöz — mola yok, dokümantasyon yok, sınav koşulları. Sonrasında sitedeki gönderim geçmişine bak: kaç tanesini bitirdin ve seni en çok hangi konu yavaşlattı? (30-40 dk)
- [ ] **[Per]** Gözden geçir ve alıştır: dünkü süreli turuna dön, yanlış yaptığın ya da atladığın her problemi bul ve kronometre olmadan yeniden çöz — sonra günü HackerRank SQL'de 15 dakikalık bir mini süreli turla kapat (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: iki süreli SQL turundan sonra, bu hafta en çok canını yakan tek hatayı seç ve onu kalıcı olarak düzelt — süreli, notsuz bir kez daha çöz (30-40 dk)

### Hafta 19 — HackerRank C# Finali ve Süreli Hazırlık 2. Tur
**Özet:** C#, programdaki son pratik sırasını iki oturumla alıyor ve zayıf konunu hedefleyen iki süreli SQL provası yapıyorsun, Cuma'nın zayıf nokta gözden geçirmesiyle kapanıyor.
**Kaynak:** https://www.hackerrank.com/domains/algorithms · https://www.hackerrank.com/domains/data-structures · https://www.hackerrank.com/interview/interview-preparation-kit · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** Bugünkü Interview Kit oturumundan önce son ısınma: C# ile 2 Medium HackerRank problemi, alt alan seçimi sana ait — yarın programın son C# oturumundan önce bir onur turu say (30-40 dk)
- [ ] **[Salı]** Son C# oturumu: HackerRank'te 2 Medium problem çöz ya da programı Interview Preparation Kit'in (https://www.hackerrank.com/interview/interview-preparation-kit) Dynamic Programming bölümüyle kapat. Exercism çözümler sayfandan bir Dart problemiyle son bir diller arası yeniden çözüm yap. Kapanışta 5 dakikanı iki geçmişi de baştan sona kaydırmaya ayır — HackerRank gönderimlerin ve Exercism çözümler sayfan — Hafta 1'den bu yana neyin geliştiğini doğrudan kodda gör (30-40 dk)
- [ ] **[Çar]** Sertifika hazırlığı, 2. tur: ilk 10 dakikayı geçen hafta not ettiğin zayıf konuyu çalışmaya ayır, sonra 25 dakikalık süreli bir Medium SQL problem seti daha koştur (HackerRank SQL, problem sunuyorsa MS SQL Server motoru). Medium'lar her biri 10 dakikanın altında düştüğünde hazırsın (30-40 dk)
- [ ] **[Per]** İkinci süreli tur: Medium HackerRank SQL problemlerinden 20 dakikalık bir set daha, sonra kalan birkaç dakikayı Hafta 18'den hangi hataları zaten düzelttiğine ve hangilerinin hâlâ çıktığına bakmaya ayır (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: son düzenli pratik haftası — karşılaştığın en zor C#, SQL ya da Dart problemini seç ve onu bir kez daha, süreli, bakmadan sıfırdan çöz (30-40 dk)

### Hafta 20 — Dart Uğurlaması ve SQL Sertifikası
**Özet:** Program finali: son tarayıcı içi jQuery quiz'iyle iki rahat Dart oturumu, Çarşamba ücretsiz süreli HackerRank SQL (Intermediate) sertifikası, Perşembe sakin bir SQL oturumu ve Cuma'nın son zayıf nokta gözden geçirmesi.
**Kaynak:** https://exercism.org/tracks/dart · https://www.w3schools.com/jquery/jquery_quiz.asp · https://www.hackerrank.com/skills-verification · https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** Hafif, rahat bir seçim: nasıl hissettiriyorsa o zorlukta 2 Exercism Dart alıştırması çöz — bu bir uğurlama haftası, stres testi değil (30-40 dk)
- [ ] **[Salı]** Sınav gününden önce hafif ısınma: rahat bir seviyede 2 Exercism Dart alıştırması çöz ve HackerRank gönderim geçmişinden son bir C# problemi alıp onu Exercism'de Dart ile yeniden çöz. jQuery finali (~10 dk): https://www.w3schools.com/jquery/jquery_quiz.asp adresindeki 25 soruluk W3Schools jQuery quiz'ini çöz — puanın sitede anında görünür (30-40 dk)
- [ ] **[Çar]** 🏁 https://www.hackerrank.com/skills-verification adresinden ÜCRETSİZ süreli HackerRank "SQL (Intermediate)" sertifika sınavına gir. Sessiz oda, tam odak, not yok. Sonuç ne olursa olsun HackerRank profiline işlenir — ve 20 haftanın tamamı artık HackerRank ve Exercism geçmişlerinde görünüyor (30-40 dk)
- [ ] **[Per]** Sakin ve düşük tempolu: kronometre yok, baskı yok, 2 Easy HackerRank SQL problemi çöz — dünkü sertifikadan sonra rahat bir tur (30-40 dk)
- [ ] **[Cum]** Zayıf nokta gözden geçirmesi: program ruhen yarın bitiyor — bu haftadan (Dart, SQL ya da sertifika hazırlığından) son bir problem seç ve gerçekten kalıcı olduğunu kanıtlamak için süreli, soğuk bir şekilde yeniden çöz (30-40 dk)

---

## 📈 Kontrol Noktaları

| Hafta | Olay | Hedef |
|---|---|---|
| 6 | Select, filtreleme, JOIN ve toplama konularında SQL temelleri sağlam | Bu konularda Easy HackerRank SQL problemlerini ipucu almadan rahatça çözmek |
| 10 | 🏁 HackerRank C# (Basic) sertifikası (ücretsiz, süreli) | Geçmek |
| 15 | Pratik seviye kontrolü | HackerRank'te C# ile Medium'u, Exercism'de medium zorluktaki Dart alıştırmalarını rahatça çözmek |
| 20 | 🏁 HackerRank SQL (Intermediate) sertifikası | Geçmek — MSSQL becerileri sertifikalı |

20. haftadan sonra: Flutter'da derinleşmek istersen, adanmış bir **Flutter Advanced** programı (state management, test, animasyonlar, yayın) doğal bir sonraki adım — başlamaya karar verdiğinde ayrıca planlanacak.
