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

//!parametreli yapımı
function toplama(a, b) {
    alert("Toplama yapılıyor 10 + 5 = " + (a + b));
}

function cikarma(a, b) {
    alert("Toplama yapılıyor 10 - 5 = " + (a - b));

}

function ifElse() {
    let sonuc = Number(prompt("\n 1. toplama \n 2.çıkarma"))
    if (sonuc == "1") {
        toplama(10, 5);
    } else if (sonuc == "2") {
        cikarma(10, 5);
    } else {
        alert("Doğru bir veri girmediniz    ")
    }
}
ifElse()







