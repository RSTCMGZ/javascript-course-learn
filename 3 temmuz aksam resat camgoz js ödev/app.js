//! Soru bir array objesi tanımlayın ve bu objeler şu verileri tutsun: ad ve yaş
//! kullanıcan prompt ile adını alın ve daha sonra bu arrayda o ada sahip bir kullanıcının verisinin olup olmadığını kontrol edin.
//! Kullanıcı varsa alert ile kullanıcı adını ve yaşını yazdırın
//! kullanıcı bulunamzsa böyle bir kullanıcı yok yazdırın

// let array = {
//     isim: "Reşat",
//     yas: 28
// }
// let ad = prompt("Adınızı giriniz:")

// if (ad.toLocaleLowerCase() == array.isim.toLocaleLowerCase()) {
//     console.log(array.isim, array.yas)
// } else {
//     console.log("böyle bir kullanıcı yok")

//! kullanıcıdan prompt ile 3 not alın ve ortalamayı hesaplayın
//!ortalama 50den küçükse kaldınız mesajını, 50den büyük ve 70den küçükse ortalamanız orta, 70den büyük ve 80den küçükse ortalamanız iyi 80den buyuk ve 100'e kucuk esit ortalamanız çok iyi algoritmasını kurun.


// let not1 = Number(prompt("Birinci notu yazın :"))
// let not2 = Number(prompt("İkinci notu yazın :"))
// let not3 = Number(prompt("Üçüncü notu yazın :"))

// let ortalama = (not1 + not2 + not3) / 3

// if (ortalama < 50) {
//     alert("kaldınız");
// } else if (ortalama >= 50 && ortalama <= 70) {
//     alert("orta ");
// } else if (ortalama >= 70 && ortalama <= 80) {
//     alert(" iyi");
// } else if (ortalama >= 80 && ortalama <= 100) {
//     alert("pekiyi");
// }

//!kullanıcıdan prompt ile adını ve yaşını alın.
//!prompt boş bırakılırsa hata mesajı döndürün.
//! yaş 0-15 arası ise veya 100den büyükse hata nesajı döndürün.
//! ad 3 karakterden kücükse hata mesajı döndürün.

// let isim = prompt("Adınızı giriniz :")
// let yas = Number(prompt("Yasınızı giriniz :"))

// if (isim == " " || yas == "") {
//     console.log("isim ve yas bos bırakılmaz")
// } else if (!(yas > 15 && yas < 100)) {
//     console.log("ya cok kucuk yada cok buyuk")
// } else if (isim.length < 3) {
//     console.log("hatalı girdiniz")
// }

//! Talimatlar
//! kullanıcıdan iki adet veri alın biri yaş biri arkadaşı var mı ?
//! yası 18den büyükse ve arkadaşı varsa mekana girebilsin.(confirm)
//! eğer yaşı tutmuyorsa "xx" yıl sonra gel diye uyarı versin.
//!eğer arkadaşı yoksa bir arkadaş bul öyle gel desin
//! hem yaşı tutmuyor hemde arkadaşı yoksa hem büyümelisin hemde bir arkadaş edinmelisin diye uyarı versin.

// let yas = Number(prompt("Yas giriniz :"))
// let arkadas = confirm("Arkadasın var mı?")

// if (yas > 18 && arkadas) {
//     console.log("mekana girebilirsin")
// } else if (yas < 18 && arkadas) {
//     console.log(`${18 - yas} yıl sonra gel ufaklık`)
// } else if (yas > 18 && !arkadas) {
//     console.log("bir arkadaş bul öyle gel")
// } else {
//     console.log("hem büyümelisin hemde bir arkadaş edinmelisin")
// }

//! sayı tahmin olayı
//! kullanıcıdan bir sayı alınız. 0 ile 5 arasında random sayı üretecek
//! oluşturulan sayı ile aynı sayı girilirse doğru
//! oluşturulan sayı ile aynı sayı  girilise yanlış


// let random = Math.round(Math.random() * 5)
// let tahmin = Number(prompt("Bir tahmin giriniz :"))


// if (random == tahmin ) {
//     console.log("değer doğru");
// } else {
//     console.log("doğru değil");
// }

//! Yazı-Tura oyunu
//! kullanıcıdan bir değer alınız.
//! yazı veya tura yazdırın.

// let random = Math.round(Math.random() * 10)

// if (random <= 5) {
//     console.log("yazı");
// } else if (random <= 10) {
//     console.log("tura");
// }

//! DÖNGÜLERE GİRİŞ

//? 0 dana başlayıp 10'a kadar birer arttıran değeri giriniz.

//for (let i = 0; i < 10; i++) {   //? let i = 0 başlangıç değeri gir; let < 10 bitiş değeri girdik. ve i++ = i'yi bir arttırdık.
//    console.log(i);              //? i yerine istediğin kadar değer gir neos,reşo yinede çalıştırır fakat i değeri global deerdir
//}

//? 10 defa merhaba yazdırın
// for (let i = 0; i < 10; i++) {
//     console.log("Merhaba");
// }

//? 1'den 50'ye kadar olan çift sayıları yazdırın.

// for (let i = 0; i <= 50; i += 2) {
//     console.log(i);
// }
//? koşullar ile yapılacak
// for (let i = 0; i <= 50; i++) {
//     if (i % 2 == 0) { // bölümünden kalan 0 ise çift verir yani çiftleri yazdırdık.
//         console.log(i);
//     } else {
//         console.log(".");
//     }
// }

//! 0-100 arası 3'e ve 5'e tam bölünen sayıların yazdırıldığı kodu for döngüsü ile yazdırınız.

for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i);
    } else if (i % 5 == 0) {
        console.log(i);
    }
}


















