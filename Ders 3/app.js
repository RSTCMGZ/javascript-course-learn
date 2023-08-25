//! İF-ELSE (KOŞULLAR)

//?Soru eğer yaş 20 ve 20'den büyükse sınava girebilir, küçük ise giremez eylemini prompt kullanarak yazdırın.


// let yas = prompt("Lütfen yaşınızı giriniz");

// if (yas >= 20) {
//     console.log("sınava girebilir");
// } else {
//     console.log("sınava giremez");
// }


//?Soru kullanıcıdan yaşını alın eğer 18 ve üstü ise ehliyet alabilir, değilse alamasın

// let yas = prompt("lütfen yaşınızı giriniz")

// if (yas >= 18) {
//     console.log("ehliyet alabilir");
// } else {
//     console.log("ehliyet alamaz");
// }

//?Soru  kullanıcı adı ve sifre değişkenleri oluşturup içindeki bilgileri girdiğinde siteye giriş yapsın değilse siteye giriş yapılmasın.

// let kullanıcıAdi = "rstcmgz"
// let sifre = "12345";

// if (kullanıcıAdi == "rstcmgz") {
//     if (sifre == "12345") {
//         alert("siteye giriş yapıldı");
//     } else {
//         alert("siteye giriş yapılamadı")
//     }
// } else {
//     alert("siteye giriş başarısız.")
// }

//! And/Or Operatörleri (Mantıksal Operatörler)
// let isim = "rst"
// let yas = 28
//? && - and ve operatörü
//? true - true

// if (isim == "rst" && yas == 28) {
//     alert("Hoşgeldiniz")
// } else {
//     alert("Giremezsiniz!")
// }

//? || - Or veya operatörü
//? true - false

// if (isim == "rst" || yas == 28) {
//     alert("Hoşgeldiniz")
// } else {
//     alert("Giremezsiniz!")
// }
//?Soru  kullanıcı adı ve sifre değişkenleri oluşturup içindeki bilgileri girdiğinde siteye giriş yapsın değilse siteye giriş yapılmasın.(ve veya operatörü kullan)



// let kullanıcıAdi = "rstcmgz"
// let sifre = "12345";

// if (kullanıcıAdi == "rstcmgz" && sifre == "12345") {
//     alert("kullanıcı adı ve şifre doğru");
// } else {
//     alert("kullanıcı adı ve şifre yanlış")
// }


//? Soru Bir sayının 10 ile 50 arasında olup olmadığını kontrol eden kodu yazınız?

// let sayi = prompt("10 ile 50 arasında sayı giriniz:")

// if (sayi > 10 && sayi < 50) {
//     alert("sayı 10-50 arasındadır")
// } else {
//     alert("tekrar sayı giriniz.")
// }

//? Bir sayının pozitif tek sayı olup olmadığını kontrol eden kodu yazınız?

// let sayi = Number(prompt("Bir sayı giriniz?"))

// if (sayi % 2 == 1 && sayi > 0) {
//     alert("sayı pozitif tek sayıdır")
// } else if (sayi < 0) {
//     alert("Sayı negatiftir")
// }
// else {
//     "sayı pozitif tek sayı değildir"
// }
//! ÖDEV İF İLE İF ELSE ARASINDAKİ FARK NEDİR ARAŞTIRIP WHATSAPP'DAN HOCAYA YAZ
//? x,y,z diye değişken tanımlayıp number atayın. bunlardan en büyük sayıyı alert eden sayıyı yazınız?

// let x = 100;
// let y = 50;
// let z = 70;

// if (x > y && x > z) {
//     alert("en büyük sayı x'dir")
// } else if (y > x && y > z) {
//     alert("en büyük sayı y'dir")
// } else if (z > x && z > y) {
//     alert("en büyük sayı z'dir")
// }
// else {
//     alert("tekrar sayı giriniz")
// }

//! String Metotları 
let kursAdi = "                  Komple Uygulamalı Web Geliştirme Eğitimi"
let isim = "Fırat Dalkılıç"
let sonuc;

sonuc = kursAdi.toLowerCase() // tüm cümleyi küçük harfle yazar
sonuc = kursAdi.toUpperCase() // tüm cümleyi büyük harfle yazar
sonuc = kursAdi.length // tüm cümlenin uzunlugunu number olarak verir
sonuc = kursAdi.slice(0, 8) // 0. indeksten başlar 8.indekse kadar yazdırır
sonuc = kursAdi.slice(10) // 10. indeksten başlar ve sonrasını yazdırır
sonuc = kursAdi.slice(-10) // soldan başlayıp sonrasını yazdırır.
sonuc = kursAdi.slice(-10, -5) // -10 dan başlar -5'e kadar devam eder 
sonuc = kursAdi.replace("Eğitimi", "Kursu") // eğitimi yerine kursu yazar.
sonuc = isim.replace("ı", "i") // Bir adet değişim sağlar
sonuc = isim.replaceAll("ı", "i") // tümünü değiştirir.
sonuc = kursAdi.trim(); // boslukları siler
sonuc = kursAdi.trimStart(); // baştaki boslukları siler
sonuc = kursAdi.trimEnd(); // sondaki boslukları siler

console.log(sonuc);