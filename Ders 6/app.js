//! for döngüsü kullanarak çift sayıları yazdırınız.

// const list = [13, 23, 12, 45, 22, 48, 66, 100]

// for (let i = 0; i <= list.length; i++) {
//     if (list[i] % 2 == 0) {
//         console.log(list[i]);
//     } else {
//         console.log("."); //tekleri . olarak gösterir.
//     }
// }

//! liste elemanlarını konsola yazdırın.
// const meyveler = ["Kayısı", "Muz", "Elma", "Armut", "Kivi", "Şeftali", "Çilek"]


// for (let i = 0; i < meyveler.length; i++) {
//     console.log(meyveler[i]);
// }

//! Kullanıcıdan bir mesaj alın, birde bu mesajın tekrar sayısını alıp ekrana yazdıran kodu yazın.

// let mesaj = prompt("Mesaj giriniz :")

// let tekrar = Number(prompt("tekrar sayısı"))

// for (let i = 0; i < tekrar; i++) {
//     console.log(mesaj);
// }

//! birden n'e kadar olan sayıların toplamını yazdıran kodu yazalım

// let n = Number(prompt("Bir sayı gir :"));
// let toplam = 0;

// for (let i = 0; i < n; i++) {
//     toplam += 1;
//     console.log(toplam); // istenilen sayı kadar toplamı yazar dışarıya log yazarsak sadece sonuncuyu yazar
// }
//! in ve of (Sadece dizilerde geçerli.)

// const dizi = ["Reşo", 28, "Yazılımcı", "Bekar", { ad: "Reşo" }]

// for (i in dizi) {
//     console.log(dizi[i]); // indekslerini gezer ve yazdırır.
// }

// for (i of dizi) {   // direk içini gezer ve yazdırır.
//     console.log(i);
// }

// const urunler = ["İphone 14", "İphone 13 Pro", "Samsung Z Fold", "İphone 12", "Oppo A9", "Samsung S22", "Samsung S20", "Samsung S23"]
//! urunler dizisindeki tüm elemanları consola büyük harfle yazdırın.

// for (i in urunler) {
//     console.log(urunler[i].toUpperCase());
// }
// for (urun in urunler) {
//     console.log(urunler[urun].toUpperCase());
// }

// for (urun of urunler) {
//     console.log(urun.toUpperCase());
// }

//!ürünler listesinde samsung içeren kaç eleman var ?

// let samsung = 0;
// let iphone = 0;

// for (urun of urunler) {
//     if (urun.includes("Samsung")) {
//         samsung++
//     } else if (urun.includes("İphone")) {
//         iphone++
//     }
// }
// console.log(`Samsung iceren ${samsung} eleman var`);
// console.log(`İphone iceren ${iphone} eleman var`);

//! for döngüsü ile 10'a kadar yazdırın. i 5 olduğunda döngü kırılsın.

// for (i = 0; i < 10; i++) {
//     if (i == 5) {
//         break//5'e kadar yazdır ve döngüyü bitirir.
//     } else {
//         console.log(i);
//     }
// }
// for (i = 0; i < 10; i++) {
//     if (i == 5) {
//         continue//i = 5 olursa 5'i atla sonra devam et.
//     } else {
//         console.log(i);
//     }
// }
//! kullanıcıdan bir sayı alın ve asal olup olmadığını kontrol edin
// let sayi = Number(prompt("Bir sayı giriniz :"))
// let asalMi = false;


// for (i = 0; i < sayi; i++) {
//     if (sayi % i == 0) {
//         asalMi == true
//     }
// }
// if (asalMi) {
//     alert("Bu sayı asal değildir")
// } else {
//     alert("Bu sayı asaldır!")
// }
//! Kullanıcıdan yaşını alın ve for döngüsü içinde yaşına kadar olan her rakamı yazdırın.Sadece yaşından 10 eksik olan rakamı yazdırmayın.

// let yas = Number(prompt("Yasınızı giriniz :"))
// for (i = 0; i < yas; i++) {
//     if (i == yas - 10) {
//         continue
//     }
//     console.log(i);
// }




//! WHILE Döngüsü

//! 0-10'a kadar sayıları yazdır.
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++
// }
//! birden n'e kadar olan sayıların toplamını yazdıran kodu yazalım

// let n = 5
// let toplam = 0;
// let i = 0;

// while (i < n) {
//     toplam += i
//     console.log(toplam);
//     i++
// }

//! ÖDEV-1 while döngüsü kullanarak bir sayı tahmin oyunu yapın.Bir sayı belirleyin Eğer kullanıcı doğru tahmin ederse doğru bildin desin.Eğer tahmin sayıdan düşük kalırsa yükseltin desin, yüksek kalırsa azaltın desin.Kullanıcının 5 tahmin hakkı olsun.Hak biterse hakkınız bitti diyip oyunu sonlandırsın.

// let sayi = 5;
// let hak = 5;

