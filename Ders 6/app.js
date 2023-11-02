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

let sehirler = ["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "İçel (Mersin)", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
]
// for (let i = 0; i < sehirler.length; i++) {

//     console.log(sehirler[i].toLowerCase());

// }
// for (let i = 0; i < sehirler.length; i++) {
//     if (sehirler[i].endsWith("p")) {
//         console.log(sehirler[i]);
//     }
// }
for (let i = 0; i < sehirler.length; i++) {
    if (sehirler[i].startsWith("A")) {
        console.log(sehirler[i].toUpperCase());
    }
}


























