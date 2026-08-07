# 🤖 PYTHON → AI ENGINEERING (20 Hafta, Yoğun)

> **Profil:** Geliştirici (C#/Dart geçmişi, katalardan gelen temel Python) — işte GERÇEK bir AI projesi var: LLM tabanlı (chatbot/RAG) artı klasik ML — ve uzun vadeli hedef: AI Engineer. LLM tarafı YEREL bir yığın üzerinde çalışıyor: Ollama ve halihazırda kurulu bir Qwen modeli.
> **Sistem:** Yoğun tempo — haftada 5 gün, günde 45-60 dk, **hafta sonu tamamen serbest**. Pzt+Salı = ana kurs hattı (önce Türkçe Udemy Python kursun, sonra Kaggle Learn, sonra Ollama/LLM konuları) · Çar = tarayıcıda veri/ML hattı · Per = pratik + yeniden çözüm (platform geçmişin) · Cum = PROJE günü, GitHub'a push edilir — her şey iş projesine doğru birikir.
> **Dil notu:** Udemy kursu Türkçe; geri kalan her şey bilinçli olarak İngilizce — AI dokümantasyonu İngilizce yaşıyor ve onu okumak işin ta kendisi.

---

## 🧰 Kaynaklar (hepsi doğrulandı; aksi belirtilmedikçe ücretsiz)

| Kaynak | Ne için | Adres |
|---|---|---|
| Udemy Python kursu | Faz 1'in Türkçe omurgası — YALNIZ VİDEO (içinde alıştırma yok); temellerden OOP/polimorfizme kadar kapsar. 1.25-1.5x hızda izle ve 5 dakikalık öz-testi geçtiğin bölümleri atla | Udemy kütüphanen |
| Kaggle Learn | Tarayıcıda ücretsiz kurslar, TAMAMLAMA SERTİFİKALI: Python, Pandas, Intro ML, Intermediate ML | https://www.kaggle.com/learn/python |
| Kaggle Titanic | İlk yarışma gönderimin (hafta 12) | https://www.kaggle.com/competitions/titanic |
| scikit-learn | Resmî Getting Started — estimator'lar, pipeline'lar, değerlendirme | https://scikit-learn.org/stable/getting_started.html |
| Ollama | Yerel LLM çalışma ortamın — REST API dokümanları + resmî Python kütüphanesi (`pip install ollama`) | https://docs.ollama.com/api |
| Qwen (kurulu) | Yerel modelin; varyant listesi | https://ollama.com/library/qwen3 |
| nomic-embed-text | Anlamsal arama / RAG için yerel embedding modeli | https://ollama.com/library/nomic-embed-text |
| ChromaDB | RAG için açık kaynaklı, yerel vektör deposu | https://docs.trychroma.com |
| HF LLM Kursu | Ücretsiz Hugging Face kursu — LLM'ler kaputun altında nasıl çalışır | https://huggingface.co/learn/llm-course/chapter1/1 |
| Exercism Python | Kata bakımı — tarayıcı içi editör, testler sitede çalışır | https://exercism.org/tracks/python |
| HackerRank Python | Pratik + ÜCRETSİZ süreli Python (Basic) sertifikasyonu (hafta 6) | https://www.hackerrank.com/domains/python |
| Python tutorial | Kurs yetmediğinde resmî başvuru kaynağı | https://docs.python.org/3/tutorial/ |

## ⚖️ Sabit Kurallar

1. Faz 1 için hızlı geçme kuralı: kurs YALNIZ VİDEO (içinde alıştırma yok), bu yüzden kontrol kursun DIŞINDA yaşar — her kurs bölümünden önce 5 dakikalık bir öz-test yap: Exercism Python ya da HackerRank Python'da konuyla eşleşen bir mini alıştırma çöz. Rahat geçtiysen → o bölümü 1.5x hızda tara veya atla. Zorlandıysan → baştan sona izle. Zaten bildiğin şeyi asla oturup dinleme.
2. Cuma proje günü her zaman gerçek bir GitHub push'u ve net bir İngilizce commit mesajıyla biter. Bu repo'lar senin AI engineer portfolyon.
3. Perşembe yeniden çözümü asla atlanmaz: çözdüğün problemlerin geçmişi platformlarda duruyor (Exercism çözümler sayfası, HackerRank gönderimlerin) — eski bir tanesini seç ve daha iyi çöz.
4. Yaptığın her şey iş projesini işaret eder: her cuma oturumunda işe benzeyen veriyi ve işe benzeyen problemleri tercih et. Kapatmadan önce tek satır yaz: "bu, işteki projeye nasıl yardım ediyor?"
5. Önce yerel: LLM hattı SENİN makinende çalışır (Ollama + Qwen). Bulut API'leri bir karşılaştırma notudur, izlenecek yol değil.
6. Hafta sonu serbest. Bir hafta kayarsa, hafta uzar; sıra asla değişmez. Sertifikalar sırası geldiğinde alınır.

---
# 🟢 FAZ 1 — Python Derinleşme (Hafta 1-6)

### Hafta 1 — Başlangıç

**Özet:** Kursun gerçek içerik akışını izleyerek Python'a yeniden başla: temeller, veri tipleri, tip dönüşümleri ve operatörler — her bölümden önce 5 dakikalık bir öz-testle. Temiz bir geliştirme ortamı kur ve ilk scriptini push et.
**Kaynak:** Udemy Python kursun · https://www.kaggle.com/learn/python · https://exercism.org/tracks/python

- [ ] **[Pzt]** Önce öz-test: Exercism Python'da (https://exercism.org/tracks/python) tarayıcıda bir kolay alıştırma çöz. Sonra Udemy Python kursunun temeller, veri tipleri ve tip dönüşümleri bölümlerini aç: öz-testin bildiğini kanıtladığı yerleri 1.5x hızda tara; yalnız sallantılı hissettiklerini baştan sona izle. Zayıf konuları bir listeye not al (45-60 dk)
- [ ] **[Salı]** Önce öz-test: HackerRank Python'da (https://www.hackerrank.com/domains/python) bir ısınma problemi. Sonra Udemy kursunun operatörler bölümleri (aritmetik, atama, karşılaştırma, mantıksal): bildiğini 1.5x hızda tara veya atla, kaçırdığını baştan sona izle. Zayıf konular listeni güncelle (45-60 dk)
- [ ] **[Çar]** Kaggle Learn Python'a git (https://www.kaggle.com/learn/python) ve Ders 1-2'yi ("Hello, Python" ve "Functions and Getting Help") tarayıcıda tamamla. Ücretsiz ve aynı fikirleri İngilizce tekrar ediyor — iyi bir dil pratiği de olur (45-60 dk)
- [ ] **[Per]** Exercism Python'ı aç (https://exercism.org/tracks/python), track'e katıl ve tarayıcı editöründe 2 kolay alıştırma çöz. Testler sitede çalıştığı için yerel bir kuruluma ihtiyacın yok (45-60 dk)
- [ ] **[Cum]** PROJE: Python ve VS Code'u kur, bir venv oluştur ve ilk yardımcı scriptini yaz — bir klasördeki dosyaları türüne göre ayıran bir klasör düzenleyici. "python-journey" adında bir GitHub repo'su aç ve scripti kısa bir commit mesajıyla push et (45-60 dk)

### Hafta 2 — Koşullar, Listeler ve Döngüler

**Özet:** Kursun akış kontrolü bloğu: koşullar, listeler, for/while ve break/continue. Kaggle bu hafta aynı zemini İngilizce işliyor — mükemmel bir çift maruz kalma.
**Kaynak:** Udemy Python kursun · https://www.kaggle.com/learn/python · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Önce öz-test: Exercism Python'da (https://exercism.org/tracks/python) koşullar/listeler konulu bir mini alıştırma. Sonra Udemy kursunun koşullu ifadeler ve listeler bölümleri: bildiğini 1.5x hızda tara, kaçırdığını baştan sona izle (45-60 dk)
- [ ] **[Salı]** Önce öz-test: HackerRank Python'da (https://www.hackerrank.com/domains/python) bir döngü problemi. Sonra Udemy kursunun for/while döngüleri ve break/continue bölümleri: aynı tara-ya-da-izle kuralı (45-60 dk)
- [ ] **[Çar]** Kaggle Learn Python'da (https://www.kaggle.com/learn/python) Ders 3-4'ü ("Booleans and Conditionals" ve "Lists") tarayıcıda tamamla (45-60 dk)
- [ ] **[Per]** Exercism Python'da (https://exercism.org/tracks/python) veya HackerRank Python'da (https://www.hackerrank.com/domains/python) 1 yeni alıştırma çöz, sonra platform geçmişinden 1 eski problemi eski cevabına bakmadan YENİDEN ÇÖZ (45-60 dk)
- [ ] **[Cum]** PROJE: "python-journey" içinde bir CSV işleme scripti yaz: bir CSV dosyasını oku (ör. işteki gibi bir dışa aktarım), satırları bir koşula göre filtrele ve küçük bir özet yazdır (adetler, toplamlar). Tek uzun blok değil, fonksiyonlar kullan. GitHub'a push et (45-60 dk)

### Hafta 3 — Metinler ve Sözlükler

**Özet:** Kursun metin-ve-veri bloğu: karakter dizileri, string metotları, liste metotları ve sözlükler — veri işinin günlük araçları.
**Kaynak:** Udemy Python kursun · https://www.kaggle.com/learn/python · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Önce öz-test: Exercism Python'da (https://exercism.org/tracks/python) metin işleme konulu bir alıştırma. Sonra Udemy kursunun karakter dizileri ve string metotları bölümleri: bildiğini 1.5x hızda tara, kaçırdığını baştan sona izle (45-60 dk)
- [ ] **[Salı]** Önce öz-test: HackerRank Python'da (https://www.hackerrank.com/domains/python) bir sözlük problemi. Sonra Udemy kursunun liste metotları ve sözlükler bölümleri: aynı tara-ya-da-izle kuralı. Bir deneme dosyasında 5 sözlük işlemi dene (45-60 dk)
- [ ] **[Çar]** Kaggle Learn Python'da (https://www.kaggle.com/learn/python) Ders 5'i ("Loops and List Comprehensions") tarayıcıda tamamla. Vakit kalırsa Ders 1-4'ün en zor alıştırmasını yeniden yap (45-60 dk)
- [ ] **[Per]** Exercism Python'da (https://exercism.org/tracks/python) OOP tadında 1 yeni alıştırma ya da HackerRank Python'da (https://www.hackerrank.com/domains/python) bir Classes problemi çöz, sonra platform geçmişinden 1 eski problemi YENİDEN ÇÖZ (45-60 dk)
- [ ] **[Cum]** PROJE: "python-journey" içinde sözlük tabanlı bir rapor aracı kur: Hafta 2'deki CSV'yi al ve sözlükler kullanarak kategori bazlı bir özet üret (grup başına adetler, toplamlar), küçük ve okunabilir bir rapor olarak yazdır. GitHub'a push et (45-60 dk)

### Hafta 4 — Fonksiyonlar, Özyineleme ve Hatalar

**Özet:** Kursun fonksiyonlar bloğu: fonksiyonlar, özyinelemeli fonksiyonlar ve hata yönetimi — artı bozuk girdide çökmeyen sağlam bir CLI aracı.
**Kaynak:** Udemy Python kursun · https://www.kaggle.com/learn/python · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Önce öz-test: Exercism Python'da (https://exercism.org/tracks/python) fonksiyonlar konulu bir alıştırma. Sonra Udemy kursunun fonksiyonlar ve özyinelemeli fonksiyonlar bölümleri: bildiğini 1.5x hızda tara, kaçırdığını baştan sona izle. Kendin küçük bir özyinelemeli fonksiyon yaz (45-60 dk)
- [ ] **[Salı]** Önce öz-test: HackerRank Python'da (https://www.hackerrank.com/domains/python) istisna tadında bir problem. Sonra Udemy kursunun hata yönetimi bölümleri (try/except, hata fırlatma): aynı tara-ya-da-izle kuralı (45-60 dk)
- [ ] **[Çar]** Kaggle Learn Python'da (https://www.kaggle.com/learn/python) Ders 6'yı ("Strings and Dictionaries") tarayıcıda tamamla (45-60 dk)
- [ ] **[Per]** Exercism Python'da (https://exercism.org/tracks/python) veya HackerRank Python'da (https://www.hackerrank.com/domains/python) 1 yeni alıştırma çöz, sonra platform geçmişinden 1 eski problemi YENİDEN ÇÖZ (45-60 dk)
- [ ] **[Cum]** PROJE: "python-journey" içinde sağlam bir CLI aracı kur: argümanlar için argparse kullan, bozuk girdiyi net hata mesajlarıyla karşıla (ham traceback yok) ve dosyaları güvenle oku/yaz. Örnek: bir CSV'yi temizleyen ya da dönüştüren bir araç. GitHub'a push et (45-60 dk)

### Hafta 5 — OOP ve Polimorfizm

**Özet:** Kursun son bloğu: sınıflar, nesneler, kalıtım ve polimorfizm — C# bilgin ile Python üslubu arasındaki köprü. Kaggle kursunu bitir ve sertifikanı al.
**Kaynak:** Udemy Python kursun · https://www.kaggle.com/learn/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Önce öz-test: Exercism Python'da (https://exercism.org/tracks/python) sınıflar konulu bir alıştırma. Sonra Udemy kursunun OOP bölümleri (sınıflar, `__init__`, metotlar): C#'tan bildiklerini 1.5x hızda tara, Python'a özgü olanları baştan sona izle. C#'tan 3 farkı not al (45-60 dk)
- [ ] **[Salı]** Udemy kursunun kalıtım ve polimorfizm bölümleri (artı `__str__` gibi özel metotlar): aynı tara-ya-da-izle kuralı. Fikirleri sınamak için kendi küçük sınıf hiyerarşini yaz (45-60 dk)
- [ ] **[Çar]** Kaggle Learn Python'da (https://www.kaggle.com/learn/python) Ders 7'yi ("Working with External Libraries") tamamla ve TAMAMLAMA SERTİFİKANI al. Sertifika linkini ya da görselini sakla — ilerde profiline girecek (45-60 dk)
- [ ] **[Per]** HackerRank Python'da (https://www.hackerrank.com/domains/python) orta zorlukta bir problem seti çöz (hedef 3 tane). Hangi konular hâlâ yavaş geliyor, not al (45-60 dk)
- [ ] **[Cum]** PROJE: "python-journey" scriptlerini sınıflara dönüştür: ör. her biri kendi dosyasında bir `FileOrganizer` sınıfı ve bir `CsvReport` sınıfı, OOP haftasının öğrettiklerini kullanarak. Davranışı aynı tut, kodu daha temiz yap. GitHub'a push et (45-60 dk)

### Hafta 6 — Kurs Boşlukları ve Faz Finali

**Özet:** Kurs dosya I/O'sunu, modülleri/venv'i, comprehension'ları, generator'ları ve decorator'ları kapsamıyor — bu boşlukları resmî tutorial ve Kaggle ile kapat, sonra ücretsiz süreli sertifikasyonla bitir.
**Kaynak:** Udemy Python kursun · https://docs.python.org/3/tutorial/ · https://www.hackerrank.com/domains/python · https://www.hackerrank.com/skills-verification/python_basic

- [ ] **[Pzt]** KURS BOŞLUĞU GÜNÜ 1: resmî Python tutorial'ından (https://docs.python.org/3/tutorial/) "Input and Output" ve "Modules" bölümlerini oku — `with` ile dosya okuma/yazma, import'lar, paketler. Sonra uygula: "python-journey" repo'suna requirements.txt ve düzgün bir paket klasörü ekle (45-60 dk)
- [ ] **[Salı]** KURS BOŞLUĞU GÜNÜ 2: comprehension'lar, generator'lar, decorator'lar. Comprehension'larla Kaggle Ders 5'te tanıştın — şimdi eski döngülerinden 3'ünü comprehension olarak yeniden yaz; sonra resmî tutorial'ı (https://docs.python.org/3/tutorial/) kullanarak minik bir generator ve minik bir decorator yaz (ör. bir süre ölçer). Hafta 1-5'ten kalan zayıf konular listeni gözden geçir ve yalnız o kurs videolarını yeniden izle (45-60 dk)
- [ ] **[Çar]** HackerRank Python'da (https://www.hackerrank.com/domains/python) süreli pratik yap: 3 orta seviye problem seç ve her birine 15 dakika ver. Bu, cuma günkü sınav formatı için bir ısınma (45-60 dk)
- [ ] **[Per]** YENİDEN ÇÖZÜM maratonu: Exercism/HackerRank geçmişinden 3 eski problem seç ve eski kodlarına bakmadan sıfırdan yeniden çöz. Hedef hızlı ve temiz olmak (45-60 dk)
- [ ] **[Cum]** 🏁 ÜCRETSİZ süreli HackerRank "Python (Basic)" sertifikasyonuna gir: 90 dakika, 2 soru (https://www.hackerrank.com/skills-verification/python_basic). Sınavdan sonra "python-journey" repo'sunu topla: README'yi Faz 1'de neler kurduğunla güncelle ve sertifika linkini ekle (~90 dk)
# 🔵 FAZ 2 — Veri ve Klasik ML (Hafta 7-12)

### Hafta 7 — Pandas I

**Özet:** Gerçek veriyle çalışmaya başla. Kaggle Learn üzerinde pandas'ın temellerini öğren: veri oluşturma, okuma, seçme ve özetleme. Cuma günü yeni becerilerinle gerçek bir CSV dosyasını keşfediyorsun.
**Kaynak:** https://www.kaggle.com/learn/pandas • https://exercism.org/tracks/python • https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Kaggle Pandas kursunu aç (https://www.kaggle.com/learn/pandas) ve Ders 1'i (Creating, Reading and Writing) ve Ders 2'yi (Indexing, Selecting, Assigning) tamamla. Tutorial sayfalarını dikkatle oku ve kod hücrelerini tarayıcıda çalıştır. (45-60 dk)
- [ ] **[Salı]** Kaggle Pandas kursuna devam et (https://www.kaggle.com/learn/pandas) ve Ders 3'ü (Summary Functions and Maps) tamamla. Kısa notlar al: hangi pandas fonksiyonu ne yapıyor? (45-60 dk)
- [ ] **[Çar]** Kaggle Pandas kursuna geri dön (https://www.kaggle.com/learn/pandas) ve Ders 1-3'ün uygulamalı alıştırmalarını bitir. İpucuna bakmadan önce her alıştırmayı kendin çözmeye çalış. (45-60 dk)
- [ ] **[Per]** Python bakımı: Exercism'de (https://exercism.org/tracks/python) veya HackerRank'te (https://www.hackerrank.com/domains/python) bir yeni kata çöz. Sonra platform geçmişinden bir eski problemi önceki cevabına bakmadan yeniden çöz. (45-60 dk)
- [ ] **[Cum]** PROJE: Kendi bilgisayarında, ilgini çeken bir konuya dair gerçek bir CSV dosyası yükle (ör. futbol, filmler ya da fiyatlar). Onu pandas ile keşfet: .shape, .dtypes, .head() ve .value_counts()'a bak. Notebook'u ya da scripti GitHub repo'na commit'le. (45-60 dk)

### Hafta 8 — Pandas II

**Özet:** Pandas kursunu bitir ve ilk Kaggle sertifikanı al. Gruplama, sıralama, veri tipleri, eksik değerler ve veri birleştirmeyi öğren. Cuma günü gerçek bir veri mühendisi gibi dağınık bir veri setini temizliyorsun.
**Kaynak:** https://www.kaggle.com/learn/pandas • https://exercism.org/tracks/python • https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Kaggle Pandas kursunda (https://www.kaggle.com/learn/pandas) Ders 4'ü (Grouping and Sorting) ve Ders 5'i (Data Types and Missing Values) tamamla. Her kod örneğini kendin çalıştır. (45-60 dk)
- [ ] **[Salı]** Kaggle Pandas kursunda (https://www.kaggle.com/learn/pandas) Ders 6'yı (Renaming and Combining) tamamla. Sonra açık kalan adımları bitir ve kurs sayfasından Pandas TAMAMLAMA SERTİFİKANI al. (45-60 dk)
- [ ] **[Çar]** Kaggle Pandas kursunun (https://www.kaggle.com/learn/pandas) kalan alıştırmalarını bitir. Sonra kendi başına groupby pratiği yap: herhangi bir veri seti al ve .groupby() ile iki soru cevapla (ör. kategori başına ortalama değer). (45-60 dk)
- [ ] **[Per]** Python bakımı: Exercism'de (https://exercism.org/tracks/python) veya HackerRank'te (https://www.hackerrank.com/domains/python) bir yeni kata çöz. Sonra platform geçmişinden bir eski problemi ezberden yeniden çöz. (45-60 dk)
- [ ] **[Cum]** PROJE: Dağınık bir veri seti al (ya da geçen haftaki CSV'ni dağıt) ve pandas ile temizle: eksik değerleri, yanlış veri tiplerini ve yinelenen satırları düzelt. Neyi düzelttiğine dair kısa bir İngilizce özet yaz ve her şeyi GitHub'a push et. (45-60 dk)

### Hafta 9 — İlk Modeller

**Özet:** Makine öğrenmesi burada başlıyor. Kaggle Intro to ML kursu modellerin nasıl çalıştığını, ilk modelini nasıl kuracağını ve nasıl doğrulayacağını gösteriyor. Cuma günü ilk karar ağacını eğitiyorsun.
**Kaynak:** https://www.kaggle.com/learn/intro-to-machine-learning • https://exercism.org/tracks/python • https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Kaggle Intro to Machine Learning kursuna başla (https://www.kaggle.com/learn/intro-to-machine-learning). Ders 1'i (How Models Work) ve Ders 2'yi (Basic Data Exploration) tamamla. (45-60 dk)
- [ ] **[Salı]** Intro to ML kursuna devam et (https://www.kaggle.com/learn/intro-to-machine-learning). Ders 3'ü (Your First Machine Learning Model) ve Ders 4'ü (Model Validation) tamamla. Veriyi neden eğitim ve doğrulama setlerine ayırdığımızı anladığından emin ol. (45-60 dk)
- [ ] **[Çar]** Intro to ML kursunda (https://www.kaggle.com/learn/intro-to-machine-learning) Ders 1-4'ün uygulamalı alıştırmalarını yap. Her ders için İngilizce tek cümle yaz: ne öğrendim? (45-60 dk)
- [ ] **[Per]** Python bakımı: Exercism'de (https://exercism.org/tracks/python) veya HackerRank'te (https://www.hackerrank.com/domains/python) bir yeni kata çöz. Sonra platform geçmişinden bir eski problemi önceki cevabına bakmadan yeniden çöz. (45-60 dk)
- [ ] **[Cum]** PROJE: İlk DecisionTreeRegressor'ını (ya da sınıflandırıcını) yerelde eğit. Önce kurs verisi üzerinde tekrarla, sonra Hafta 7-8'deki KENDİ veri setinde dene. Sonuçları karşılaştır ve notebook'u GitHub'a commit'le. (45-60 dk)

### Hafta 10 — Model Kalitesi

**Özet:** Modellerin neden başarısız olduğunu öğren: underfitting ve overfitting. Random forest'larla tanış, Intro to ML sertifikanı al ve pipeline kurmanın scikit-learn yolunu öğren. Cuma günü eksiksiz bir pipeline kuruyorsun.
**Kaynak:** https://www.kaggle.com/learn/intro-to-machine-learning • https://scikit-learn.org/stable/getting_started.html • https://exercism.org/tracks/python • https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Intro to ML kursunda (https://www.kaggle.com/learn/intro-to-machine-learning) Ders 5'i (Underfitting and Overfitting) ve Ders 6'yı (Random Forests) tamamla. Tek bir ağaçla bir orman arasındaki farkı not al. (45-60 dk)
- [ ] **[Salı]** Intro to ML kursunun (https://www.kaggle.com/learn/intro-to-machine-learning) Ders 7'sini (son ders) ve alıştırmalarını tamamla. Sonra kurs sayfasından Intro to ML TAMAMLAMA SERTİFİKANI al. (45-60 dk)
- [ ] **[Çar]** Resmî scikit-learn Getting Started rehberini oku (https://scikit-learn.org/stable/getting_started.html). Örnekleri kendin çalıştır: estimator'lar, fit/predict, transformer'lar ve pipeline'lar. İşte kullanacağın kütüphane bu. (45-60 dk)
- [ ] **[Per]** Python bakımı: Exercism'de (https://exercism.org/tracks/python) veya HackerRank'te (https://www.hackerrank.com/domains/python) bir yeni kata çöz. Sonra platform geçmişinden bir eski problemi ezberden yeniden çöz. (45-60 dk)
- [ ] **[Cum]** PROJE: İşe benzeyen sentetik veri üzerinde bir sınıflandırma görevi için scikit-learn Pipeline'ı kur (ön işleme + model). Veriyi make_classification ile üretebilirsin. Eğit, basit bir doğruluk skoru yazdır ve kodu GitHub'a push et. (45-60 dk)

### Hafta 11 — Intermediate ML I

**Özet:** Kaggle Intermediate ML kursuyla seviye atla: eksik değerleri ve kategorik değişkenleri doğru şekilde ele al ve her şeyi pipeline'lara koy. Cuma günü kendi projene çapraz doğrulama ekliyorsun.
**Kaynak:** https://www.kaggle.com/learn/intermediate-machine-learning • https://exercism.org/tracks/python • https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Kaggle Intermediate Machine Learning kursuna başla (https://www.kaggle.com/learn/intermediate-machine-learning). Ders 1'i (Introduction) ve Ders 2'yi (Missing Values) tamamla. (45-60 dk)
- [ ] **[Salı]** Intermediate ML kursuna devam et (https://www.kaggle.com/learn/intermediate-machine-learning). Ders 3'ü (Categorical Variables) ve Ders 4'ü (Pipelines) tamamla. Bu pipeline dersini geçen haftaki scikit-learn rehberiyle karşılaştır. (45-60 dk)
- [ ] **[Çar]** Intermediate ML kursunda (https://www.kaggle.com/learn/intermediate-machine-learning) Ders 1-4'ün uygulamalı alıştırmalarını yap. Eksik değerler ve kategorik değişkenler alıştırmalarına odaklan — işte bunlara ihtiyacın olacak. (45-60 dk)
- [ ] **[Per]** Python bakımı: Exercism'de (https://exercism.org/tracks/python) veya HackerRank'te (https://www.hackerrank.com/domains/python) bir yeni kata çöz. Sonra platform geçmişinden bir eski problemi önceki cevabına bakmadan yeniden çöz. (45-60 dk)
- [ ] **[Cum]** PROJE: Hafta 10'daki modeline çapraz doğrulama uygula ve onu iyileştirmeye çalış (daha iyi özellikler, daha iyi parametreler). Metriklerini (öncesi ve sonrası) GitHub repo'nun README'sine İngilizce olarak kaydet. (45-60 dk)

### Hafta 12 — Titanic Kilometre Taşı

**Özet:** Büyük hafta. Intermediate ML'i bitir (XGBoost ve veri sızıntısı), sertifikayı al ve sonra ilk Kaggle yarışmana gir: gerçek bir Titanic tahmini gönder ve onu İngilizce anlat.
**Kaynak:** https://www.kaggle.com/learn/intermediate-machine-learning • https://www.kaggle.com/competitions/titanic • https://exercism.org/tracks/python • https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Intermediate ML kursunda (https://www.kaggle.com/learn/intermediate-machine-learning) çapraz doğrulama ve XGBoost derslerini alıştırmalarıyla birlikte tamamla. XGBoost, gerçek projelerde en çok kullanılan modellerden biri. (45-60 dk)
- [ ] **[Salı]** Intermediate ML kursunun (https://www.kaggle.com/learn/intermediate-machine-learning) son dersi olan veri sızıntısı dersini ve alıştırmalarını tamamla. Sonra kurs sayfasından Intermediate ML TAMAMLAMA SERTİFİKANI al. (45-60 dk)
- [ ] **[Çar]** Titanic hazırlığı: Kaggle Titanic yarışma sayfasını oku (https://www.kaggle.com/competitions/titanic) — açıklamayı, veri sayfasını ve kuralları. İngilizce kısa bir plan yaz: hangi özellikleri kullanacaksın, hangi modelle başlayacaksın? (45-60 dk)
- [ ] **[Per]** Python bakımı: Exercism'de (https://exercism.org/tracks/python) veya HackerRank'te (https://www.hackerrank.com/domains/python) bir yeni kata çöz. Sonra platform geçmişinden bir eski problemi ezberden yeniden çöz. (45-60 dk)
- [ ] **[Cum]** 🏁 KİLOMETRE TAŞI PROJESİ: Kaggle Titanic yarışması (https://www.kaggle.com/competitions/titanic) için modelini kur ve eğit, sonra ilk gönderimini YAP. Ardından GitHub repo'nda yaklaşımını anlatan İngilizce bir README yaz: özellikler, model, skor ve bir sonraki adımda denemek istediklerin. (90 dk)
# 🔴 FAZ 3 — Yerel LLM Mühendisliği: Ollama + Qwen (Hafta 13-20)

### Hafta 13 — Modelinle Konuş

**Özet:** Kurulu Qwen modelinle (https://ollama.com/library/qwen3) kod üzerinden konuşmaya başlıyorsun. Önce REST API ile, sonra resmi Python kütüphanesiyle. Cuma günü "local-ai-lab" proje repo'nu temiz bir sohbet script'iyle açıyorsun.
**Kaynak:** Ollama REST API (https://docs.ollama.com/api), ollama-python (https://github.com/ollama/ollama-python), Qwen sürümleri (https://ollama.com/library/qwen3)

- [ ] **[Pzt]** https://docs.ollama.com/api adresindeki Ollama REST API dokümanlarını oku. Kurulu Qwen modeline curl ile bir sohbet isteği gönder, sonra aynısını Python `requests` ile yap. Cevabı ekrana yazdır. (45-60 dk)
- [ ] **[Salı]** https://github.com/ollama/ollama-python adresinden resmi Python kütüphanesini kur (`pip install ollama`). Dünkü sohbeti `ollama.chat` ile Python'da yeniden yaz, sonra streaming'i aç ve token'ları geldikçe ekrana bas. (45-60 dk)
- [ ] **[Çar]** Sklearn bakımı: https://www.kaggle.com/competitions/titanic sayfasındaki Titanic notebook'unu aç ve pipeline'ında TEK bir iyileştirme yap (yeni bir özellik ya da daha iyi bir model ayarı). Skorun değişiyor mu bak. (45-60 dk)
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
- [ ] **[Çar]** Sklearn bakımı: https://scikit-learn.org/stable/getting_started.html adresine geri dön ve kendini zayıf hissettiğin bir konuyu (pipeline'lar, çapraz doğrulama veya yeni bir model tipi) Titanic verisi üzerinde çalış. (45-60 dk)
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
- [ ] **[Çar]** Sklearn bakımı: https://www.kaggle.com/competitions/titanic üzerinde bir Titanic iyileştirmesi daha dene — örneğin farklı bir model veya daha iyi bir özellik kodlaması — ve yerel skorun daha iyi görünüyorsa gönderimini yap. (45-60 dk)
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

**Özet:** RAG sohbet botun bu hafta gerçek bir yerel servise dönüşüyor. Onu FastAPI veya Flask ile küçük bir web API'si olarak açıyorsun ve aynı API'nin arkasından sklearn Titanic modelini de servis ediyorsun. Tek servis, iki beyin: LLM ve klasik ML.
**Kaynak:** FastAPI veya Flask resmi dokümanları (birini seç, onu takip et), Ollama API (https://docs.ollama.com/api), scikit-learn (https://scikit-learn.org/stable/getting_started.html)

- [ ] **[Pzt]** FastAPI ya da Flask'tan birini seç ve resmi dokümanlarını takip ederek yerelde bir hello-world web API'si kur. JSON alıp JSON döndüren bir POST endpoint ekle. (45-60 dk)
- [ ] **[Salı]** API'yi RAG koduna bağla: bir soru alan, çekme + Qwen (https://docs.ollama.com/api üzerinden) çalıştıran ve cevabı kaynaklarıyla döndüren bir `/chat` endpoint'i. Basit istek/cevap modelleri tanımla. (45-60 dk)
- [ ] **[Çar]** Sklearn bakımı: eğitilmiş Titanic modelini joblib ile kaydet, sonra API'nin içinde yükle ve Python'dan bir tahmini test et. Gerekirse https://scikit-learn.org/stable/getting_started.html adresinden temelleri tazele. (45-60 dk)
- [ ] **[Per]** Kata günü: https://exercism.org/tracks/python üzerinde bir yeni alıştırma, artı eski çözümlerinden bir yeniden çözme. (45-60 dk)
- [ ] **[Cum]** PROJE: HER İKİ endpoint'i de servis eden yerel API'yi tamamla: `/chat` (RAG + Qwen) ve `/predict` (joblib ile yüklenen sklearn modelin). İkisini de curl veya requests ile test et ve "local-ai-lab" repo'suna push et. (45-60 dk)

### Hafta 20 — Final

**Özet:** Son hafta: Python temellerinden yerel bir AI yığınına kadar bütün yolculuğu gözden geçiriyorsun. İngilizce mülakat cevapları, bir kurs bölümü daha, son bir Titanic denemesi, bir yeniden çözme maratonu ve her şeyin uçtan uca çalıştığı bir demo günü.
**Kaynak:** HF LLM kursu (https://huggingface.co/learn/llm-course/chapter1/1), Titanic (https://www.kaggle.com/competitions/titanic), Exercism (https://exercism.org/tracks/python)

- [ ] **[Pzt]** Bütün yolculuğunu gözden geçir ve bir not dosyasına 5 kısa İngilizce mülakat cevabı yaz: "RAG nasıl çalışır?", "Overfitting nedir?", "Embedding nedir?", "Neden LLM'i yerelde çalıştırırsın?", "Bir modeli nasıl değerlendirirsin?". (45-60 dk)
- [ ] **[Salı]** Hugging Face LLM kursuna geri dön (https://huggingface.co/learn/llm-course/chapter1/1 adresinden başla) ve kendi seçtiğin bir bölüme daha göz at. Öğrendiğin 3 yeni şeyi not et. (45-60 dk)
- [ ] **[Çar]** https://www.kaggle.com/competitions/titanic üzerinde son Titanic skor denemesi: son 8 haftanın en iyi fikirlerini uygula ve son bir gönderim yap. Faz 2 skorunla karşılaştır. (45-60 dk)
- [ ] **[Per]** Yeniden çözme maratonu: https://exercism.org/tracks/python ve HackerRank geçmişinden 3 ESKİ problem seç ve hiç bakmadan sıfırdan yeniden çöz. (45-60 dk)
- [ ] **[Cum]** 🏁 FİNAL: demo günü — yerel RAG sohbet botunu ve ML API'sini kendi makinende uçtan uca çalıştır. Her iki repo'da da kısa mimari notları içeren İngilizce README'ler olduğundan emin ol ve önümüzdeki hafta iş projene taşıyacağın 3 şeyi listele. (90 dk)

---

## 📈 Checkpoints

| Hafta | Olay | Hedef |
|---|---|---|
| 5 | Kaggle Python kursu sertifikası | Alındı |
| 6 | 🏁 HackerRank Python (Basic) sertifikasyonu (ücretsiz, süreli, 90 dk) | Geçildi |
| 8 | Kaggle Pandas sertifikası | Alındı |
| 10 | Kaggle Intro to ML sertifikası | Alındı |
| 12 | 🏁 İlk Kaggle Titanic gönderimi + Intermediate ML sertifikası | Gönderildi + İngilizce README |
| 17 | 🚀 RAG v1: soru → Chroma → Qwen cevabı, SENİN belgelerin üzerinde | Yerelde uçtan uca çalışıyor |
| 20 | 🏁 FİNAL: tek yerel API'nin arkasında yerel RAG sohbet botu + sklearn modeli | Demo çalışıyor; README'ler hazır; iş projesi için 3 çıkarım yazıldı |

Bir sertifikasyon ya da kilometre taşı başarısız olursa: neyin ters gittiğini oku, zayıf konuyu 2 hafta boyunca perşembe pratiğine koy, tekrar dene. Plan uzar; sıra asla değişmez.