// let tahmin = Number(prompt("Bir tahmin giriniz :"))
// hak--

// while (sayi != tahmin) {
//     tahmin = Number(prompt("Tekrar Deneyiniz :"))
//     if (tahmin == sayi) {
//         console.log(`Doğru bildin. kalan hakkın ${hak}`);
//         break
//     } else if (hak == 1) {
//         console.log(`Hakkın bitti. Bulmanız gereken sayı ${sayi}`);
//         break;
//     } else if (tahmin < sayi) {

//         console.log(`Yükseltin. Kalan hakkınız ${hak}`);
//         hak--
//     } else if (tahmin > sayi) {

//         console.log(`Azaltın. Kalan hakkınız ${hak}`);
//         hak--
//     }
// }


// if (tahmin == sayi) {
//     console.log(`Doğru bildin. kalan hakkın ${hak}`);
// }
//! çarpım tablosunun nereden başlayacağı bilinmiyor onun için 2Ler basamagını ekrana yazan bir çarpım tablosu oluşturalım.

// let i = 1;
// while (i <= 10) {
//     console.log(`2 x ${i} = ${i * 2}`);
//     i++
// }
//! FOR DÖNGÜSÜ TEKRAR

// for(let i= 0; i<10; i++){
//     console.log(i);
// }

//!SORU 0-100 arasında kaç çift sayı vardır?

// for (let i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }
//! Dizi ile
// let dizi = []
// for (let i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//         dizi.push(i)
//     }
// }
// console.log(dizi.length);
//! 0-100 arasındaki sayı toplamını ekrana yazdır
// let toplam = 0;
// for (let i = 0; i < 100; i++) {
//     toplam += i
// }
// console.log(toplam);

//! 0-100 arasındaki butun tek ve çift sayıları ayrı ayrı toplayın
// let toplamCift = 0
// let toplamTek = 0
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         toplamCift += i
//     } else {
//         toplamTek += i
//     }
// }

// console.log([toplamCift], [toplamTek]);

//! 0-100 arasında bir random sayı üretin.Rastgele 5 değer üreterek bunları bir dizi içerisine gönderin.

// let dizi = []
// for (i = 0; i < 10; i++) {
//     let random = Math.round(Math.random() * 100)
//     if (dizi.includes(random)) {
//         continue
//     }x
//     dizi.push(random)
//     i++
// }
// console.log(dizi);

// let sınıf = ["Mehmet", "Ahmet", "Hüseyin", "Cabbar", "Ayşe", "Fatma", "Hayriye", "Kadriye"]

// let random = Math.round(Math.random() * (sınıf.length - 1))


// console.log(sınıf[random]);
//!bir diziye yukardaki rastgele dizisinden rastgele 5 tane eleman atın


// let sifreci = ["a", "b", "c", "#", "-", "+", 1, 2, 3, 4]

// let dizi = []
// for (i = 0; i < 5; i++) {
//     let random = Math.round(Math.random() * (sifreci.length - 1))

//     if (dizi.includes(sifreci[random])) {
//         i--
//         continue
//     }
//     dizi.push(sifreci[random])
// }
// console.log(dizi.join(""));


// let dizi = []

// for (i = 0; i < 3; i++) {
//     let random = Math.round(Math.random() * 255)
//     dizi.push(random)
// }
// console.log(`rgb (${dizi[0]}, ${dizi[1]}, ${dizi[2]}) `);

// let dizi = ["#",]
// let hex = ["A", "B", "C", "D","E"]

// for (i = 0; i < 3; i++) {
//     let random = Math.round(Math.random() * 255)
//     dizi.push(random)
// }


// for (let i = 0; i < sehirler.length; i++) {

//     console.log(sehirler[i].toLowerCase());

// }
// for (let i = 0; i < sehirler.length; i++) {
//     if (sehirler[i].endsWith("p")) {
//         console.log(sehirler[i]);
//     }
// }
// for (let i = 0; i < sehirler.length; i++) {
//     if (sehirler[i].startsWith("A")) {
//         console.log(sehirler[i].toUpperCase());
//     }
// }

//! 5 harften oluşan şehirleri bir diziye atın.


// let dizi = []
// for (let sehir of sehirler) {
//     if (sehir.length == 5) {
//         dizi.push(sehir)
//     }

// }

// console.log(dizi);

//! Bankamatik Uygulaması
// let bakiye = 2000;
// while (true) {
//     let tercih = prompt("Bankamıza Hoşgeldiniz \n 1-Bakiye göster \n 2-Para çek \n 3-Para yatır \n 4-Çıkış yap")
//     if (tercih == 1) {
//         alert(`Mevcut bakiyeniz ${bakiye}`)
//     } else if (tercih == 2) {
//         let kacpara = prompt("Kaç lira cekeceksiniz?")
//         if (kacpara > bakiye) {
//             alert("Bakiye yetersiz.")
//         } else {
//             bakiye -= kacpara
//             alert(`Mevcut bakiyeniz ${bakiye}`)
//         }
//     } else if (tercih == 3) {
//         let kacPara = Number(prompt("Kaç lira yatıracaksınız?"))
//         bakiye += kacPara
//         alert(`Mevcut bakiyeniz ${bakiye}`)
//     } else if (tercih == 4) {
//         alert("Başarılı ile çıkış yapılmıştır")
//         break
//     } else {
//         alert("Hatalı tuşlama yaptınız")
//     }
// }

