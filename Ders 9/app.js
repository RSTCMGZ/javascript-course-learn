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



//! DOM YAPISI TEKRAR

//? id ile secmek
// const h1 = document.getElementById("baslik")
// h1.style.color = "red"
// console.log(h1);

//? class ile secmek (liste döndürür ve ben ilgili elemana index numarası ile yada for döngüsü ile ulaşırım)
// const title = document.getElementsByClassName("title")

// for (let i of title) {
//     console.log(i);
// }
// console.log(
//     title[i]
// );
//? tag yani etiket adı ile seçmek

// const liler = document.getElementsByTagName("li")

// console.log(
//     liler
// );
// for (let i = 0; i < liler.length; i++) {
//     console.log(liler[i]);
// }
//! class ve tagler hic elemanları olmasa dahi bir dizi şeklinde dönerler.Bir eleman oluncada öyle oluyor.
// const p = document.getElementsByClassName("paragraf")
// console.log(p);
// const btn = document.getElementsByTagName("button")
// console.log(btn);



// const h1 = document.querySelector("#baslik")

// console.log(h1);

// const paragraf = document.querySelectorAll(".paragraf")
// console.log(paragraf);

// const ulLi = document.querySelectorAll("ul > li")
// console.log(ulLi);

// const h1 = document.querySelector("h1")
// console.log(h1);

// h1.style.color = "red"


//! attribute eklemek 
//? setAttribute
const h1 = document.getElementById("title")
h1.setAttribute("class", "yesss")
h1.setAttribute("id", "degisti")
h1.setAttribute("title", "bu bir başlıktır")
console.log(h1);

// const img = document.getElementById("img")

// img.setAttribute("src", "https://picsum.photos/id/230/200/200")

const inp = document.getElementById("username")

inp.setAttribute("type", "password")

inp.setAttribute
//? getAttribute
console.log(inp.getAttribute("type"));

//! class eklemek
//? classname ile eklemek

const p = document.getElementById("content")

p.className = "degisti ti ti ti ti ti"
//? classlist ile eklemek
p.classList.add("yeniclass", "asd", "ass")
p.classList.remove("yeniclass")
p.id = "degisti1"

//? style eklemek
p.style.fontSize = "50px"
//? yazıyı değiştirmek
//? textContent
p.textContent = "reso"
//? innerTExt
p.innerText = "reso"
//? innerHTML
// p.innerHTML = "<span class='ilk-baslik'>Bu kısım span</span> Bu kısım span dışında"
console.log(p);


//? butona tıklamak
const btn = document.getElementById("button")
const resim = document.getElementById("img")

btn.addEventListener("click", () => {
    // p.innerHTML = "<span class='ilk-baslik'>Bu kısım span</span> Bu kısım span dışında"
    if (resim.getAttribute("src") == "https://picsum.photos/id/237/200/300") {
        resim.setAttribute("src", "https://picsum.photos/id/40/200/300")
    } else {
        resim.setAttribute("src", "https://picsum.photos/id/237/200/300")
    }
})


