// let url = "https://www.neosyazilim.com"
// let kursAdi = "Komple Uygulamalı Web Geliştirme Kursu"

// let sonuc;
//! Sorular
//! url kaç karakterlidir?
// sonuc = url.length
//! kurs adı değişkeni kaç kelimeden oluşur?

// sonuc = kursAdi.split(" ").length

//! url https ile mi başlıyor?
// sonuc = url.startsWith("https")

//! kursAdi içerisinde Eğitimi kelimesi var mı?

// sonuc = kursAdi.includes("Eğitimi")

//! eğer kursAdi içerisinde Kursu kelimesi var ise evet var yok ise hayır yok yazdır.
// if (kursAdi.includes != "Kursu") {
//     console.log("evet var");
// } else {
//     console.log("hayır yok");
// }
//! eğer kursAdi içerisinde Kursu kelimesi var ise evet var yok ise hayır yok yazdır.
// if (kursAdi.indexOf("Kursu") > -1) { // indexof= 4'e ve 4 < -1'den
//     console.log("evet var");
// } else {
//     console.log("hayır yok");
// }

//! url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturun
//? https://www.neosyazilim.com/komple-uygulamalı-web-geliştirme-kursu


// kursAdi = kursAdi.replaceAll(" ", "-").toLowerCase()

// sonuc = `${url}/${kursAdi}`

// console.log(sonuc);

//! ehliyet sistemi
// eğer yaş 18den küçükse ehliyet alamazsınız
// eğer yaş 18 ise ehliyet alabilirsiniz
// eğer yaş 19 ve üzeri ise siz hala ehliyet almadınız mı?

// let yas = 18

// if (yas < 18) {
//     console.log("ehliyet alamazsınız");
// } else if (yas == 18) {
//     console.log("ehliyet alabilirsiniz");
// } else if (yas > 18) {
//     console.log("siz hala ehliyet almadınız mı?");
// }

//! damsız almamaa sitemi
//!bir erkek sayısı giriniz
//!bir kadın sayısı giriniz
//!eğer kadın sayısı 2den az ise içeri giremezsiniz
//!eper 2 ve 2den fazla ise girebilirsiniz ve kadın sayısı erkek sayısından az ise giremezsiniz desin.

// let erkek = 2
// let kadin = 3
// if (kadin >= 2 && kadin >= erkek) {
//     console.log("iceri girebilirsiniz");
// } else {
//     console.log("iceri giremezsiniz");
// }
//! araba lastik uyarısı
//! kullanıcıdan kaç lastiğin sorunlu oldugu ile ilgili bir girdi alın.
//! ve hava indi yada patladı gibi bilgiyi alın
//! 1 lastik sorunlu ve havası indiyse sürmeye devam et 
//! 1 lastik sorunlu ve patlak ise yavaşla
//! 2 lastik sorunlu ve patlak ise aracı durdur
//! 2 lastik sorunlu ve havası inmiş ise lütfen aracınızı lastikerinin havasının doldurun.
//! diye uyarı verecek olan karar yapısını kur


// let lastik = prompt("Arabanın kaç lastiği problemli giriniz?")
// let sorun = prompt("probleminiz ney?")

// if (lastik == 1 && sorun == "indi") {
//     console.log("sürmeye devam et");
// } else if (lastik == 1 && sorun == "patladı") {
//     console.log("yavaşla");
// } else if (lastik == 2 && sorun == "patladı") {
//     console.log("aracı durdur");
// } else if (lastik == 2 && sorun == "indi") {
//     console.log("aracınızın lastiklerinin havasını doldurun.");
// } else {
//     alert("geçerli bir bilgi girmediniz")
// }

//! Number Metotları

let sonuc;

sonuc = "10"
sonuc = Number("10")

sonuc = parseInt("12.6") // sayının sadece tam sayı kısmını alır.
sonuc = parseFloat("12.6") // tamamını yazdırır
sonuc = parseInt("12f") // sadece 12 yi yazdırır
sonuc = parseInt("a12") // nan (not a number) döndürür

let sayi = 12.121212
sonuc = sayi.toPrecision(5) // sayida 5 karakter al
sonuc = sayi.toFixed(3) // virgülden sonra 3 karakter yazdırır.
sonuc = Math.random() // 0-1 arası rastgele sayı oluşturur.
sonuc = Math.round(5.6) // 5.5'den sonra 6'ya yuvarlar 5.4 den sonrası 5'e yuvarlar.
sonuc = Math.ceil(5.1) // virgülden sonra ne yazarsan yaz üste yuvarlar
sonuc = Math.floor(5.9) // virgülden sonra ne yazarsan yaz aşağı yuvarlar
sonuc = Math.sqrt(9) // karekökünü alır.
sonuc = Math.abs(-10) // mutlak değer içinden çıkar.
sonuc = Math.min(8, 6, 5, 4, 3) //en küçük değeri alır
sonuc = Math.max(8, 6, 5, 4, 3) //en büyük değeri alır


//! Soru 0 ile 50 arasında random sayı üretin.

sonuc = Math.round(Math.random() * 50)

console.log(sonuc);








