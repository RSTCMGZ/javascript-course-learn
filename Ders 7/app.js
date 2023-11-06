//! ATM UYGULAMASI

// let bilgi = prompt("Adınızı giriniz :")
// let sifre = prompt("Sifrenizi giriniz :")

// let tanimliAd = "Reşo"
// let tanimliSifre = 12345


// if (bilgi == tanimliAd && sifre == tanimliSifre) {
//     let bakiye = 15000
//     while (true) { //Herhangi bir koşula bağlı kalmadan çalışır.
//         let soru = prompt("Yapmak istediğiniz işi seçiniz : \n 1.Bakiye Sorgulama \n 2.Para Çekme \n 3.Para Yatırma \n 4.Çıkış") // \n bizi bir alt satıra atar "br" gibi.
//         if (soru == "1") {
//             alert(`Mevcut bakiyeniz ${bakiye}`)
//         } else if (soru == "2") {
//             let miktar = Number(prompt("Çekmek istediğiniz miktarı giriniz :"))
//             if (bakiye >= number) {
//                 bakiye -= miktar;
//                 alert(`Çekilen miktar ${miktar}₺.Mevcut bakiyeniz ${bakiye}`)
//             } else {
//                 alert("Bakiye Yetersiz.")
//             }
//         } else if (soru == "3") {
//             let yatir = Number(prompt("Yatırmak istediğiniz miktarı giriniz :"))
//             bakiye += yatir
//             alert(`Yatırılan miktar ${yatir}₺. Mevcut bakiyeniz ${bakiye}₺`)
//         } else if (soru == "4") {
//             alert("Çıkış Yapıldı")
//             break
//         }
//     }
// } else {
//     alert("Kullanıcı adı veya şifre hatalı")
// }

//! FONKSİYONLAR


// function hello() { // function yazıp function ismini yazıp scopelerin içine ne yapıldığını yazarız fakat dışarıda hello() çağırmak gerekir.
//     console.log("Hello World!");
// }
// function merhaba() {
//     hello() // fonksiyon içinde fonksiyon çağırabiliriz.
// }
// merhaba()

// function hello(isim, soyisim) { //Birden fazla parametre oluşturabiliriz
//     console.log(`Senin adın ${isim}, soyadın ${soyisim}`);
// }

// hello("Reşo", "Çamgöz") // bu parametrelerin karşılığını böyle yazdırabiliriz.

//! Soru ekranda okunan(prompt ile yapabilirsin) bir sayının karesini fonksiyon kullanarak hesaplayınız.

// function sayi() {
//     let tahmin = Number(prompt("Bir sayı giriniz :"))
//     alert(tahmin ** 2)
// }
// sayi()
//! iki adet fonksiyon olacak biri toplama biri çıkarma işlemi yapacak
//! üçüncü fonksiyonlada bunlar if else içerisine alınacak ve 1'e basıldığında toplama fonksiyonu çalışacak 2'e basıldığında çıkartma fonksiyonu çalışacak


// function toplama() {
//     alert("Toplama yapılıyor 10 + 5 = " + (10 + 5));
// }

// function cikarma() {
//     alert("Toplama yapılıyor 10 - 5 = " + (10 - 5));

// }

// function ifElse() {
//     let sonuc = Number(prompt("\n 1. toplama \n 2.çıkarma"))
//     if (sonuc == "1") {
//         toplama();
//     } else if (sonuc == "2") {
//         cikarma();
//     } else {
//         alert("Doğru bir veri girmediniz    ")
//     }
// }
// ifElse()

// //!parametreli yapımı
// function toplama(a, b) {
//     alert("Toplama yapılıyor 10 + 5 = " + (a + b));
// }

// function cikarma(a, b) {
//     alert("Toplama yapılıyor 10 - 5 = " + (a - b));

// }

// function ifElse() {
//     let sonuc = Number(prompt("\n 1. toplama \n 2.çıkarma"))
//     if (sonuc == "1") {
//         toplama(10, 5);
//     } else if (sonuc == "2") {
//         cikarma(10, 5);
//     } else {
//         alert("Doğru bir veri girmediniz    ")
//     }
// }
// ifElse()

//! FONKSİYONLAR

// function topla() {
//     return 5 + 10
// }
// console.log(topla());
//! fonksiyon içine parametre yazabiliriz
// function toplama(x, y) {
//     return x + y;

