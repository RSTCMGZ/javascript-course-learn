//!Soru 1'den n'e kadar olan sayıların toplamını ekrana yazdıran kodu fonksiyon kullanarak yazdırın.
// function tümtoplam() {
//     let n = 5
//     let toplam = 0;
//     for (let i = 0; i < n; i++) {
//         toplam += i
//     }
//     console.log(toplam);
// }

// tümtoplam()

//!Soru fonksiyon kullanarak yazı tura uygulaması yazalım

// function yazitura() {
//     let random = Math.round(Math.random() * 10)
//     if (random <= 5) {
//         console.log("yazı");
//     } else if (random <= 10) {
//         console.log("tura");
//     }
// }
// yazitura()

//!Soru Kullanıcıdan adını ve doğum yılını alın. Daha sonra parametreli fonksiyon kullanarak kullanıcının adını ve yaşını alert edin.

// let ad = prompt("Adınızı giriniz :")
// let dogum = Number(prompt("Dogum yılınızı giriniz :"))

// function hesapla(isim, yas) {
//     console.log(`Senin adın ${isim}, dogum yılın ${2023 - yas}`);
// }

// hesapla(ad, dogum)

//! Arrow Function

// function ad(ad, soyad) {
//     console.log(`senin adın ${ad} ve soyadın ${soyad}`);
// }
// ad("Reşo", "Çamgöz")

// let isim = (ad, soyad) => { // arrow yapıp kısa yol ile functionu kısaltabiliriz.
//     console.log(`senin adın ${ad} ve soyadın ${soyad}`);
// }
// isim("Reşo", "Çamgöz")

// let isim = (ad, soyad) => {
//     return (`senin adın ${ad} ve soyadın ${soyad}`); //hangisini döndürmek istersen ona return yazarız.
//     return ("deneme")
//     return ("neos")
// }
// console.log(isim("Reşo", "Çamgöz"))

//! Örnek
// function topla(sayi1, sayi2) {
//     let kare = sayi1 ** 2
//         (kare + sayi2)
//     return (kare - sayi2)
// }
// console.log(topla(10, 45));

//!Ödev Fonksiyon kullanarak bir sayının asal olup olmadığını konsola yazdırın.
//!2 100'e kadar olan asal sayıları yazdırın.

// let sayi = Number(prompt("Bir sayı giriniz :"))
// let asal = false;

// function asal1() {
//     for (i = 0; i < sayi; i++) {
//         if (sayi % i == 0) {
//             asal == true
//         }
//     }
//     if (asal) {
//         alert("bu sayı asal değil")
//     } else {
//         alert("Bu sayı asaldır!")
//     }
// }
// asal1(sayi, asal)

//!soru bir parametreli bir fonksiyon oluşturun. Koşullar dizinin 5 elemandan az olması durumunda bize az elemanlı dizi desin değilse havucu büyük harfle yazdırsın.


// function metod(x) {
//     if (x.length < 5) {
//         return "Az elamanlı bir dizi."
//     } else {
//         x.splice(5, 1, x[5].toUpperCase())
//         return x
//     }
// }

// console.log(metod(["Pırasa", "Ispanak", "Domates", "Patates", "Karnabahar", "Havuç"]));

//!Soru kullanıcıdan karenin bir kenar uzunluğunun ölçüsünü alın karenin çevre ve alanını hesaplayan parametreli fonksiyonu return kullanarak yazın.

// let olcu = Number(prompt("Bir kenar uzunlugu ölçüsü girin:"))

// function kare(x) {
//     // x = olcu * 4
//     // return x
//     x = olcu ** 2
//     return x
// }

// console.log((kare()));
// //! veya
// let kenar = Number(prompt("karenin bir kenar uzunluğunu girin :"))
// function kare(x) {
//     return `Karenin çevresi ${x * 4} ve karenin alanı ${x ** 2}`
// }

// console.log(kare(kenar));
//!Soru kullanıcının isminin kaç harfli olduğunu veren kodu fonksiyonla yazınız.

// let isim = prompt("adınızı giriniz :")

// function uzunluk(x) {
//     return `İsminizin uzunluğu ${x.length} harfli`
// }

// console.log(uzunluk(isim));

//! yield kullanımı

// function* islem() {
//     for (let i = 0; i < 5; i++) {
//         yield i
//     }
// }

// console.log(
//     iterator.next().value
// );
// console.log(
//     iterator.next().value
// );
// console.log(
//     iterator.next().value
// );
// console.log(
//     iterator.next().value
// );
// console.log(
//     iterator.next().value
// );
// console.log(
//     iterator.next().value
// );
// console.log(iller.Adana);

// for (let i of iller.Adana) {
//     console.log(i)
// }


//!iller içindeki içindeki N ile biten ilçeler
// function burdurN(sehir) {
//     let nileBitenler = []
//     let il = sehir[0].toLocaleUpperCase("tr") + sehir.slice(1, sehir.length)
//     for (let i of iller[il]) {
//         if (i.endsWith("n")) {
//             nileBitenler.push(i)
//         }
//     }
//     return nileBitenler
// }

// console.log(
//     burdurN("izmir")
// );
//! sehirlerin içindeki elemanlardan K ile başlayan ve e içermeyen şehirleri bulun

// function sehir(ilebaslayan, icermeyen) {
//     let kVe = []
//     let kveİlceler = []
//     for (let i of sehirler) {
//         if (i.startsWith(ilebaslayan.toLocaleUpperCase("tr")) && !i.includes(icermeyen)) {
//             kVe.push(i)
//         }
//     }
//     if (kVe.length != 0) {
//         for (let i of iller[kVe[0]]) {
//             kveİlceler.push(i)
//         }
//     }
//     return kveİlceler

// }
// console.log(
//     sehir("a", "n")
// );

//! bir il yazayım ve onun ilçelerini söylesin.

// function ilceSöyle(il) {
//     return iller[il]
// }

// console.log(
//     ilceSöyle("İzmir")
// );