//!Sayı tahmin oyunu

// let random = Math.round(Math.random() * 10)
// console.log(random);
// let hak = 3;
// while (true) {
//     let tahmin = Number(prompt("Bir sayı tahmin edin(0-10)"))
//     hak--
//     if (hak == 0 && tahmin != random) {
//         alert(`Tüm hakkın bitti`)
//         break;
//     }
//     if (tahmin > random) {
//         alert(`Daha küçük bir sayı giriniz ${hak} hakkın kaldı`);
//     } else if (tahmin < random) {
//         alert(`Daha büyük bir sayı giriniz ${hak} hakkın kaldı`);
//     } else {
//         alert(`Tebrikler ${3 - hak} denemede kazandın`);
//         break;
//     }

// }
//!Zar Atma Oyunu
// let zar1 = (Math.ceil(Math.random() * 6));
// let zar2 = (Math.ceil(Math.random() * 6));

// if (zar1 == zar2) {
//     console.log("kazandınız");
// } else {
//     console.log("Kaybettiniz");
// }

// let dizi = []
// for (let i of sehirler) {
//     let uc = i.slice(0, 3)
//     dizi.push([i, uc])
// }
// console.log(dizi);
//!En uzun karakterli ilimiz:

// let enuzun = ""

// for (let i of sehirler) {
//     if (enuzun.length < i.length) {
//         enuzun = i
//     }
// }
// console.log(enuzun);

//! Çarpım tablosu

// for (let i = 0; i <= 10; i++) {
//     for (let l = 0; l <= 10; l++) {
//         console.log(`${i} x ${l} = ${i * l}`);

//     }
// }

//! ekrana her bir kere mehmet yazacak ve 5 kere vuh süper yazacak
// for (let i = 0; i < 5; i++) {
//     console.log("Reso");
//     for (let l = 0; l < 5; l++) {
//         console.log(` süper`);
//     }
// }
//! Rize'den sonraki ili yazdırın.

// let rizedensonrakisehir = sehirler.indexOf("Rize") + 1;
// console.log(sehirler[rizedensonrakisehir]);

//! En çok elemanlı şehir ve en az elemanlı şehirin farkı kaç

// let enuzun = ""
// let enkısa = "asdas"

// for (let i of sehirler) {
//     if (enuzun.length < i.length) {
//         enuzun = i
//     }
//     if (enkısa.length > i.length) {
//         enkısa = i
//     }
// }
// console.log(enuzun.length - enkısa.length);

//! sonu land ile biten ülkeleri ekrana yazdırın

// for (let country of countries) {
//     if (country.endWith("land")) {
//         console.log(country);
//     }
// }
//! A ile başlayan ülkelerin sayısı mı fazla yoksa T ile başlayan ülkelerin sayısı mı?
// let a = []
// let t = []
// for (let country of countries) {
//     if (country.startsWith("A")) {
//         a.push(country)
//     } else if (country.startsWith("T")) {
//         t.push(country)
//     }
// }

// if (a.length > t.length) {
//     console.log(`A ile başlayan ülkeler daha fazla ${a.length - t.length}`);
// } else {
//     console.log(`T ile başlayan ülkelerin sayısı  daha fazla ${t.length - a.length}`);
// }
//! Kaç ülke E harfi içermiyenleri yazdır
// let dizi = []
// for (let country of countries) {
//     if (!country.toLowerCase().includes("e")) {
//         dizi.push(country)
//     }
// }
// console.log(dizi);
//! Taş kağıt makas oyunu
let oyun = ["Taş", "Kağıt", "Makas"]

while (true) {
    let random = Math.round(Math.random() * (oyun.length - 1))
    let bilgisayarSecimi = oyun[random]
    let oyuncu = prompt("Taş-Kağıt-Makas seçimi yapınız (tas-kağıt-makas)")
    if ((bilgisayarSecimi == "Taş" && oyuncu == "Makas") || (bilgisayarSecimi == "Kağıt" && oyuncu == "Taş") ||
        (bilgisayarSecimi == "Makas" && oyuncu == "Kağıt")
    ) {
        console.log("Kaybettiniz");
    } else if ((oyuncu == "Taş" && bilgisayarSecimi == "Makas") || (oyuncu == "Kağıt" && bilgisayarSecimi == "Taş") ||
        (oyuncu == "Makas" && bilgisayarSecimi == "Kağıt")
    ) {

    }
}