// }
// console.log(
//     toplama(22, 32)
// );
//! fonksiyon içinde döngü kullanmak
// function döngü(x, y, artis = 1) {
//     let dizi = []
//     for (let i = x; i < y; i += artis) {
//         dizi.push(i)
//     }
//     return dizi;
// }
// console.log(döngü(10, 20, 2));

//! fonksiyon içinde çift veya tek yazdırmak

// function tekCift(a) {

//     if (a % 2 == 0) {
//         return ("çift sayıdır.");
//     } else {
//         return ("tek sayıdır");
//     }
// }
// console.log(
//     tekCift(7)
// );

//! string veriyi büyük harfler ile yazdırsın

// function string(a) {
//     return a.toUpperCase()
// }
// console.log("ahmet");

//!bir karenin çevresini alanını hesaplayınız

// function kare(kenar) {
//     let alan = kenar ** 2
//     let cevre = kenar * 4
//     return `Çevre ${cevre} alan${alan}`
// }
// console.log(kare(10));
//! yarı çapı bilinen bir  dairenin çevre ve alanını hesaplayan bir fonksiyon yazınız alan => pı.r**2 çevre=> 2.pı.r

// function daire(r) {

//     let alan = Math.PI * (r ** 2)
//     let çevre = Math.PI * r * 2
//     return `alan ${(alan).toFixed(1)} çevre ${(çevre).toFixed(1)}`
// }
// console.log(daire(10));
//! yazdığımız sayıya kadar olan bütün sayıları toplayan bir fonksiyon yazınız

// function topla(n) {
//     let toplam = 0
//     for (let i = 0; i <= n; i++) {
//         toplam += i
//     }
//     return toplam
// }
// console.log(topla(100));

//! iki adet parametre alan ve bu iki değerin arasındaki çift sayıları toplayan bir fonksiyon yazın

// function ciftTopla(x, y) {
//     let toplam = 0;
//     for (let i = x; i <= y; i++) {
//         if (i % 2 == 0) {
//             toplam += i
//         }
//     }
//     return toplam
// }
// console.log(ciftTopla(10, 20));
//! bir C alan fonksiyon değerini F ve K 'ye dönüştürsün.
// //? c* 9/5 + 32 = F
// //? c + 273

// function Fah(x) {
//     let f = (x * 9 / 5) + 32
//     let k = x + 273
//     return `f = ${f}  k=${k}`
// }
// console.log(Fah(20));

//! farklı gezegenlerdeki ağırlımızı hesaplayan bir fonksiyon oluşturun
//? ağırlık = kütle * yerçekimi
//? kütle = kilo/ dünyanınYerÇekimi(10)

// function kiloİndex(kilo, gezegen) {
//     let kutle = kilo / 9.8
//     if (gezegen == "mars") {
//         return (3.71 * kutle).toFixed(2)
//     } else if (gezegen == "ay") {
//         return (1.62 * kutle).toFixed(2)
//     } else {
//         return `Elimde veri yok`
//     }
// }
// console.log(
//     kiloİndex(20, "mars")
// );

//! içerisine 3 farklı parametre alan ve en büyükklerini döndüren bir fonksiyon yazınız

// function enbuyuk(x, y, z) {
//     if (x > y && x > z) {
//         return `x en büyük`
//     } else if (y > z && y > x) {
//         return `y en büyük`
//     } else if (z > x && z > y) {
//         return `z en büyük`
//     }
// }
// console.log(enbuyuk(20, 30, 50));



//! içerisine bir parametre alan bir fonksiyon yazın. Bu parametre asal ise true değil ise false değeri döndürün.

// function asal(x) {
//     let asal = true
//     for (let i = 2; i < x; i++) {
//         if (x % i == 0) {
//             asal = false
//             break
//         }
//     }
//     if (asal == true) {
//         return true;
//     } else {
//         return false;
//     }
// }

//! 2-100 arasındaki tüm asalları yazdırın
// let asallar = []
// for (let i = 2; i <= 100; i++) {
//     if (asal(i)) {
//         asallar.push(i)
//     }
// }
// console.log(asallar);

// function asallar(bitis) {
//     let asalSayilar = []
//     for (let i = 2; i <= bitis; i++) {
//         if (asal(i)) {
//             asalSayilar.push(i)
//         }
//     }
//     return asalSayilar
// }
// console.log(asallar(200));
