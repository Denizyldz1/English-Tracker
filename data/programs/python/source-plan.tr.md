# 🤖 PYTHON → AI ENGINEERING (20 Hafta, Yoğun)

> **Profil:** Geliştirici (C#/Dart geçmişi, katalardan gelen temel Python) — işte GERÇEK bir AI projesi var: LLM tabanlı (chatbot/RAG) artı klasik ML — ve uzun vadeli hedef: AI Engineer. LLM tarafı YEREL bir yığın üzerinde çalışıyor: Ollama ve halihazırda kurulu bir Qwen modeli.
> **Sistem:** Yoğun tempo — haftada 5 gün, günde 45-60 dk, **hafta sonu tamamen serbest**. Pzt+Salı = ana kurs hattı (önce Türkçe Udemy Python kursun, sonra resmî pandas/scikit-learn dokümanları, sonra Ollama/LLM konuları) · Çar = Faz 1-2'de HACKERRANK GÜNÜ (Python → SQL → istatistik), Faz 3'te ML/veri bakımı · Per = pratik + yeniden çözüm (platform geçmişin) · Cum = PROJE günü, GitHub'a push edilir — her şey iş projesine doğru birikir.
> **Dil notu:** Udemy kursu Türkçe; geri kalan her şey bilinçli olarak İngilizce — AI dokümantasyonu İngilizce yaşıyor ve onu okumak işin ta kendisi.

---

## 🧰 Kaynaklar (hepsi doğrulandı; aksi belirtilmedikçe ücretsiz)

| Kaynak | Ne için | Adres |
|---|---|---|
| Udemy Python kursu | Faz 1'in Türkçe omurgası — YALNIZ VİDEO (içinde alıştırma yok); temellerden OOP/polimorfizme kadar kapsar. 1.25-1.5x hızda izle ve 5 dakikalık öz-testi geçtiğin bölümleri atla | Udemy kütüphanen |
| Python tutorial | Resmî başvuru kaynağı — Faz 1'in İngilizce yarısı ve tüm kurs boşluklarının kaynağı | https://docs.python.org/3/tutorial/ |
| pandas (resmî) | Faz 2'nin veri omurgası — "Getting started" tutorial serisi ve user guide | https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html |
| scikit-learn | Faz 2'nin ML omurgası — Getting Started artı User Guide bölümleri: ağaçlar, topluluklar, çapraz doğrulama, doldurma, kodlayıcılar, metrikler | https://scikit-learn.org/stable/getting_started.html |
| Ollama | Yerel LLM çalışma ortamın — REST API dokümanları + resmî Python kütüphanesi (`pip install ollama`) | https://docs.ollama.com/api |
| Qwen (kurulu) | Yerel modelin; varyant listesi | https://ollama.com/library/qwen3 |
| nomic-embed-text | Anlamsal arama / RAG için yerel embedding modeli | https://ollama.com/library/nomic-embed-text |
| ChromaDB | RAG için açık kaynaklı, yerel vektör deposu | https://docs.trychroma.com |
| HF LLM Kursu | Ücretsiz Hugging Face kursu — LLM'ler kaputun altında nasıl çalışır | https://huggingface.co/learn/llm-course/chapter1/1 |
| Exercism Python | Kata bakımı — tarayıcı içi editör, testler sitede çalışır | https://exercism.org/tracks/python |
| HackerRank Python | Faz 1'in çarşamba pratiği + ÜCRETSİZ süreli Python (Basic) sertifikasyonu (hafta 6) | https://www.hackerrank.com/domains/python |
| HackerRank SQL | Faz 2'nin çarşambaları — Basic Select, Aggregation, Basic Join + ÜCRETSİZ süreli SQL (Basic) sertifikasyonu (hafta 12) | https://www.hackerrank.com/domains/sql |
| HackerRank 10 Days of Statistics | Faz 2'nin çarşambaları — her ML metriğinin altındaki istatistik, doğrusal regresyona kadar | https://www.hackerrank.com/domains/tutorials/10-days-of-statistics |

## ⚖️ Sabit Kurallar

1. Faz 1 için hızlı geçme kuralı: kurs YALNIZ VİDEO (içinde alıştırma yok), bu yüzden kontrol kursun DIŞINDA yaşar — her kurs bölümünden önce 5 dakikalık bir öz-test yap: Exercism Python ya da HackerRank Python'da konuyla eşleşen bir mini alıştırma çöz. Rahat geçtiysen → o bölümü 1.5x hızda tara veya atla. Zorlandıysan → baştan sona izle. Zaten bildiğin şeyi asla oturup dinleme.
2. Cuma proje günü her zaman gerçek bir GitHub push'u ve net bir İngilizce commit mesajıyla biter. Bu repo'lar senin AI engineer portfolyon.
3. Perşembe yeniden çözümü asla atlanmaz: çözdüğün problemlerin geçmişi platformlarda duruyor (Exercism çözümler sayfası, HackerRank gönderimlerin) — eski bir tanesini seç ve daha iyi çöz.
4. Yaptığın her şey iş projesini işaret eder: her cuma oturumunda işe benzeyen veriyi ve işe benzeyen problemleri tercih et. Kapatmadan önce tek satır yaz: "bu, işteki projeye nasıl yardım ediyor?"
5. Önce yerel: LLM hattı SENİN makinende çalışır (Ollama + Qwen). Bulut API'leri bir karşılaştırma notudur, izlenecek yol değil.
6. Hafta sonu serbest. Bir hafta kayarsa, hafta uzar; sıra asla değişmez. İki ücretsiz sertifikasyon (hafta 6 Python Basic, hafta 12 SQL Basic) sırası geldiğinde alınır.

---
# 🟢 FAZ 1 — Python Derinleşme (Hafta 1-6)

### Hafta 1 — Başlangıç

**Özet:** Kursun gerçek içerik akışını izleyerek Python'a yeniden başla: temeller, veri tipleri, tip dönüşümleri ve operatörler — her bölümden önce 5 dakikalık bir öz-testle. Temiz bir geliştirme ortamı kur ve ilk scriptini push et.
**Kaynak:** Udemy Python kursun · https://docs.python.org/3/tutorial/ · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Önce öz-test: Exercism Python'da (https://exercism.org/tracks/python) tarayıcıda bir kolay alıştırma çöz. Sonra Udemy Python kursunun temeller, veri tipleri ve tip dönüşümleri bölümlerini aç: öz-testin bildiğini kanıtladığı yerleri 1.5x hızda tara; yalnız sallantılı hissettiklerini baştan sona izle. Zayıf konuları bir listeye not al (45-60 dk)
- [ ] **[Salı]** Önce öz-test: HackerRank Python'da (https://www.hackerrank.com/domains/python) bir ısınma problemi. Sonra Udemy kursunun operatörler bölümleri (aritmetik, atama, karşılaştırma, mantıksal): bildiğini 1.5x hızda tara veya atla, kaçırdığını baştan sona izle. Zayıf konular listeni güncelle (45-60 dk)
- [ ] **[Çar]** HACKERRANK GÜNÜ: HackerRank Python'da (https://www.hackerrank.com/domains/python) "Introduction" alt alanını çalış — 3 problem çöz (Python If-Else, Arithmetic Operators, Loops). Problem metinleri İngilizce, yani bu aynı zamanda dil pratiği. Kabul edilen her çözümden sonra Discussions sekmesini aç ve seninkinden kısa bir çözüm oku. Eksik kalan bir kavram olursa karşılığı: https://docs.python.org/3/tutorial/introduction.html (45-60 dk)
- [ ] **[Per]** Exercism Python'ı aç (https://exercism.org/tracks/python), track'e katıl ve tarayıcı editöründe 2 kolay alıştırma çöz. Testler sitede çalıştığı için yerel bir kuruluma ihtiyacın yok (45-60 dk)
- [ ] **[Cum]** PROJE: Python ve VS Code'u kur, bir venv oluştur ve ilk yardımcı scriptini yaz — bir klasördeki dosyaları türüne göre ayıran bir klasör düzenleyici. "python-journey" adında bir GitHub repo'su aç ve scripti kısa bir commit mesajıyla push et (45-60 dk)

### Hafta 2 — Koşullar, Listeler ve Döngüler

**Özet:** Kursun akış kontrolü bloğu: koşullar, listeler, for/while ve break/continue. Resmî tutorial bu hafta aynı zemini İngilizce işliyor — mükemmel bir çift maruz kalma.
**Kaynak:** Udemy Python kursun · https://docs.python.org/3/tutorial/ · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Önce öz-test: Exercism Python'da (https://exercism.org/tracks/python) koşullar/listeler konulu bir mini alıştırma. Sonra Udemy kursunun koşullu ifadeler ve listeler bölümleri: bildiğini 1.5x hızda tara, kaçırdığını baştan sona izle (45-60 dk)
- [ ] **[Salı]** Önce öz-test: HackerRank Python'da (https://www.hackerrank.com/domains/python) bir döngü problemi. Sonra Udemy kursunun for/while döngüleri ve break/continue bölümleri: aynı tara-ya-da-izle kuralı (45-60 dk)
- [ ] **[Çar]** HACKERRANK GÜNÜ: HackerRank Python'da (https://www.hackerrank.com/domains/python) "Basic Data Types" alt alanından 3 problem çöz (Lists, Tuples, Find the Runner-Up Score, Nested Lists) — hepsi listeler üzerinde döngü ve koşul. Her birinden sonra bir Discussions çözümü oku. Bir yapıda takılırsan: https://docs.python.org/3/tutorial/controlflow.html (45-60 dk)
- [ ] **[Per]** Exercism Python'da (https://exercism.org/tracks/python) veya HackerRank Python'da (https://www.hackerrank.com/domains/python) 1 yeni alıştırma çöz, sonra platform geçmişinden 1 eski problemi eski cevabına bakmadan YENİDEN ÇÖZ (45-60 dk)
- [ ] **[Cum]** PROJE: "python-journey" içinde bir CSV işleme scripti yaz: bir CSV dosyasını oku (ör. işteki gibi bir dışa aktarım), satırları bir koşula göre filtrele ve küçük bir özet yazdır (adetler, toplamlar). Tek uzun blok değil, fonksiyonlar kullan. GitHub'a push et (45-60 dk)

### Hafta 3 — Metinler ve Sözlükler

**Özet:** Kursun metin-ve-veri bloğu: karakter dizileri, string metotları, liste metotları ve sözlükler — veri işinin günlük araçları.
**Kaynak:** Udemy Python kursun · https://docs.python.org/3/tutorial/ · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Önce öz-test: Exercism Python'da (https://exercism.org/tracks/python) metin işleme konulu bir alıştırma. Sonra Udemy kursunun karakter dizileri ve string metotları bölümleri: bildiğini 1.5x hızda tara, kaçırdığını baştan sona izle (45-60 dk)
- [ ] **[Salı]** Önce öz-test: HackerRank Python'da (https://www.hackerrank.com/domains/python) bir sözlük problemi. Sonra Udemy kursunun liste metotları ve sözlükler bölümleri: aynı tara-ya-da-izle kuralı. Bir deneme dosyasında 5 sözlük işlemi dene (45-60 dk)
- [ ] **[Çar]** HACKERRANK GÜNÜ: HackerRank Python'da (https://www.hackerrank.com/domains/python) "Strings" ve "Collections" alt alanlarından 3 problem çöz (sWAP cASE, String Split and Join, collections.Counter()). `Counter` ve `defaultdict`, gerçek kodda gerçekten uzanacağın sözlük araçları. Comprehension'lar Hafta 6'da geri gelecek — sallantılıysa oku: https://docs.python.org/3/tutorial/datastructures.html (45-60 dk)
- [ ] **[Per]** Exercism Python'da (https://exercism.org/tracks/python) OOP tadında 1 yeni alıştırma ya da HackerRank Python'da (https://www.hackerrank.com/domains/python) bir Classes problemi çöz, sonra platform geçmişinden 1 eski problemi YENİDEN ÇÖZ (45-60 dk)
- [ ] **[Cum]** PROJE: "python-journey" içinde sözlük tabanlı bir rapor aracı kur: Hafta 2'deki CSV'yi al ve sözlükler kullanarak kategori bazlı bir özet üret (grup başına adetler, toplamlar), küçük ve okunabilir bir rapor olarak yazdır. GitHub'a push et (45-60 dk)

### Hafta 4 — Fonksiyonlar, Özyineleme ve Hatalar

**Özet:** Kursun fonksiyonlar bloğu: fonksiyonlar, özyinelemeli fonksiyonlar ve hata yönetimi — artı bozuk girdide çökmeyen sağlam bir CLI aracı.
**Kaynak:** Udemy Python kursun · https://docs.python.org/3/tutorial/ · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Önce öz-test: Exercism Python'da (https://exercism.org/tracks/python) fonksiyonlar konulu bir alıştırma. Sonra Udemy kursunun fonksiyonlar ve özyinelemeli fonksiyonlar bölümleri: bildiğini 1.5x hızda tara, kaçırdığını baştan sona izle. Kendin küçük bir özyinelemeli fonksiyon yaz (45-60 dk)
- [ ] **[Salı]** Önce öz-test: HackerRank Python'da (https://www.hackerrank.com/domains/python) istisna tadında bir problem. Sonra Udemy kursunun hata yönetimi bölümleri (try/except, hata fırlatma): aynı tara-ya-da-izle kuralı (45-60 dk)
- [ ] **[Çar]** HACKERRANK GÜNÜ: HackerRank Python'da (https://www.hackerrank.com/domains/python) "Errors and Exceptions" alt alanını çöz (Exceptions, Incorrect Regex) artı seçeceğin bir problem daha — ama kendi kuralını koy: her çözüm çökmek yerine try/except ile düzgünce hata versin. Sonra kendi istisna sınıfını yaz; başvuru kaynağı https://docs.python.org/3/tutorial/errors.html (45-60 dk)
- [ ] **[Per]** Exercism Python'da (https://exercism.org/tracks/python) veya HackerRank Python'da (https://www.hackerrank.com/domains/python) 1 yeni alıştırma çöz, sonra platform geçmişinden 1 eski problemi YENİDEN ÇÖZ (45-60 dk)
- [ ] **[Cum]** PROJE: "python-journey" içinde sağlam bir CLI aracı kur: argümanlar için argparse kullan, bozuk girdiyi net hata mesajlarıyla karşıla (ham traceback yok) ve dosyaları güvenle oku/yaz. Örnek: bir CSV'yi temizleyen ya da dönüştüren bir araç. GitHub'a push et (45-60 dk)

### Hafta 5 — OOP ve Polimorfizm

**Özet:** Kursun son bloğu: sınıflar, nesneler, kalıtım ve polimorfizm — C# bilgin ile Python üslubu arasındaki köprü. Yanında resmî Classes bölümünü de oku: Python'un nesne modeli C#'ınki DEĞİL.
**Kaynak:** Udemy Python kursun · https://docs.python.org/3/tutorial/ · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Önce öz-test: Exercism Python'da (https://exercism.org/tracks/python) sınıflar konulu bir alıştırma. Sonra Udemy kursunun OOP bölümleri (sınıflar, `__init__`, metotlar): C#'tan bildiklerini 1.5x hızda tara, Python'a özgü olanları baştan sona izle. C#'tan 3 farkı not al (45-60 dk)
- [ ] **[Salı]** Udemy kursunun kalıtım ve polimorfizm bölümleri (artı `__str__` gibi özel metotlar): aynı tara-ya-da-izle kuralı. Fikirleri sınamak için kendi küçük sınıf hiyerarşini yaz (45-60 dk)
- [ ] **[Çar]** HACKERRANK GÜNÜ: HackerRank Python'da (https://www.hackerrank.com/domains/python) "Classes" alt alanındaki iki problemi de çöz (Dealing with Complex Numbers, Class 2 - Find the Torsional Angle) — sınav koşullarında Python OOP'si, ki Hafta 6 tam olarak bunu isteyecek. Sonra https://docs.python.org/3/tutorial/classes.html adresinden sınıf ve örnek nitelikleri farkını ve Python'da neden `private` olmadığını oku, C# farkları notuna ekle (45-60 dk)
- [ ] **[Per]** HackerRank Python'da (https://www.hackerrank.com/domains/python) orta zorlukta bir problem seti çöz (hedef 3 tane). Hangi konular hâlâ yavaş geliyor, not al (45-60 dk)
- [ ] **[Cum]** PROJE: "python-journey" scriptlerini sınıflara dönüştür: ör. her biri kendi dosyasında bir `FileOrganizer` sınıfı ve bir `CsvReport` sınıfı, OOP haftasının öğrettiklerini kullanarak. Davranışı aynı tut, kodu daha temiz yap. GitHub'a push et (45-60 dk)

### Hafta 6 — Kurs Boşlukları ve Faz Finali

**Özet:** Kurs dosya I/O'sunu, modülleri/venv'i, generator'ları ve decorator'ları kapsamıyor — bu boşlukları resmî tutorial ile kapat, sonra ücretsiz süreli sertifikasyonla bitir.
**Kaynak:** Udemy Python kursun · https://docs.python.org/3/tutorial/ · https://www.hackerrank.com/domains/python · https://www.hackerrank.com/skills-verification/python_basic

- [ ] **[Pzt]** KURS BOŞLUĞU GÜNÜ 1: resmî Python tutorial'ından (https://docs.python.org/3/tutorial/) "Input and Output" ve "Modules" bölümlerini oku — `with` ile dosya okuma/yazma, import'lar, paketler. Sonra uygula: "python-journey" repo'suna requirements.txt ve düzgün bir paket klasörü ekle (45-60 dk)
- [ ] **[Salı]** KURS BOŞLUĞU GÜNÜ 2: comprehension'lar, generator'lar, decorator'lar. Comprehension'larla Hafta 3'teki Data Structures bölümünde tanıştın — şimdi eski döngülerinden 3'ünü comprehension olarak yeniden yaz; sonra resmî tutorial'ı (https://docs.python.org/3/tutorial/) kullanarak minik bir generator ve minik bir decorator yaz (ör. bir süre ölçer). Hafta 1-5'ten kalan zayıf konular listeni gözden geçir ve yalnız o kurs videolarını yeniden izle (45-60 dk)
- [ ] **[Çar]** HackerRank Python'da (https://www.hackerrank.com/domains/python) süreli pratik yap: 3 orta seviye problem seç ve her birine 15 dakika ver. Bu, cuma günkü sınav formatı için bir ısınma (45-60 dk)
- [ ] **[Per]** YENİDEN ÇÖZÜM maratonu: Exercism/HackerRank geçmişinden 3 eski problem seç ve eski kodlarına bakmadan sıfırdan yeniden çöz. Hedef hızlı ve temiz olmak (45-60 dk)
- [ ] **[Cum]** 🏁 ÜCRETSİZ süreli HackerRank "Python (Basic)" sertifikasyonuna gir: 90 dakika, 2 soru (https://www.hackerrank.com/skills-verification/python_basic). Sınavdan sonra "python-journey" repo'sunu topla: README'yi Faz 1'de neler kurduğunla güncelle ve sertifika linkini ekle (~90 dk)
# 🔵 FAZ 2 — Veri ve Klasik ML (Hafta 7-12)

### Hafta 7 — Pandas I

**Özet:** Gerçek veriyle çalışmaya başla. Pandas'ın temellerini resmî dokümantasyondan öğren: DataFrame nedir, dosya okuma/yazma, alt küme seçme ve grafik çizme. Cuma günü yeni becerilerinle gerçek bir CSV dosyasını keşfediyorsun.
**Kaynak:** https://pandas.pydata.org/docs/user_guide/10min.html • https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html • https://www.hackerrank.com/domains/sql • https://exercism.org/tracks/python • https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** "10 minutes to pandas" sayfasını (https://pandas.pydata.org/docs/user_guide/10min.html) baştan sona oku ve her örneği bir notebook'ta veya scriptte KENDİN YAZ — kopyala-yapıştır yok. Bu tek sayfa, bütün kütüphanenin haritası. Sonra resmî serinin (https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html) 1-2. tutorial'larına göz at: DataFrame ile Series farkı ve CSV okuma/yazma. (45-60 dk)
- [ ] **[Salı]** Resmî pandas "Getting started" tutorial serisinde (https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html) 3-4. tutorial'ları çalış: bir DataFrame'den alt küme seçme (`loc`/`iloc`, boolean filtreler) ve grafik çizme. Kısa notlar al: hangi pandas fonksiyonu ne yapıyor? (45-60 dk)
- [ ] **[Çar]** HACKERRANK GÜNÜ: HackerRank SQL'de (https://www.hackerrank.com/domains/sql) "Basic Select" alt alanından 5 problem çöz. Bir `WHERE` cümlesi, dün pandas'ta yazdığın boolean maskeyle tıpatıp aynı düşünce — iki dilin aynı şeyi söylediğini gör. Hepsi tarayıcıda çalışır ve SQL, her gerçek veri işinin yarısıdır. (45-60 dk)
- [ ] **[Per]** Python bakımı: Exercism'de (https://exercism.org/tracks/python) veya HackerRank'te (https://www.hackerrank.com/domains/python) bir yeni kata çöz. Sonra platform geçmişinden bir eski problemi önceki cevabına bakmadan yeniden çöz. (45-60 dk)
- [ ] **[Cum]** PROJE: Kendi bilgisayarında, ilgini çeken bir konuya dair gerçek bir CSV dosyası yükle (ör. futbol, filmler ya da fiyatlar). Onu pandas ile keşfet: .shape, .dtypes, .head() ve .value_counts()'a bak. Notebook'u ya da scripti GitHub repo'na commit'le. (45-60 dk)

### Hafta 8 — Pandas II

**Özet:** Resmî tutorial serisini bitir ve user guide ile bir seviye derine in: yeni sütunlar, gruplama, yeniden şekillendirme, tablo birleştirme ve eksik değerler. Cuma günü gerçek bir veri mühendisi gibi dağınık bir veri setini temizliyorsun.
**Kaynak:** https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html • https://pandas.pydata.org/docs/user_guide/merging.html • https://pandas.pydata.org/docs/user_guide/missing_data.html • https://www.hackerrank.com/domains/sql • https://exercism.org/tracks/python

- [ ] **[Pzt]** Pandas tutorial serisinde (https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html) 5-6. tutorial'ları tamamla: mevcut sütunlardan yeni sütun türetme ve `groupby` ile `value_counts` kullanarak özet istatistik hesaplama. Her örneği kendin çalıştır. (45-60 dk)
- [ ] **[Salı]** Aynı serinin (https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html) 7-8. tutorial'larını tamamla: tablo düzenini yeniden şekillendirme (sort, pivot, melt) ve birden çok tablodaki veriyi birleştirme. Sonra user guide'ın merge/join bölümünü oku (https://pandas.pydata.org/docs/user_guide/merging.html) ve kendi iki tablonu birleştir. (45-60 dk)
- [ ] **[Çar]** HACKERRANK GÜNÜ: HackerRank SQL'de (https://www.hackerrank.com/domains/sql) "Aggregation" alt alanından 5 problem çöz — GROUP BY ile COUNT, SUM, AVG, MIN/MAX. Bu, pazartesi yaptığın `.groupby()`'ın öteki dildeki hâli; ikisini aynı hafta yapmak kavramı kalıcı kılan şeydir. (45-60 dk)
- [ ] **[Per]** Python bakımı: Exercism'de (https://exercism.org/tracks/python) veya HackerRank'te (https://www.hackerrank.com/domains/python) bir yeni kata çöz. Sonra platform geçmişinden bir eski problemi ezberden yeniden çöz. (45-60 dk)
- [ ] **[Cum]** PROJE: Dağınık bir veri seti al (ya da geçen haftaki CSV'ni dağıt) ve pandas ile temizle: eksik değerleri, yanlış veri tiplerini ve yinelenen satırları düzelt. Çalışırken user guide'ın eksik veri bölümünü açık tut (https://pandas.pydata.org/docs/user_guide/missing_data.html) — `isna`/`dropna`/`fillna` ve sütunun dtype'ının "eksik"in ne demek olduğunu nasıl belirlediği. Neyi düzelttiğine dair kısa bir İngilizce özet yaz ve her şeyi GitHub'a push et. (45-60 dk)

### Hafta 9 — İlk Modeller

**Özet:** Makine öğrenmesi burada, doğrudan scikit-learn dokümantasyonundan başlıyor: estimator API'si (fit/predict), karar ağaçları ve veriyi neden eğitim/doğrulama diye ayırdığımız. Cuma günü ilk karar ağacını eğitiyorsun.
**Kaynak:** https://scikit-learn.org/stable/getting_started.html • https://scikit-learn.org/stable/modules/tree.html • https://scikit-learn.org/stable/modules/cross_validation.html • https://www.hackerrank.com/domains/tutorials/10-days-of-statistics • https://exercism.org/tracks/python

- [ ] **[Pzt]** Resmî scikit-learn Getting Started rehberini oku (https://scikit-learn.org/stable/getting_started.html) ve her örneği kendin çalıştır: estimator'lar, fit/predict, transformer'lar ve pipeline'lar. İşte kullanacağın kütüphane bu — bu sayfa da onun grameri. (45-60 dk)
- [ ] **[Salı]** User Guide'ın karar ağaçları bölümünü oku (https://scikit-learn.org/stable/modules/tree.html): bir ağaç nasıl dallanır, `max_depth` neyi değiştirir, sınıflandırıcı ile regresör farkı. scikit-learn ile birlikte gelen bir veri setinde (`load_iris` ya da `fetch_california_housing`) bir tane eğit. Sonra https://scikit-learn.org/stable/modules/cross_validation.html sayfasının `train_test_split` kısmını al ve ağacını ayırdığın yarıda puanla — İngilizce tek cümle yaz: eğitim skoru neden yalan söyleyebilir? (45-60 dk)
- [ ] **[Çar]** HACKERRANK GÜNÜ: "10 Days of Statistics"e başla (https://www.hackerrank.com/domains/tutorials/10-days-of-statistics) ve Gün 0-2'yi bitir — ortalama/medyan/mod, ağırlıklı ortalama, çeyreklikler, standart sapma ve temel olasılık. Bundan sonra okuyacağın her ML metriği tam olarak bunun üstüne oturuyor. (45-60 dk)
- [ ] **[Per]** Python bakımı: Exercism'de (https://exercism.org/tracks/python) veya HackerRank'te (https://www.hackerrank.com/domains/python) bir yeni kata çöz. Sonra platform geçmişinden bir eski problemi önceki cevabına bakmadan yeniden çöz. (45-60 dk)
- [ ] **[Cum]** PROJE: İlk DecisionTreeRegressor'ını (ya da sınıflandırıcını) yerelde eğit. Önce scikit-learn ile gelen bir veri setinde tekrarla, sonra Hafta 7-8'deki KENDİ veri setinde dene. Sonuçları karşılaştır ve notebook'u GitHub'a commit'le. (45-60 dk)

### Hafta 10 — Model Kalitesi

**Özet:** Modellerin neden başarısız olduğunu öğren: underfitting ve overfitting. Random forest ve gradient boosting ile tanış ve bir modeli çıplak doğruluk yerine DOĞRU metrikle ölçmeyi öğren. Cuma günü eksiksiz bir pipeline kuruyorsun.
**Kaynak:** https://scikit-learn.org/stable/modules/learning_curve.html • https://scikit-learn.org/stable/modules/ensemble.html • https://scikit-learn.org/stable/modules/model_evaluation.html • https://www.hackerrank.com/domains/tutorials/10-days-of-statistics • https://exercism.org/tracks/python

- [ ] **[Pzt]** Underfitting ve overfitting: doğrulama eğrisi ve öğrenme eğrisi rehberini oku (https://scikit-learn.org/stable/modules/learning_curve.html). Sonra Hafta 9'daki ağacını al ve doğrulama skorunu `max_depth`e karşı çiz — overfit etmeye tam olarak nerede başladığını bul. (45-60 dk)
- [ ] **[Salı]** Topluluk (ensemble) bölümünü oku (https://scikit-learn.org/stable/modules/ensemble.html): random forest ve HistGradientBoosting, gerçek tablo projelerinin iki iş atı. İkisini de kendi veri setinde eğit ve tek bir ağaçla bir orman arasındaki farkı not al. (45-60 dk)
- [ ] **[Çar]** HACKERRANK GÜNÜ: "10 Days of Statistics"e geri dön (https://www.hackerrank.com/domains/tutorials/10-days-of-statistics) ve Gün 7-9'u yap — Pearson korelasyonu, en küçük kareler regresyon doğrusu ve çoklu doğrusal regresyon. Bu hafta elle kurduğun şeyi scikit-learn sana tek bir `fit()` çağrısı olarak veriyor; olay tam da bu. (45-60 dk)
- [ ] **[Per]** Python bakımı: Exercism'de (https://exercism.org/tracks/python) veya HackerRank'te (https://www.hackerrank.com/domains/python) bir yeni kata çöz. Sonra platform geçmişinden bir eski problemi ezberden yeniden çöz. (45-60 dk)
- [ ] **[Cum]** PROJE: İşe benzeyen sentetik veri üzerinde bir sınıflandırma görevi için scikit-learn Pipeline'ı kur (ön işleme + model). Veriyi make_classification ile üretebilirsin. Eğit, sonra yalnız accuracy ile değil İKİ metrikle puanla — https://scikit-learn.org/stable/modules/model_evaluation.html sayfasını aç ve precision/recall ya da karmaşıklık matrisi ekle, çıplak accuracy'nin seni nerede yanıltacağını tek satırla yaz. Kodu GitHub'a push et. (45-60 dk)

### Hafta 11 — Ön İşleme ve Pipeline'lar

**Özet:** Gerçek veri kirlidir: eksik değerler ve kategorik sütunlar. İkisini de scikit-learn yoluyla ele almayı öğren — imputer'lar, encoder'lar ve ColumnTransformer — ve her şeyi TEK bir pipeline nesnesine paketle. Cuma günü kendi projene çapraz doğrulama ekliyorsun.
**Kaynak:** https://scikit-learn.org/stable/modules/impute.html • https://scikit-learn.org/stable/modules/preprocessing.html • https://scikit-learn.org/stable/modules/compose.html • https://www.hackerrank.com/domains/sql • https://exercism.org/tracks/python

- [ ] **[Pzt]** Eksik değer doldurma rehberini oku (https://scikit-learn.org/stable/modules/impute.html): SimpleImputer stratejileri ve doldurmanın neden bölmeden önce değil, pipeline'ın İÇİNDE yaşaması gerektiği. Eksik değerleri olan bir veri setinde uygula. (45-60 dk)
- [ ] **[Salı]** Ön işleme rehberini oku (https://scikit-learn.org/stable/modules/preprocessing.html) — OneHotEncoder, OrdinalEncoder ve ölçekleme — sonra ColumnTransformer rehberini (https://scikit-learn.org/stable/modules/compose.html). Sayısal ile kategorik sütunlara farklı davranan, sonunda bir modele bağlanan TEK bir pipeline kur; iş yerinde gerçekten teslim ettiğin şey bu tek nesnedir. (45-60 dk)
- [ ] **[Çar]** HACKERRANK GÜNÜ: HackerRank SQL'de (https://www.hackerrank.com/domains/sql) "Basic Join" alt alanından 5 problem çöz. JOIN, noktalaması değişmiş bir `pd.merge`'dür. Bu aynı zamanda haftaya gireceğin süreli SQL sertifikasyonunun ısınması, o yüzden kendini gevşekçe süre tut. (45-60 dk)
- [ ] **[Per]** Python bakımı: Exercism'de (https://exercism.org/tracks/python) veya HackerRank'te (https://www.hackerrank.com/domains/python) bir yeni kata çöz. Sonra platform geçmişinden bir eski problemi önceki cevabına bakmadan yeniden çöz. (45-60 dk)
- [ ] **[Cum]** PROJE: Hafta 10'daki modeline çapraz doğrulama uygula ve onu iyileştirmeye çalış (daha iyi özellikler, daha iyi parametreler). Metriklerini (öncesi ve sonrası) GitHub repo'nun README'sine İngilizce olarak kaydet. (45-60 dk)

### Hafta 12 — Uçtan Uca ML Kilometre Taşı

**Özet:** Büyük hafta ve iki kez ödeme yapıyor: çarşamba ÜCRETSİZ süreli bir SQL sertifikasyonu, cuma KENDİ veri setin üzerinde uçtan uca eksiksiz bir model. Onlardan önce: doğru yapılmış çapraz doğrulama, hiperparametre araması ve gerçek projeleri sessizce mahveden sızıntı tuzakları.
**Kaynak:** https://scikit-learn.org/stable/modules/cross_validation.html • https://scikit-learn.org/stable/modules/grid_search.html • https://scikit-learn.org/stable/common_pitfalls.html • https://www.hackerrank.com/skills-verification/sql_basic • https://exercism.org/tracks/python

- [ ] **[Pzt]** Çapraz doğrulama rehberine geri dön (https://scikit-learn.org/stable/modules/cross_validation.html), bu sefer kendi modelin üzerinde `cross_val_score` ve KFold için. Sonra hiperparametre ayarlama rehberini oku (https://scikit-learn.org/stable/modules/grid_search.html) ve küçük bir GridSearchCV çalıştır. (45-60 dk)
- [ ] **[Salı]** "Common pitfalls and recommended practices" sayfasını oku (https://scikit-learn.org/stable/common_pitfalls.html), özellikle VERİ SIZINTISI bölümünü — bu, modeli notebook'ta harika gösterip canlıda çökerten hatadır. Sonra kendi kodunu denetle: herhangi bir ön işleme test verisi üzerinde fit ediliyor mu? Bulduğunu düzelt. (45-60 dk)
- [ ] **[Çar]** 🏁 HACKERRANK GÜNÜ: ÜCRETSİZ süreli HackerRank "SQL (Basic)" sertifikasyonuna gir (https://www.hackerrank.com/skills-verification/sql_basic) — Hafta 7'den beri Basic Select, Aggregation ve Basic Join ile buna hazırlanıyorsun. Sertifika linkini GitHub profil README'ne Python (Basic) sertifikanın yanına ekle. (45-60 dk)
- [ ] **[Per]** Python bakımı: Exercism'de (https://exercism.org/tracks/python) veya HackerRank'te (https://www.hackerrank.com/domains/python) bir yeni kata çöz. Sonra platform geçmişinden bir eski problemi ezberden yeniden çöz. (45-60 dk)
- [ ] **[Cum]** 🏁 KİLOMETRE TAŞI PROJESİ: veri setini seç — elde edebiliyorsan işe benzeyen veri — ve üzerine eksiksiz modeli kur: tek bir pipeline (doldurma + kodlama + model), çapraz doğrulanmış bir skor ve en az bir ayarlanmış hiperparametre. Ardından GitHub repo'nda yaklaşımını anlatan İngilizce bir README yaz: hangi özellikler, hangi model, başarıya hangi metrik karar verdi, skor ve bir sonraki adımda denemek istediklerin. (90 dk)
# 🔴 FAZ 3 — Yerel LLM Mühendisliği: Ollama + Qwen (Hafta 13-20)

### Hafta 13 — Modelinle Konuş

**Özet:** Kurulu Qwen modelinle (https://ollama.com/library/qwen3) kod üzerinden konuşmaya başlıyorsun. Önce REST API ile, sonra resmi Python kütüphanesiyle. Cuma günü "local-ai-lab" proje repo'nu temiz bir sohbet script'iyle açıyorsun.
**Kaynak:** Ollama REST API (https://docs.ollama.com/api), ollama-python (https://github.com/ollama/ollama-python), Qwen sürümleri (https://ollama.com/library/qwen3)

- [ ] **[Pzt]** https://docs.ollama.com/api adresindeki Ollama REST API dokümanlarını oku. Kurulu Qwen modeline curl ile bir sohbet isteği gönder, sonra aynısını Python `requests` ile yap. Cevabı ekrana yazdır. (45-60 dk)
- [ ] **[Salı]** https://github.com/ollama/ollama-python adresinden resmi Python kütüphanesini kur (`pip install ollama`). Dünkü sohbeti `ollama.chat` ile Python'da yeniden yaz, sonra streaming'i aç ve token'ları geldikçe ekrana bas. (45-60 dk)
- [ ] **[Çar]** Sklearn bakımı: Hafta 12'deki kilometre taşı projeni aç ve pipeline'ında TEK bir iyileştirme yap (yeni bir özellik ya da daha iyi bir model ayarı). Çapraz doğrulanmış skorun gerçekten kıpırdıyor mu bak. (45-60 dk)
- [ ] **[Per]** Kata günü: https://exercism.org/tracks/python üzerinde bir yeni alıştırma çöz, sonra Exercism ya da HackerRank geçmişinden ESKİ bir problemi eski koduna bakmadan yeniden çöz. (45-60 dk)
- [ ] **[Cum]** PROJE: GitHub'da "local-ai-lab" adında yeni bir repo oluştur. Kurulu Qwen modelin için temiz bir Python sohbet script'i yaz: streaming çıktı ve kolayca değiştirilebilir model parametreleri (temperature, model adı). Push et. (45-60 dk)

### Hafta 14 — Prompt Mühendisliği

**Özet:** Qwen modelini nasıl kontrol edeceğini öğreniyorsun: sistem prompt'ları, temperature, top_p ve JSON çıktı. Ayrıca LLM'lerin gerçekte nasıl çalıştığını anlamak için ücretsiz Hugging Face LLM kursunun 1. bölümünü okuyorsun. Cuma: hafızalı bir CLI sohbet botu.
**Kaynak:** HF LLM kursu 1. bölüm (https://huggingface.co/learn/llm-course/chapter1/1), Ollama API (https://docs.ollama.com/api)

- [ ] **[Pzt]** Kurulu Qwen modelinle deney yap: farklı sistem prompt'ları ver, temperature ve top_p değerlerini değiştir (seçenekler https://docs.ollama.com/api içinde). Her değişikliğin cevapları nasıl etkilediğini bir not dosyasına yaz. (45-60 dk)
- [ ] **[Salı]** LLM'lerin gerçekte nasıl çalıştığını görmek için https://huggingface.co/learn/llm-course/chapter1/1 adresindeki ücretsiz Hugging Face LLM kursunun 1. bölümünü oku. Sonra Qwen'den yapılandırılmış çıktı iste: JSON formatı talep et ve Python `json.loads` ile ayrıştır. (45-60 dk)
- [ ] **[Çar]** Veri pratiği: sevdiğin küçük bir veri kümesi (CSV) seç ve hızlı bir pandas analizi yap — yükle, temizle, grupla ve bir grafik çiz. Faz 2 becerilerini sıcak tut. (45-60 dk)
- [ ] **[Per]** Kata günü: https://www.hackerrank.com/domains/python üzerinde bir yeni alıştırma çöz, sonra platform geçmişinden ESKİ bir problemi ezberden yeniden çöz. (45-60 dk)
- [ ] **[Cum]** PROJE: "local-ai-lab" içinde Qwen için bir CLI sohbet botu yaz; konuşma geçmişini bir listede tutsun ve sistem prompt'unu küçük bir config dosyasından okusun. GitHub'a push et. (45-60 dk)

### Hafta 15 — Embedding'ler

**Özet:** Bu hafta metin sayıya dönüşüyor. nomic-embed-text modelini indiriyor, Python'da embedding üretiyor ve metinleri kosinüs benzerliğiyle karşılaştırıyorsun. Cuma: kendi notların üzerinde anlamsal arama.
**Kaynak:** nomic-embed-text (https://ollama.com/library/nomic-embed-text), ollama-python (https://github.com/ollama/ollama-python)

- [ ] **[Pzt]** `ollama pull nomic-embed-text` komutunu çalıştır (model sayfası: https://ollama.com/library/nomic-embed-text). https://github.com/ollama/ollama-python adresindeki Python kütüphanesiyle 5 kısa cümlenin embedding'ini çıkar ve vektörün boyutuna ve değerlerine bak. (45-60 dk)
- [ ] **[Salı]** numpy ile bir kosinüs benzerliği fonksiyonu yaz ve embedding'e çevirdiğin cümleleri karşılaştır: hangi çiftler yakın, hangileri uzak? Mantıklı çalıştığını doğrulamak için hem benzer hem çok farklı cümlelerle test et. (45-60 dk)
- [ ] **[Çar]** Sklearn bakımı: https://scikit-learn.org/stable/getting_started.html adresine geri dön ve kendini zayıf hissettiğin bir konuyu (pipeline'lar, çapraz doğrulama veya yeni bir model tipi) Hafta 12 projendeki veri üzerinde çalış. (45-60 dk)
- [ ] **[Per]** Kata günü: https://exercism.org/tracks/python üzerinde bir yeni alıştırma, artı eski çözümlerinden birini bakmadan yeniden çözme. (45-60 dk)
- [ ] **[Cum]** PROJE: kendi notlarının veya belgelerinin bulunduğu bir klasör üzerinde anlamsal arama kur: her dosyayı nomic-embed-text ile embedding'e çevir, sorguyu da embedding'e çevir, dosyaları kosinüs benzerliğine göre sırala, ilk 3'ü yazdır. "local-ai-lab" repo'suna push et. (45-60 dk)

### Hafta 16 — Vektör Deposu

**Özet:** 10 dosya için numpy ile arama yeterli, ama gerçek bir vektör deposuna ihtiyacın var. Bu hafta ChromaDB'yi öğreniyorsun (açık kaynak, yerelde çalışır): koleksiyonlar, add, query ve kalıcılık. Cuma: belgelerin artık Chroma'da yaşıyor.
**Kaynak:** ChromaDB dokümanları (https://docs.trychroma.com), nomic-embed-text (https://ollama.com/library/nomic-embed-text)

- [ ] **[Pzt]** https://docs.trychroma.com adresindeki ChromaDB başlangıç dokümanlarını oku. Kur, bir koleksiyon oluştur, birkaç belge ekle ve ilk `query` sorgunu çalıştır. (45-60 dk)
- [ ] **[Salı]** https://docs.trychroma.com ile devam et: kalıcılığı (veritabanını diske kaydetme) ve metadata filtrelerini öğren. Python'u yeniden başlat ve koleksiyonunun hâlâ orada olduğunu doğrula. (45-60 dk)
- [ ] **[Çar]** Veri pratiği: dağınık bir CSV al (ya da kendin dağıt) ve pandas ile temizleme pratiği yap — eksik değerler, yanlış tipler, tekrar eden satırlar. Sondaki yirmi dakika: bir groupby çıkarımı, bir grafik. (45-60 dk)
- [ ] **[Per]** Kata günü: https://www.hackerrank.com/domains/python üzerinde bir yeni problem ve geçmişinden bir yeniden çözme. (45-60 dk)
- [ ] **[Cum]** PROJE: https://ollama.com/library/nomic-embed-text ile ürettiğin embedding'leri kullanarak belgelerini kalıcı bir Chroma koleksiyonunda indeksle ve koleksiyonu sorgulayan küçük bir arama script'i yaz. "local-ai-lab" repo'suna push et. (45-60 dk)

### Hafta 17 — RAG v1

**Özet:** Büyük hafta: her şeyi RAG'de birleştiriyorsun. Chroma'dan en iyi k parçayı çek, bir bağlam oluştur ve Qwen modelin SENİN belgelerini kullanarak cevap versin. Tamamen yerel — bulut API'sine ihtiyaç yok (OpenAI tarzı kurulumlara kıyasla bütün mesele bu).
**Kaynak:** HF LLM kursu (https://huggingface.co/learn/llm-course/chapter1/1), Ollama API (https://docs.ollama.com/api), ChromaDB (https://docs.trychroma.com)

- [ ] **[Pzt]** Önce RAG desenini kâğıt üzerinde çalış: soru → embedding → Chroma'dan (https://docs.trychroma.com) en iyi k sonucu çekme → bağlam metnini oluşturma → LLM'e sorma. Çekme adımını yaz: bir soru için en iyi 3 parçayı döndüren bir fonksiyon. (45-60 dk)
- [ ] **[Salı]** Üretim adımını yaz: çektiğin parçaları bir prompt şablonuna yerleştir ve https://docs.ollama.com/api üzerinden kurulu Qwen modeline gönder. Ayrıca arka plan okuması olarak https://huggingface.co/learn/llm-course/chapter1/1 adresinden bir Hugging Face kurs sayfasına göz at. (45-60 dk)
- [ ] **[Çar]** Sklearn bakımı: Hafta 12 modelinde bir iyileştirme daha dene — örneğin farklı bir model ailesi veya daha iyi bir özellik kodlaması — ve yeni çapraz doğrulanmış skoru proje README'sine kaydet. (45-60 dk)
- [ ] **[Per]** Kata günü: https://exercism.org/tracks/python üzerinde bir yeni alıştırma, artı platform geçmişinden bir yeniden çözme. (45-60 dk)
- [ ] **[Cum]** 🚀 PROJE: parçaları birleştirip SENİN belgelerin üzerinde uçtan uca minimal bir RAG kur: soru → Chroma'dan çekme → kaynaklarını da listeleyen bir Qwen cevabı. 5 gerçek soruyla test et ve "local-ai-lab" repo'suna push et. (45-60 dk)

### Hafta 18 — RAG Kalitesi

**Özet:** Çalışan bir RAG, henüz iyi bir RAG değil. Bu hafta kaliteyi yükseltiyorsun: daha iyi parçalama (chunking), top-k ayarı, kaynak gösteren bir prompt şablonu ve 10 test sorusuyla basit bir elle değerlendirme. Cuma: sonuçları ölç ve kaydet.
**Kaynak:** ChromaDB (https://docs.trychroma.com), Ollama API (https://docs.ollama.com/api)

- [ ] **[Pzt]** Belgelerin için parçalama (chunking) stratejileriyle deney yap: küçük parçalara karşı büyük parçaları (ve biraz örtüşmeyi) dene, Chroma'da (https://docs.trychroma.com) yeniden indeksle ve 3 test sorusu için gelen sonuçları karşılaştır. (45-60 dk)
- [ ] **[Salı]** top-k değerini ayarla (2, 4, 8 dene) ve prompt şablonunu Qwen kaynaklarını belirtmek zorunda kalacak şekilde yeniden yaz, örneğin "[kaynak: dosya adı]". Etkisini https://docs.ollama.com/api sohbet çağrılarıyla cevap kalitesi üzerinden kontrol et. (45-60 dk)
- [ ] **[Çar]** Veri pratiği: herhangi bir veri kümesiyle pandas seansı — iki tablonun merge/join işlemini ve bir pivot tablo pratiği yap. Net bir grafikle bitir. (45-60 dk)
- [ ] **[Per]** Kata günü: https://www.hackerrank.com/domains/python üzerinde bir yeni problem ve ezberden bir yeniden çözme. (45-60 dk)
- [ ] **[Cum]** PROJE: beklenen cevaplarıyla birlikte 10 test sorusu yaz, hepsini RAG'inden geçir ve her cevabı elle puanla (iyi / kısmen / yanlış). En iyi parçalama (chunking) + kaynak gösterme ayarını uygula ve değerlendirme sonuçlarını README'ye kaydet. "local-ai-lab" repo'suna push et. (45-60 dk)

### Hafta 19 — Servise Aç

**Özet:** RAG sohbet botun bu hafta gerçek bir yerel servise dönüşüyor. Onu FastAPI veya Flask ile küçük bir web API'si olarak açıyorsun ve aynı API'nin arkasından Hafta 12'deki sklearn modelini de servis ediyorsun. Tek servis, iki beyin: LLM ve klasik ML.
**Kaynak:** FastAPI veya Flask resmi dokümanları (birini seç, onu takip et), Ollama API (https://docs.ollama.com/api), scikit-learn (https://scikit-learn.org/stable/getting_started.html)

- [ ] **[Pzt]** FastAPI ya da Flask'tan birini seç ve resmi dokümanlarını takip ederek yerelde bir hello-world web API'si kur. JSON alıp JSON döndüren bir POST endpoint ekle. (45-60 dk)
- [ ] **[Salı]** API'yi RAG koduna bağla: bir soru alan, çekme + Qwen (https://docs.ollama.com/api üzerinden) çalıştıran ve cevabı kaynaklarıyla döndüren bir `/chat` endpoint'i. Basit istek/cevap modelleri tanımla. (45-60 dk)
- [ ] **[Çar]** Sklearn bakımı: Hafta 12'de eğittiğin modeli joblib ile kaydet, sonra API'nin içinde yükle ve Python'dan bir tahmini test et. Gerekirse https://scikit-learn.org/stable/getting_started.html adresinden temelleri tazele. (45-60 dk)
- [ ] **[Per]** Kata günü: https://exercism.org/tracks/python üzerinde bir yeni alıştırma, artı eski çözümlerinden bir yeniden çözme. (45-60 dk)
- [ ] **[Cum]** PROJE: HER İKİ endpoint'i de servis eden yerel API'yi tamamla: `/chat` (RAG + Qwen) ve `/predict` (joblib ile yüklenen sklearn modelin). İkisini de curl veya requests ile test et ve "local-ai-lab" repo'suna push et. (45-60 dk)

### Hafta 20 — Final

**Özet:** Son hafta: Python temellerinden yerel bir AI yığınına kadar bütün yolculuğu gözden geçiriyorsun. İngilizce mülakat cevapları, bir kurs bölümü daha, ML modeline son bir iyileştirme, bir yeniden çözme maratonu ve her şeyin uçtan uca çalıştığı bir demo günü.
**Kaynak:** HF LLM kursu (https://huggingface.co/learn/llm-course/chapter1/1), scikit-learn (https://scikit-learn.org/stable/getting_started.html), Exercism (https://exercism.org/tracks/python)

- [ ] **[Pzt]** Bütün yolculuğunu gözden geçir ve bir not dosyasına 5 kısa İngilizce mülakat cevabı yaz: "RAG nasıl çalışır?", "Overfitting nedir?", "Embedding nedir?", "Neden LLM'i yerelde çalıştırırsın?", "Bir modeli nasıl değerlendirirsin?". (45-60 dk)
- [ ] **[Salı]** Hugging Face LLM kursuna geri dön (https://huggingface.co/learn/llm-course/chapter1/1 adresinden başla) ve kendi seçtiğin bir bölüme daha göz at. Öğrendiğin 3 yeni şeyi not et. (45-60 dk)
- [ ] **[Çar]** Hafta 12 modelinde son skor denemesi: son 8 haftanın en iyi fikirlerini uygula ve son bir iyileştirme yap. Faz 2'de kaydettiğin skorla karşılaştır ve asıl neyin işe yaradığını yaz. (45-60 dk)
- [ ] **[Per]** Yeniden çözme maratonu: https://exercism.org/tracks/python ve HackerRank geçmişinden 3 ESKİ problem seç ve hiç bakmadan sıfırdan yeniden çöz. (45-60 dk)
- [ ] **[Cum]** 🏁 FİNAL: demo günü — yerel RAG sohbet botunu ve ML API'sini kendi makinende uçtan uca çalıştır. Her iki repo'da da kısa mimari notları içeren İngilizce README'ler olduğundan emin ol ve önümüzdeki hafta iş projene taşıyacağın 3 şeyi listele. (90 dk)

---

## 📈 Checkpoints

| Hafta | Olay | Hedef |
|---|---|---|
| 5 | OOP dönüşümü: "python-journey" sınıflarla yeniden kuruldu | Push edildi |
| 6 | 🏁 HackerRank Python (Basic) sertifikasyonu (ücretsiz, süreli, 90 dk) | Geçildi |
| 8 | Dağınık veri seti pandas ile temizlendi + İngilizce özet | Push edildi |
| 10 | scikit-learn Pipeline, doğru metrikle puanlandı (yalnız accuracy değil) | Eğitildi + push edildi |
| 12 | 🏁 HackerRank SQL (Basic) sertifikasyonu (ücretsiz, süreli) | Geçildi |
| 12 | 🏁 KENDİ veri setinde uçtan uca ML projesi (pipeline + CV + ayarlama) | Push edildi + İngilizce README |
| 17 | 🚀 RAG v1: soru → Chroma → Qwen cevabı, SENİN belgelerin üzerinde | Yerelde uçtan uca çalışıyor |
| 20 | 🏁 FİNAL: tek yerel API'nin arkasında yerel RAG sohbet botu + sklearn modeli | Demo çalışıyor; README'ler hazır; iş projesi için 3 çıkarım yazıldı |

Bir sertifikasyon ya da kilometre taşı başarısız olursa: neyin ters gittiğini oku, zayıf konuyu 2 hafta boyunca perşembe pratiğine koy, tekrar dene. Plan uzar; sıra asla değişmez.
