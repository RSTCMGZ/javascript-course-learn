//! butona tıklandığında bazı özellikler değişsin

// let btn = document.getElementById("btn")

// btn.onclick = function () {
//     btn.style.backgroundColor = "red"
//     btn.style.color = "white"
//     btn.style.borderRadius = "10px"
// }
//! Dark Mode-Light Mode yapımı
//!AddEventListener -

// let btn = document.getElementById("btn")

// btn.addEventListener("click", () => {
//     document.body.classList.toggle("darkmode")
// })

// btn.onclick = function tikla() {
//     document.body.classList.toggle("darkmode")
// }

//! Prompt ile kullanıcıdan adını soyadını isteyin butona basınca boşta duran p etiketine hoşgeldin {kullanici} yazdırın

// let adSoyad = prompt("Ad ve soyad girin :")
// let btn = document.getElementById("btn")
// let p = document.querySelector("p")

// btn.addEventListener("click", () => {
//     p.innerHTML = `hoşgeldin ${adSoyad}`
// })

//! input içine girilen veri butona tıklandığında p etiketi içinde yazdıralım

// let btn = document.querySelector("button")
// let input = document.querySelector("input")
// let p = document.querySelector("p")

// btn.addEventListener("click", () => {
//     let value = input.value;
//     p.innerHTML = value;
// })
//! İnputlar içine girilen sayılar butona tıklandığında p etiketi içinde toplansın.
// let btn = document.querySelector("button")
// let input = document.querySelectorAll("input")
// let p = document.querySelector("p")
// btn.addEventListener("click", () => {
//     let value = Number(input[0].value)
//     let value1 = Number(input[1].value)
//     p.innerHTML = value + value1
// })
//? Farklı bir yol

// btn.addEventListener("click", topla)

// function topla() {
//     btn.addEventListener("click", () => {
//         let value = Number(input[0].value)
//         let value1 = Number(input[1].value)
//         p.innerHTML = value + value1
//     })
// }
//! butona tıkladığında renk kodunu alıp body'i o renge atasın.
// let btn = document.getElementById("btn")
// let input = document.querySelector("input")

// btn.onclick = () => {
//     let value = input.value
//     document.body.style.backgroundColor = value
// }

// btn.addEventListener("click", () => {
//     let value = input.value
//         document.body.style.backgroundColor = value
// })

// btn.onclick = function () {
// let value = input.value
// document.body.style.backgroundColor = value
// }
// btn.addEventListener("click", degistir)
// function degistir(){
//      let value = input.value
//      document.body.style.backgroundColor = value
// }
//! div'e tıklandığında renk butonunda hangi kod var ise o rengi göstersin.
let div = document.querySelectorAll("div")
let renk = document.getElementById("renk")

// for (let i = 0; i < div.length; i++) {
//     div[i].addEventListener("click", () => {
//         div[i].style.backgroundColor = renk.value
//     })
// }

//? forEach kullanarak
// div.forEach(i => {
//     i.addEventListener("click", (e) => {
//         e.target.style.backgroundColor = renk.value
//     })
// })



