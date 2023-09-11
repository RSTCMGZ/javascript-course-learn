//! Javascript ile DOM işlemleri
//? DOM ile yapabildiklerimiz
// document.getElementById("kare").onclick = function () {
//     alert("bu bir kare")
// }

// // let daire = document.getElementsByClassName("daire")[0] //! getElementsByClassName secicisi html collection döndürür ve diziye dönüştürür.
// // console.log(daire);

// document.querySelector(".daire").onclick = function () {
//     alert("Daireye dıkladınız")
// }

//!DOM ile CSS yazdırmak.

// document.getElementById("kare").onclick = function () {
//     document.getElementById("kare").style.backgroundColor = "Green"
// }

//! Daire ve kareyi yer değiştirin.
// let btn = document.getElementById("btn")
// let kare = document.getElementById("kare")
// let daire = document.querySelector(".daire")

// document.getElementById("btn").onclick = function () {
//     document.getElementById("kare").style.backgroundColor = "blue"
//     document.getElementById("kare").style.borderRadius = "50%"
//     document.querySelector(".daire").style.backgroundColor = "red"
//     document.querySelector(".daire").style.borderRadius = "0"
// }

// btn.onclick = function () {
//     kare.style.backgroundColor = "blue"
//     kare.style.borderRadius = "50%"
//     daire.style.backgroundColor = "red"
//     daire.style.borderRadius = "0"
// }
// //! resmi kaybet ve geri getirme uygulaması
// let degistir = document.getElementById("btn")
// let geriGetir = document.getElementById("btn1")
// let img = document.querySelector(".img")
// let img1 = document.querySelector(".img1")


// degistir.onclick = function () {
// img1.style.display = "block"
// img.style.display = "none"
//     img.src = "2 .jpg" //srcleri değiştirdik
// }

// geriGetir.onclick = function () {
// img.style.display = "block"
// img1.style.display = "none"
//     img.src = "1.jpg" //srcleri değiştirdik
// }

//!!  web sitemize yalnızca üniversite ve lise öğrencilerini kabul ettiğimizi düşünün.Select elementi kullanarak yapalım.  -->

// document.getElementById("btn").onclick = function () {
//     let okul = document.getElementById("okul").value;
//     if (okul == "Lise" || okul == "Üniversite") {
//         document.getElementById("sonuc").innerHTML = `Seçiminiz  ${okul} kabul edildiniz`
//     } else {
//         document.getElementById("sonuc").innerHTML = `Seçiminiz ${okul} kabul edilmediniz`
//     }
// }



