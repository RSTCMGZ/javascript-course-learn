//!Ödev 1  her seferinde rgb oluşturan bir function olusturup body arka planının rengini değiştirsin.

// function rgbColor() {
//     let randoms = []
//     for (let i = 0; i <= 2; i++) {
//         let random = Math.round(Math.random() * 255)
//         randoms.push(random)
//     }
//     alert(randoms)
//     return `rgb(${randoms[0]},${randoms[1]},${randoms[2]})`

// }

// document.body.style.backgroundColor = rgbColor()

//!Ödev 2 hex color oluşturan fonksiyonu yazın başında # alır ve minimum 3 maksimum 6 değer almalı. A'dan F'ye kadar 0'dan 9'a kadar olmalı.

// randomHex = () => {
//     let chars = "0123456789ABCDEF"
//     let hex = ""
//     for (let i = 0; i < 6; i++) {
//         hex += chars[Math.floor(Math.random() * chars.length)]
//     }
//     return `#${hex}`
// }

// let random = randomHex()
// document.body.style.backgroundColor = random
// document.getElementById("sonuc").innerHTML = random

//! Sayfada p etiketini hangi etiketinin altında görmek istiyorsam p etiketini onun içine append ile eklerim.

// const div = document.querySelector(".wrapper")
// const p = document.createElement("p")
// p.textContent = "Hello World"
// div.appendChild(p)


//! butona tıklandığında bir p etiketi yaratılsın bu p etiketinin Textcontenti input içine yazılan bilgiler olsun bunuda wrapper içine append edelim.

// const div = document.querySelector(".wrapper")
// const inp = document.getElementById("inp")
// const btn = document.getElementById("btn")
// const p = document.createElement("p")

// btn.addEventListener("click", () => {
//     p.textContent = inp.value;
// })
// div.appendChild(p)


//!inputa bir sayı yazılacak ve yazılan o sayıya kadar bütün sayılar ekrana li etiketleriyle yazdırılacak.Sayılar çift ise kırmızı tek ise mavi olsun.
// const div = document.querySelector(".wrapper")
// const input = document.getElementById("inp")
// const btn = document.getElementById("btn")
// const ul = document.createElement("ul")

// btn.addEventListener("click", () => {
//     let value = Number(input.value)
//     for (let i = 0; i <= value; i++) {
//         let li = document.createElement("li")
//         li.textContent = i
//         if (i % 2 == 0) {
//             i.style.color = "red"
//         } else {
//             i.style.color = "blue"
//         }
//         ul.appendChild(li)
//     }
//     div.appendChild(ul)
// })

const input = document.querySelector("input")
const i = document.querySelector("i")

i.addEventListener("click", () => {
    if (input.getAttribute("type") == "password") {
        input.setAttribute("type", "text")
        i.classList.remove("bi-eye")
        i.classList.add("bi-eye-slash")
    } else {
        input.setAttribute("type", "password")
        i.classList.remove("bi-eye-slash")
        i.classList.add("bi-eye")
    }
})

