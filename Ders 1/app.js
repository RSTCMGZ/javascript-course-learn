//! JavaScript Büyük ve Küçük Harfe Duyarlı Bir Programlama Dilidir.
//! Javascript değişken türleri 3 adettir. Veri saklamak için kullanılır
//! Const, Var, Let


//! Değişken Tanımlama Yöntemleri

//var isim = "Reşo";

//let ad = "Reşo";
//ad = "Reşo";
//console.log(ad);;

//const name = "Reşo";
// name = "Neos"; //! hatalı kullanım const değiştirilemez!
// console.log(name);

//! Değişken Tanımlama Kuralları

//? 1- Değişkenlerin başında sayı-harf bulunamaz.
//? 2- Değişken ismi içinde boşluk karakteri bulunamaz.
//? 3- Değişken ismi içinde özel karakter bulunamaz.(?,!,%,&,:,;)
//? 4- Değişken ismi içinde iki kelime varsa _ kullanabiliriz.
// let isim_soyisim = "Reşo";
//? 5- Değişken ismi tanımlarken 2.kelimenin baş harfi Büyük yazılım(camelcase)
// let isimSoyisim = "Reşo";
//? 6- Rakam kullanacaksak değişken isminin sonunda kullanabiliriz.
// let isimSoyisim122 = "Reşo";

//! JavaScript Output (Veri Çıkışı)
// console.log("Hello World!");

// alert("Hello World!");

// document.write("Neos Yazılım");

//! Javascript Veri Girişi

// let isim = prompt("Lütfen adınızı giriniz :");
// let isim1 = confirm("sitemizi beğendiniz mi ?");

//! Javascript Veri Türleri

//? 1- String

let isim = "Reşo"
console.log(isim);
console.log(typeof (isim));

//? 2- Number

let yas = 66;
console.log(yas);
console.log(typeof (yas));

//? 3-Boolean

let not = 40;
let basari = (not >= 50);

console.log(basari);

//? 4-Object Array 

let dizi = ["Serkan", 25, true, [1, 2, 3, 4]];
console.log(dizi[3]);
console.log(typeof (dizi));



let sayilar = [1, 2, 3, 4, 5, 6]

sayilar.push(7) //!sona eleman ekler
sayilar.unshift(0) //!sondaki elemanı siler
sayilar.shift() //!ilk baştaki elemanı siler
sayilar.pop() //!başa eleman ekler.
sayilar.splice(2, 2) //!içe yazılan diziyi siler.
console.log(sayilar);

//? 5-Object
let x = {
    model: "Clio",
    yil: "2013",
    renk: "Turuncu",
}
console.log(x.model);
console.log(x["model"]);















