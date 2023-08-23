//? 6-Null Ve Undefined

// let y = null;
// let z;
// console.log(y);
// console.log(z);

//! Aritmetik Operatörler

// let a = 2; b = 7; c = 12;


// let sonuc;

// //? Toplama Operatörü
// sonuc = a + b;
// //? Çıkarma Operatörü
// sonuc = c - a;
// //? Bölme Operatörü
// sonuc = c / a;
// //? Çarpma Operatörü
// sonuc = a * b;
// //? Üs Alma Operatörü
// sonuc = a ** b
// //? Mod Alma Operatörü
// sonuc = b % a
// //? Bir Arttırma- Bir Azaltma Operatörü
// sonuc++;
// sonuc--;

// console.log(sonuc);
//!  İki değişken oluşturup bunlara rastgele sayı değerleri verin.Ardından bu iki değişkenin toplamının 1 fazlasını yazdıran bir alert oluşturun.

// let a = 10
// let b = 12

// alert(a + b + 1)

//! rastgele bir değişken oluştur degerinin 5 katını alert olarak alın.

// a = 5;

// alert(a * 5)
//! Merhaba benim ismim ... ve soyadım ... Ben ... yaşındayım çıktısını elde etmek için 3 adet değişken kullanınız

// let ad = "resat";
// let soyad = "camgoz";
// let yas = 28;

// console.log("merhaba benim ismim " + ad + " ve soyadım " + soyad + " ben" + yas + " yasındayım");
// console.log(`Merhaba benim ismim ${ad} ve soyadım ${soyad} ben ${yas} yasındayım. `);

//! Atama Operatörleri

// let sonuc;
// let a = 2; b = 7; c = 12;

// sonuc = a;

// sonuc += b; //sonuc = sonuc + b

// sonuc -= a; // sonuc = sonuc - a

// sonuc *= a; // sonuc = sonuc * a
// sonuc /= b; // sonuc = sonuc / b
// sonuc %= a; // sonuc = sonuc % a

// sonuc += 1; // sonuc +1
// sonuc -= 1; // sonuc -1
// console.log(sonuc);
//! rastgele bir x değişkeninin değerini 3 arttıran ifadeyi atama operatorü ile consola yazdırınız.

// let x = 5;

// x += 3;

// console.log(x);

//! rastgele bir x değişkeninin değerini rastgele y değişkeni kadar  atama operatorü ile arttırıp consola yazdırınız.
// let x = 5;
// let y = 5;

// x += y;

// console.log(x);

//? Eşitlik operatörleri (karşılaştırma) operatörleri

// x == y; // x y'ye eşittir.
// x != y; // eşit değildir.
// x < y; // x küçük y'den
// x > y; // x büyük y'den
// x <= y; // Küçük eşittir
// x >= y; // Büyük eşittir
// x === y // Hem veri tiğini kontrol eder, hemde değer kontrol eder.
// x <= y; // Küçük eşittir

//? Kullanıcıdan veri alma (prompt)

// let isim = prompt("Lütfen adınızı giriniz: ")

// console.log(typeof (isim));
// let onay = confirm("onay veriyor musunuz?") //boolean değer verir.
// console.log(typeof (onay));


// let yas = prompt("Lütfen yaşınızı giriniz:")
// console.log(yas + 2); // toplama işlemi yapmaz ve direk yanına yazar.

// let yas = Number(prompt("Lütfen yaşınızı giriniz:")) // değeri string'den number'a dönüştürdük.
// console.log(Number(yas) + 2); // stringden number'a dönüştürdük.
//! Sorular
//! Kullanıcıdan alınan sayının karesini bulan programı prompt() ile yazdırın.

// let sayı = prompt("Lütfen sayı giriniz.")
// console.log(sayı ** 2);
//!Prompt komutu ile 3 farklı değer alın x,y ve z ddaha sonra x ile y yi carpıp bunun sonucunun 2 ye modundan kalan ile z yi toplayın.

// let x = 3;
// let y = 3;
// let z = 4;

// let sonuc = ((x * y) %2) + z
console.log(sonuc);





//! Ekrandan 3 sayı alıp ortalamasını hesaplayan program oluştur.


let x = Number(prompt("bir sayı giriniz"));
let y = Number(prompt("bir sayı giriniz"));
let z = Number(prompt("bir sayı giriniz"));

let ort = (x + y + z) / 3;

console.log(ort);













