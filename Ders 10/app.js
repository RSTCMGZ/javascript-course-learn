//! İnput içine girilen veri sayfada p etiketi içinde Selam ..... olarak yazdırsın

// document.getElementById("btn").onclick = function () {
//     let input = document.querySelector(".kayit").value
//     document.getElementById("yazi").innerHTML = `selam ${input}`
// }
//!  input içine girilen veri ul etiketi arasına liste elemanı olarak girsin

// document.getElementById("btn").onclick = function () {
//     let input = document.querySelector(".kayit").value
//     document.getElementById("yazi").innerHTML += `<li>${input}</li>`
// }
//!Üyelik kayıt formu
//!şimdi bir üyelik formu olusturacağız ve bu üyelik formu girilen bilgilerin geçerliliğini kontrol edeceğiz
//!üyelik formu olusturmak için:
//!isim email parola parola tekrar formu oluşturun
//! üye ola tıklandıgında tum değerleri alıp değişkenlere atayacak olan js kodunu atayın
//! if else ile : 1. isim  6 karakterden kısa mı?
//! if else ile : 2. email includes @ içeriyor mu?
//! if else ile : 3. parola  6 karakterden kısa mı?
//! if else ile : 4. hepsi doğruysa sitemize hoşgeldiniz desin.

// let btn = document.getElementById("btn")

// btn.onclick = function () {
//     let isim = document.querySelector(".isim").value
//     let email = document.querySelector(".email").value
//     let password1 = document.querySelector(".password1").value
//     let password2 = document.querySelector(".password2").value
//     let sonuc = document.getElementById("sonuc")
//     if (isim.length > 6) {
//         sonuc.innerHTML = "Sifre 6 karakterden kısa olamaz"
//     } else if (!email.includes("@")) {
//         sonuc.innerHTML = "Email @ işareti içermelidir."
//     } else if (password1 != password2) {
//         sonuc.innerHTML = "Şifre uyuşmuyor"
//     } else {
//         sonuc.innerHTML = "Sitemize Hoş Geldiniz Gardaş"
//     }
// }

//! FOREACH
// const p = document.querySelectorAll("paragraf")
// const pler = document.querySelectorAll("p")

// for (let i = 0; i < p.length; i++) {
//     console.log(p[i]);
// }

// pler.forEach(element => { //!element global bir terimdir değişken gibi düşünebiliriz ahmet mehmet'de olabilir
//     console.log(element);
// })

//! h1 etiketini idsine göre alın ve konsola yazdırın(querysellector)

// const h1 = document.querySelector("#title");

//! li etiketlerini yazdırın. (getelementbaytag name)

// const li = document.getElementsByTagName("p")

// for (let i = 0; i < li.lenght; i++) {
//     console.log(li[i]);
// }

//! p etiketlerini classlarından yazdırın(queryselectorall ile)

// const p = document.querySelectorAll(".content")

// p.forEach(e => {
//     console.log(e);
// })
//! Attribute Ekleme
//! h1 etiketine class ekleyip ismini ekle yaptık
// const h1 = document.querySelector("#title");
// h1.setAttribute("class", "ekle") // h1 etiketine class ekleyip ismini ekle yaptık
// h1.classlist.add("ekle")
// h1.classlist.remove("naber")
//! li etiketine class ekleyip ismini ekle yaptık
// const li = document.getElementsByTagName("li")
// for (let i = 0; i < li.length; i++) {
//     li[i].setAttribute("class", "ekle")
//     li[i].innerText = "Merhaba " + i
// }











