# 🔧 DEV PRACTICE — C# / Dart + MSSQL (20 Hafta, İngilizce)

> **Profil:** Bildiği becerileri keskin tutan, çalışan bir geliştirici: C# ve Dart kataları + MSSQL + Flutter mini-görevleri. Bilerek HAFİF tutulmuş bir program — haftada yalnızca 2 gün (Salı ve Çarşamba, her biri 30-40 dk). HER ŞEY tarayıcıda yürür: bir siteyi açarsın, orada çözersin, sekmeyi kaparsın. Kurulacak bir şey yok, yerel proje yok. Tek başına ayakta durur ve bu kadar hafif olduğu için, istersen başka bir programın yanında çakışma yaratmadan da yürüyebilir.
> **Sistem:** **Salı** = kata günü, 2 haftalık dil rotasyonu (tek haftalar C#, çift haftalar Dart) + HER hafta platform geçmişinden bir diller arası yeniden çözüm: CodeWars profilini aç → Solutions sekmesi (ya da Exercism çözümler sayfan), eski bir problem seç ve onu DİĞER dilde yeniden çöz (C# ↔ Dart) (bir problem asla "bitmiş" değildir — diğer dilde geri gelir). **Çar** = MSSQL günü (yalnızca T-SQL), her 4. hafta hariç: o haftalar DartPad Flutter mini-görev günü, o da tamamen tarayıcıda. Derin Flutter çalışması bilerek kapsam dışı: ileride kendi başına adanmış bir Flutter Advanced programını hak ediyor.
> **Dil notu:** Bilerek İngilizce yazıldı — onu okumak İngilizce pratiğinin bir parçası.

---

## 🧰 Kaynaklar (hepsi doğrulanmış, ücretsiz)

| Kaynak | Ne için | Adres |
|---|---|---|
| Exercism | C# ve Dart parkurları + ücretsiz insan mentorluğu | https://exercism.org/tracks/csharp |
| CodeWars | Kyu seviyeli katalar; çözdükten sonra en iyi çözümlerle karşılaştır | https://www.codewars.com/kata/search/csharp |
| MS Learn T-SQL | Resmî ücretsiz patika "Query and modify data with Transact-SQL" (6 modül) | https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/ |
| HackerRank SQL | Pratik — problem sunuyorsa MS SQL Server motorunu seç | https://www.hackerrank.com/domains/sql |
| LeetCode Database | SQL problemleri — HER ZAMAN MS SQL Server lehçesini seç | https://leetcode.com/problemset/database/ |
| HackerRank sertifikaları | ÜCRETSİZ ve süreli: 10. haftada C# (Basic), 20. haftada SQL (Intermediate) | https://www.hackerrank.com/skills-verification |
| DartPad | Flutter mini-görev haftaları: Dart ve Flutter widget'larını tarayıcıda çalıştır — ücretsiz, kayıt yok | https://dartpad.dev |
| W3Schools jQuery | Tarayıcı içi jQuery alıştırmaları, anında kontrol ve sonunda bir quiz | https://www.w3schools.com/jquery/jquery_exercises.asp |

## ⚖️ Sabit Kurallar

1. HER ŞEY tarayıcıda: kurulum yok, yerel dosya yok. Çözdüğün problemlerin geçmişi platformlarda duruyor — CodeWars Solutions sekmesi ve Exercism çözümler sayfası senin kaydın; Salı'nın yeniden çözümü hep oradan seçilir.
2. Diller arası yeniden çözüm asla atlanmaz: CodeWars profilini aç → Solutions sekmesi (ya da Exercism çözümler sayfan), eski bir problem seç ve onu DİĞER dilde yeniden çöz (C# ↔ Dart) — CodeWars tamamlanmış kataları yeniden çalışmayı resmen destekliyor. Bütün mesele bu.
3. Her katadan sonra platformdaki en iyi çözümlerden en az 2 tanesini oku ve kullanmadığın BİR numara bul.
4. SQL yalnızca MSSQL: T-SQL sözdizimiyle çalış (TOP, GETDATE, ISNULL). LeetCode'da her zaman MS SQL Server lehçesini seç.
5. Her 4. Salı ~10 dakikalık W3Schools jQuery alıştırması içerir — tarayıcıda çözülür, anında kontrol edilir, kurulum gerekmez.
6. Süreli sertifika günleri dürüst geçer: kronometre açık, mola yok. Bir hafta kayarsa hafta uzar; sıra hiç değişmez.

---
# 🟠 FAZ 1 — Rotasyon ve T-SQL Temeli (Hafta 1-10)

### Hafta 1 — Açılış: C# Kataları ve İlk T-SQL Modülü
**Özet:** 2 haftalık kata rotasyonuna C# ile başla — her şey sitede, tarayıcıda çözülür — ve T-SQL patikasına giriş modülüyle giriş yap.
**Kaynak:** https://www.codewars.com/kata/search/csharp · https://exercism.org/tracks/csharp · https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/
- [ ] **[Salı]** CodeWars'ta C# ile 2 kata çöz (7 kyu seviyesi) ya da Exercism'de 2 orta seviye C# alıştırması yap — Exercism editörü tarayıcıda çalışır, kurulacak bir şey yok, testler sitede koşar. Sonra az önce çözdüğün problemlerden birini seç ve aynı sitede Dart ile yeniden çöz; iki sürüm de profilinde kayıtlı kalır (30-40 dk)
- [ ] **[Çar]** MS Learn'de, "Query and modify data with Transact-SQL" patikasındaki "Introduction to Transact-SQL" modülünü tamamla. Örnek sorguları yalnızca okumak yerine kendin yaz, ardından HackerRank SQL'de 1-2 kolay problem çöz (sunulduğu yerde MS SQL Server motorunu seç) (30-40 dk)

### Hafta 2 — Dart Haftası ve Veriyi Sıralama
**Özet:** Rotasyon Dart'a geçiyor; SQL tarafında sorgu sonuçlarını sıralamayı ve filtrelemeyi öğreniyorsun.
**Kaynak:** https://www.codewars.com/kata/search/dart · https://exercism.org/tracks/dart · https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/ · https://www.hackerrank.com/domains/sql
- [ ] **[Salı]** CodeWars'ta Dart ile 2 kata çöz (7-6 kyu) ya da Exercism'de 2 orta seviye Dart alıştırması yap. Sonra CodeWars profilini aç → Solutions sekmesi (ya da Exercism çözümler sayfan), aslen C# ile çözdüğün bir problem seç ve onu Dart ile yeniden çöz — CodeWars tamamlanmış bir katayı başka bir dilde yeniden çalışmana izin veriyor. İki sürümü sitede karşılaştır (30-40 dk)
- [ ] **[Çar]** MS Learn'deki "Sort and filter results in T-SQL queries" modülünü tamamla (WHERE, ORDER BY, TOP, OFFSET-FETCH). Sonra filtreleme kullanan 1-2 kolay HackerRank SQL problemi çöz, sunulduğu yerde MS SQL Server motoruyla (30-40 dk)

### Hafta 3 — C# Haftası ve JOIN'ler
**Özet:** Rotasyonda sıra yine C#'ta ve tabloları JOIN'lerle birleştirmeyi çalışıyorsun.
**Kaynak:** https://www.codewars.com/kata/search/csharp · https://exercism.org/tracks/csharp · https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/ · https://www.hackerrank.com/domains/sql
- [ ] **[Salı]** CodeWars'ta C# ile 2 kata çöz (7-6 kyu) ya da Exercism'de 2 orta seviye C# alıştırması yap. Diller arası yeniden çözüm: CodeWars Solutions sekmeni (ya da Exercism çözümler sayfanı) aç, aslen Dart ile yazılmış bir problemi al ve onu tekrar C# ile çöz. Sitedeki en iyi çözümlere bak ve kullanmadığın bir numara yakala (30-40 dk)
- [ ] **[Çar]** MS Learn'deki "Combine multiple tables with JOINs in T-SQL" modülünü tamamla (INNER, LEFT, RIGHT, self join). Sonra JOIN gerektiren 1-2 HackerRank SQL problemi çöz, sunulduğu yerde MS SQL Server motorunu kullanarak (30-40 dk)

### Hafta 4 — Dart Dönüyor, jQuery Alıştırmaları, DartPad Flutter
**Özet:** Rotasyonda Dart geri döndü, yanında tarayıcı içi jQuery alıştırmalarıyla; Çarşamba ise DartPad Flutter mini-görev günü.
**Kaynak:** https://www.codewars.com/kata/search/dart · https://exercism.org/tracks/dart · https://www.w3schools.com/jquery/jquery_exercises.asp · https://dartpad.dev
- [ ] **[Salı]** CodeWars'ta (7-6 kyu) ya da Exercism'de 2 Dart katası çöz, sonra CodeWars Solutions sekmeni (ya da Exercism çözümler sayfanı) aç ve eski bir problemi diğer dilde yeniden çöz (C# ↔ Dart). jQuery bakımı (~10 dk): https://www.w3schools.com/jquery/jquery_exercises.asp adresindeki W3Schools jQuery alıştırmalarının bir bölümünü çöz — site cevaplarını anında kontrol ediyor (30-40 dk)
- [ ] **[Çar]** DartPad Flutter günü: https://dartpad.dev adresine git (ücretsiz, kayıt yok — Flutter widget'ları doğrudan tarayıcıda çalışıyor). StatefulWidget ile bir sayaç kartı widget'ı yap: bir sayı gösteren bir Card ve onu artıran bir buton. Bağımlılıksız tut — pub.dev paketlerinin çoğu DartPad'de yok. Derin Flutter çalışması ileride adanmış bir programa saklı (30-40 dk)

### Hafta 5 — C# Haftası ve Alt Sorgular
**Özet:** C# kataları rotasyonu sürdürürken T-SQL patikası alt sorgulara geçiyor.
**Kaynak:** https://www.codewars.com/kata/search/csharp · https://exercism.org/tracks/csharp · https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/ · https://www.hackerrank.com/domains/sql
- [ ] **[Salı]** 2 C# katası çöz (7 kyu kolay geliyorsa 6 kyu) ya da Exercism'de 2 orta seviye C# alıştırması yap. Sonra CodeWars Solutions sekmenden (ya da Exercism çözümler sayfandan) bir Dart problemi seç ve onu C# ile yeniden yaz. İki sürümü sitede karşılaştır ve hangisinin daha temiz olduğuna, nedenini de söyleyerek karar ver (30-40 dk)
- [ ] **[Çar]** MS Learn'deki "Write subqueries in T-SQL" modülünü tamamla (skaler, çok değerli, ilişkili alt sorgular). Sonra alt sorgunun işe yaradığı 1-2 HackerRank SQL problemi çöz, sunulduğu yerde MS SQL Server motorunu seçerek (30-40 dk)

### Hafta 6 — Dart Haftası, Fonksiyonlar ve Veri Değişiklikleri
**Özet:** Dart üçüncü rotasyon turunu kapatıyor; MS Learn patikasını yerleşik fonksiyonlar, GROUP BY ve veri değiştirme ile bitiriyorsun.
**Kaynak:** https://www.codewars.com/kata/search/dart · https://exercism.org/tracks/dart · https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/
- [ ] **[Salı]** 2 Dart katası çöz (7-6 kyu) ya da Exercism'de 2 orta seviye Dart alıştırması yap. Diller arası yeniden çözüm: CodeWars Solutions sekmenden, Dart ile henüz hiç dokunmadığın bir problem seç ve onu Dart ile yeniden çalış — profilin yeni sürümü otomatik kaydediyor (30-40 dk)
- [ ] **[Çar]** MS Learn patikasını bitir: yerleşik fonksiyonlar ve GROUP BY modülünü tamamla, sonra "Modify data with T-SQL" modülünü hızlıca geç (INSERT, UPDATE, DELETE, MERGE). Bu, "Query and modify data with Transact-SQL" patikasının tamamını kapatıyor — bütün modüllerin tamamlandı göründüğünü kontrol et (30-40 dk)

### Hafta 7 — C# Haftası ve HackerRank SQL Merdiveni
**Özet:** Yeni bir rotasyon turu C# ile başlıyor ve Çarşamba MS Learn modüllerinden istikrarlı bir HackerRank/LeetCode SQL pratik merdivenine geçiyor.
**Kaynak:** https://www.codewars.com/kata/search/csharp · https://exercism.org/tracks/csharp · https://www.hackerrank.com/domains/sql · https://leetcode.com/problemset/database/
- [ ] **[Salı]** 2 C# katası çöz, artık CodeWars'ta 6 kyu'yu hedefleyerek (ya da 2 orta seviye Exercism alıştırması). Sonra CodeWars Solutions sekmenden (ya da Exercism çözümler sayfandan) bir Dart problemi al ve onu C# ile yeniden çöz. En iyi çözümlerle karşılaştır: LINQ neyi kısalttı — ya da neyi uzattı? (30-40 dk)
- [ ] **[Çar]** SQL pratik günü: HackerRank SQL'de (sunulduğu yerde MS SQL Server motoru) ya da LeetCode Database'de (her zaman MS SQL Server lehçesini seç) 3-4 Easy problem çöz. Bir problem zor geliyorsa onu sitedeki denenmiş listende bırak — iki platform da geçmişini tutuyor, sonra tekrar geleceksin (30-40 dk)

### Hafta 8 — Dart Haftası, jQuery Alıştırmaları, DartPad Flutter
**Özet:** Salı Dart kataları artı tarayıcı içi jQuery alıştırmaları; Çarşamba tarayıcıda bir DartPad Flutter mini-görevi daha.
**Kaynak:** https://www.codewars.com/kata/search/dart · https://exercism.org/tracks/dart · https://www.w3schools.com/jquery/jquery_exercises.asp · https://dartpad.dev
- [ ] **[Salı]** 2 Dart katası çöz (6 kyu) ya da Exercism'de 2 orta seviye Dart alıştırması yap, sonra CodeWars Solutions sekmeni (ya da Exercism çözümler sayfanı) aç ve eski bir C# problemini Dart ile yeniden çöz. jQuery bakımı (~10 dk): https://www.w3schools.com/jquery/jquery_exercises.asp adresindeki W3Schools jQuery alıştırmalarının bir sonraki bölümünü çöz — sitede anında kontrol (30-40 dk)
- [ ] **[Çar]** DartPad Flutter günü: https://dartpad.dev adresine git ve dokununca boyutunu ve rengini değiştiren bir AnimatedContainer yap (onu bir GestureDetector içine sar). Her şey tarayıcıda çalışıyor — kurulum yok, kayıt yok. Bağımlılıksız tut: pub.dev paketlerinin çoğu DartPad'de yok (30-40 dk)

### Hafta 9 — C# Haftası ve Easy'den Medium'a SQL
**Özet:** Rotasyonda C# haftası; SQL pratiği ilk Medium seviye problemleri karışıma katmaya başlıyor.
**Kaynak:** https://www.codewars.com/kata/search/csharp · https://exercism.org/tracks/csharp · https://www.hackerrank.com/domains/sql · https://leetcode.com/problemset/database/
- [ ] **[Salı]** 2 C# katası çöz (mümkünse 6 kyu) ya da Exercism'de 2 orta seviye C# alıştırması yap. Diller arası yeniden çözüm: CodeWars Solutions sekmendeki en eski problemi al ve C# değilse C# ile çöz — zaten C# ise Dart ile yeniden çöz. Sitedeki eski çözümünle karşılaştır: neyi yanlış hatırlamışsın? (30-40 dk)
- [ ] **[Çar]** HackerRank SQL'de (sunulduğu yerde MS SQL Server motoru) ya da LeetCode Database'de (MS SQL Server lehçesini seç) 2 Easy ve 1 Medium problem çöz. Medium olan seni 15 dakikadan fazla tıkarsa tartışmayı oku, fikri anla ve sorguyu ezberden kendin yaz (30-40 dk)

### Hafta 10 — Dart Haftası ve C# (Basic) Sertifikası
**Özet:** Dönüm noktası haftası: Salı Dart kataları ve ısınma olarak bir C# yeniden çözümü, ardından Çarşamba ücretsiz süreli HackerRank C# (Basic) sertifikası.
**Kaynak:** https://www.codewars.com/kata/search/dart · https://exercism.org/tracks/dart · https://www.hackerrank.com/skills-verification
- [ ] **[Salı]** Hiçbir şeye bakmadan temiz ve hızlı çözümlere odaklanarak 2 Dart katası çöz (6 kyu). Sonra yarına ısınma olarak, CodeWars Solutions sekmendeki eski bir Dart problemini C# ile yeniden çöz. Hangi C# özelliklerine otomatik olarak uzandığını fark et (30-40 dk)
- [ ] **[Çar]** 🏁 https://www.hackerrank.com/skills-verification adresinden ÜCRETSİZ süreli HackerRank "C# (Basic)" sertifika sınavına gir. Sessiz 45 dakikalık bir aralık bul, not yok. Sonrasında sonuç ve sertifika HackerRank profilinde görünür — sitede neyin kolay geldiğini, neyin seni şaşırttığını gözden geçir (30-40 dk)

# 🟣 FAZ 2 — Derinleşme ve Sertifikalar (Hafta 11-20)

### Hafta 11 — C# Haftası ve Medium SQL Sahası
**Özet:** Faz 2, daha üst seviyede C# kataları ve Medium problemlere yerleşen SQL pratiğiyle açılıyor.
**Kaynak:** https://www.codewars.com/kata/search/csharp · https://exercism.org/tracks/csharp · https://www.hackerrank.com/domains/sql · https://leetcode.com/problemset/database/
- [ ] **[Salı]** 6-5 kyu seviyesinde 2 C# katası çöz (ya da 2 orta-zor Exercism C# alıştırması). Diller arası yeniden çözüm: CodeWars Solutions sekmenden (ya da Exercism çözümler sayfandan) bir problem al ve onu diğer dilde çöz (C# ↔ Dart). Her problem iki dilde de kapsanmışsa, çözümünü en az beğendiğini seç ve onu iyileştir (30-40 dk)
- [ ] **[Çar]** LeetCode Database'de (her zaman MS SQL Server lehçesini seç) ya da HackerRank SQL'de (sunulduğu yerde MS SQL Server motoru) 2-3 Medium problem çöz. GROUP BY + HAVING kalıplarına odaklan. İki denemede çözdüğün her problem site içi geçmişinde görünür kalır — Hafta 14'te ona geri döneceksin (30-40 dk)

### Hafta 12 — Dart Haftası, jQuery Alıştırmaları, DartPad Flutter
**Özet:** Salı Dart kataları ve tarayıcı içi jQuery alıştırmaları; Çarşamba tarayıcıda bir DartPad bilgi kartı çevirme mini-görevi.
**Kaynak:** https://www.codewars.com/kata/search/dart · https://exercism.org/tracks/dart · https://www.w3schools.com/jquery/jquery_exercises.asp · https://dartpad.dev
- [ ] **[Salı]** 2 Dart katası çöz (6-5 kyu) ya da Exercism'de 2 orta seviye Dart alıştırması yap, sonra CodeWars Solutions sekmeni (ya da Exercism çözümler sayfanı) aç ve eski bir problemi diğer dilde yeniden çöz (C# ↔ Dart). jQuery bakımı (~10 dk): https://www.w3schools.com/jquery/jquery_exercises.asp adresindeki W3Schools jQuery alıştırmalarının bir bölümünü daha çöz — site cevaplarını anında kontrol ediyor (30-40 dk)
- [ ] **[Çar]** DartPad Flutter günü: https://dartpad.dev adresine git ve AnimatedSwitcher ile küçük bir bilgi kartı çevirme efekti yap — karta dokununca soru yüzü ile cevap yüzü arasında geçiş olsun. Tamamen tarayıcıda çalışır, kurulacak bir şey yok; bağımlılıksız tut, çünkü pub.dev paketlerinin çoğu DartPad'de yok (30-40 dk)

### Hafta 13 — C# Haftası ve SQL'de Pencere Fonksiyonları
**Özet:** C# rotasyonu 5 kyu hedefiyle; SQL Medium'ları sıralama ve pencere tarzı problemlerle devam ediyor.
**Kaynak:** https://www.codewars.com/kata/search/csharp · https://exercism.org/tracks/csharp · https://leetcode.com/problemset/database/ · https://www.hackerrank.com/domains/sql
- [ ] **[Salı]** 6-5 kyu hedefleyerek 2 C# katası çöz (ya da 2 daha zor Exercism C# alıştırması). Sonra CodeWars Solutions sekmenden en son Faz 1'de dokunduğun bir problemi seç ve onu diğer dilde yeniden çöz (C# ↔ Dart) — önce ezberden, sonra sitedeki eski çözümünle karşılaştır (30-40 dk)
- [ ] **[Çar]** LeetCode Database'de (MS SQL Server lehçesi) sıralama ya da ardışık satır içeren 2-3 Medium problem çöz — bunlar genelde ROW_NUMBER, RANK ya da LAG/LEAD ister. Pencere fonksiyonları paslanmış geliyorsa ilk 10 dakikayı MS Learn patikasındaki ilgili modül sayfasını yeniden açmaya ayır (30-40 dk)

### Hafta 14 — Dart Haftası ve SQL Tekrar Turu
**Özet:** Dart kataları sürüyor; Çarşamba, seni daha önce yenen SQL problemlerini sitede yeniden çözerek eski borçlarını kapatıyorsun.
**Kaynak:** https://www.codewars.com/kata/search/dart · https://exercism.org/tracks/dart · https://www.hackerrank.com/domains/sql · https://leetcode.com/problemset/database/
- [ ] **[Salı]** 2 Dart katası çöz (6-5 kyu) ya da 2 daha zor Exercism Dart alıştırması yap. Diller arası yeniden çözüm: CodeWars Solutions sekmenden ilk çözümünde döngü kullandığın bir problem seç ve onu diğer dilde daha fonksiyonel bir tarzda yeniden çöz (C#'ta LINQ ya da Dart koleksiyon metotları) (30-40 dk)
- [ ] **[Çar]** HackerRank SQL'deki (MS SQL Server motoru) ya da LeetCode Database'deki (MS SQL Server lehçesi) çözülmüş ve denenmiş geçmişini aç ve ilk seferinde zorlanmış olduğun 2-3 problemi, eski gönderimlerine bakmadan yeniden çöz. Geçtiğin anda site onları çözüldü olarak işaretler; inatçı olanlar denenmiş listende kalır (30-40 dk)

### Hafta 15 — C# Haftası ve İlk Hard Denemesi
**Özet:** Rotasyonda sıra C#'ta ve bir Hard SQL problemine ilk ciddi denemeni yapıyorsun.
**Kaynak:** https://www.codewars.com/kata/search/csharp · https://exercism.org/tracks/csharp · https://leetcode.com/problemset/database/ · https://www.hackerrank.com/domains/sql
- [ ] **[Salı]** 2 C# katası çöz (6-5 kyu) ya da 2 daha zor Exercism C# alıştırması yap. Sonra CodeWars Solutions sekmenden bir Dart problemi al ve onu C# ile yeniden çöz, null-safety farklarına dikkat ederek. İki sürümü sitede karşılaştır: Dart, C#'ın düşündürmediği neyi düşündürdü sana? (30-40 dk)
- [ ] **[Çar]** LeetCode Database'de (MS SQL Server lehçesi) 1 Hard problem dene — herhangi bir ipucuna bakmadan önce ona 20 odaklı dakika ver. Çözsen de çözemesen de sitedeki en üstteki tartışma gönderisini oku ve ana fikri İngilizce anlatabildiğinden emin ol. Kalan zamanı özgüven tazelemek için 1 Medium problemle değerlendir (30-40 dk)

### Hafta 16 — Dart Haftası, jQuery Alıştırmaları, DartPad Flutter
**Özet:** Son birleşik bakım haftası: Salı Dart kataları artı tarayıcı içi jQuery alıştırmaları, Çarşamba ise son DartPad Flutter mini-görevi.
**Kaynak:** https://www.codewars.com/kata/search/dart · https://exercism.org/tracks/dart · https://www.w3schools.com/jquery/jquery_exercises.asp · https://dartpad.dev
- [ ] **[Salı]** 2 Dart katası çöz (hazır hissediyorsan 5 kyu) ya da 2 daha zor Exercism Dart alıştırması yap, sonra CodeWars Solutions sekmeni (ya da Exercism çözümler sayfanı) aç ve eski bir problemi diğer dilde yeniden çöz (C# ↔ Dart). jQuery bakımı (~10 dk): https://www.w3schools.com/jquery/jquery_exercises.asp adresindeki W3Schools jQuery alıştırmalarında henüz yapmadığın son bölümü çöz (30-40 dk)
- [ ] **[Çar]** DartPad Flutter günü: https://dartpad.dev adresine git ve kaydırılıp silinebilen öğeleri olan küçük bir ListView yap — Dismissible widget'ıyla bir öğeyi kaydırarak kaldır ve bir SnackBar göster. Hepsi tarayıcıda, kayıt yok; bağımlılıksız tut (pub.dev paketlerinin çoğu DartPad'de yok). Bu, planlanmış son Flutter oturumu — daha büyük Flutter planları kendi programını bekliyor (30-40 dk)

### Hafta 17 — C# Haftası ve SQL Karma Seti
**Özet:** Son düzenli pratik haftası: C# kataları ve gerçek sınav çeşitliliğini taklit eden karma zorlukta bir SQL seti.
**Kaynak:** https://www.codewars.com/kata/search/csharp · https://exercism.org/tracks/csharp · https://www.hackerrank.com/domains/sql · https://leetcode.com/problemset/database/
- [ ] **[Salı]** 2 C# katası çöz (6-5 kyu) ya da 2 daha zor Exercism C# alıştırması yap. Diller arası yeniden çözüm: CodeWars Solutions sekmende en çok yeniden çalıştığın problemi seç ve onu, en yavaş olduğun dilde (C# ya da Dart) bir kez daha çöz. Süreni tut ve o "yavaş" hissini kırmaya çalış (30-40 dk)
- [ ] **[Çar]** Karma SQL seti: 1 Easy (hız — 5 dakikanın altında), 2 Medium ve zaman kalırsa Hafta 15'teki Hard problemi tekrar ziyaret et. HackerRank SQL (MS SQL Server motoru) ya da LeetCode Database (MS SQL Server lehçesi) kullan. Bu, sertifika hazırlığından önceki son serbest formlu pratiğin (30-40 dk)

### Hafta 18 — Dart Haftası ve Süreli Hazırlık 1. Tur
**Özet:** Dart rotasyonu sürdürüyor ve SQL çalışması sınav koşullarına geçiyor: süreli problem setleri.
**Kaynak:** https://www.codewars.com/kata/search/dart · https://exercism.org/tracks/dart · https://www.hackerrank.com/domains/sql · https://leetcode.com/problemset/database/
- [ ] **[Salı]** 2 Dart katası çöz (6-5 kyu) ya da 2 daha zor Exercism Dart alıştırması yap. CodeWars Solutions sekmenden bir problemi diğer dilde yeniden çöz (C# ↔ Dart), sonra bütün Solutions sekmene (ve Exercism çözüm sayfalarına) göz gezdirip en beğendiğin 3 çözümü seç (30-40 dk)
- [ ] **[Çar]** Sertifika hazırlığı, 1. tur: 35 dakikalık bir kronometre kur ve HackerRank SQL'de (sunulduğu yerde MS SQL Server motoru) çözebildiğin kadar Medium problem çöz — mola yok, dokümantasyon yok, sınav koşulları. Sonrasında sitedeki gönderim geçmişine bak: kaç tanesini bitirdin ve seni en çok hangi konu yavaşlattı? (30-40 dk)

### Hafta 19 — C# Finali ve Süreli Hazırlık 2. Tur
**Özet:** C#, programdaki son kata sırasını alıyor ve zayıf konunu hedefleyen ikinci bir süreli SQL provası yapıyorsun.
**Kaynak:** https://www.codewars.com/kata/search/csharp · https://exercism.org/tracks/csharp · https://www.hackerrank.com/domains/sql · https://leetcode.com/problemset/database/
- [ ] **[Salı]** Son C# kata oturumu: 6-5 kyu seviyesinde 2 kata çöz, sonra CodeWars Solutions sekmenden son bir diller arası yeniden çözüm yap. Kapanışta 5 dakikanı platformlardaki bütün çözüm geçmişini baştan sona kaydırmaya ayır — Hafta 1'den bu yana neyin geliştiğini doğrudan kodda gör (30-40 dk)
- [ ] **[Çar]** Sertifika hazırlığı, 2. tur: ilk 10 dakikayı geçen hafta not ettiğin zayıf konuyu çalışmaya ayır, sonra 25 dakikalık süreli bir Medium SQL problem seti daha koştur (HackerRank SQL, sunulduğu yerde MS SQL Server motoru). Medium'lar her biri 10 dakikanın altında düştüğünde hazırsın (30-40 dk)

### Hafta 20 — Dart Uğurlaması ve SQL Sertifikası
**Özet:** Program finali: rahat bir Dart kata oturumu ve son tarayıcı içi jQuery quiz'i, ardından ücretsiz süreli HackerRank SQL (Intermediate) sertifikası.
**Kaynak:** https://www.codewars.com/kata/search/dart · https://exercism.org/tracks/dart · https://www.w3schools.com/jquery/jquery_quiz.asp · https://www.hackerrank.com/skills-verification
- [ ] **[Salı]** Sınav gününden önce hafif ısınma: rahat bir seviyede 2 Dart katası çöz (6 kyu) ve CodeWars Solutions sekmenden bir problemi diğer dilde yeniden çöz (C# ↔ Dart). jQuery finali (~10 dk): https://www.w3schools.com/jquery/jquery_quiz.asp adresindeki 25 soruluk W3Schools jQuery quiz'ini çöz — puanın sitede anında görünür (30-40 dk)
- [ ] **[Çar]** 🏁 https://www.hackerrank.com/skills-verification adresinden ÜCRETSİZ süreli HackerRank "SQL (Intermediate)" sertifika sınavına gir. Sessiz oda, tam odak, not yok. Sonuç ne olursa olsun HackerRank profiline işlenir — ve 20 haftanın tamamı artık CodeWars, Exercism, MS Learn ve HackerRank geçmişlerinde görünüyor (30-40 dk)

---

## 📈 Kontrol Noktaları

| Hafta | Olay | Hedef |
|---|---|---|
| 6 | MS Learn T-SQL patikası bitti (6 modülün hepsi) | Altı modülün de bilgi kontrolleri sitede geçildi |
| 10 | 🏁 HackerRank C# (Basic) sertifikası (ücretsiz, süreli) | Geçmek |
| 15 | Kata seviye kontrolü | Her iki dilde de 6-5 kyu'yu rahatça çözmek |
| 20 | 🏁 HackerRank SQL (Intermediate) sertifikası | Geçmek — MSSQL becerileri sertifikalı |

20. haftadan sonra: Flutter'da derinleşmek istersen, adanmış bir **Flutter Advanced** programı (state management, test, animasyonlar, yayın) doğal bir sonraki adım — başlamaya karar verdiğinde ayrıca planlanacak.
