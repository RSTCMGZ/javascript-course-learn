// // //!Ödev 1  her seferinde rgb oluşturan bir function olusturup body arka planının rengini değiştirsin.

// // // function rgbColor() {
// // //     let randoms = []
// // //     for (let i = 0; i <= 2; i++) {
// // //         let random = Math.round(Math.random() * 255)
// // //         randoms.push(random)
// // //     }
// // //     alert(randoms)
// // //     return `rgb(${randoms[0]},${randoms[1]},${randoms[2]})`

// // // }

// // // document.body.style.backgroundColor = rgbColor()

// // //!Ödev 2 hex color oluşturan fonksiyonu yazın başında # alır ve minimum 3 maksimum 6 değer almalı. A'dan F'ye kadar 0'dan 9'a kadar olmalı.

// // // randomHex = () => {
// // //     let chars = "0123456789ABCDEF"
// // //     let hex = ""
// // //     for (let i = 0; i < 6; i++) {
// // //         hex += chars[Math.floor(Math.random() * chars.length)]
// // //     }
// // //     return `#${hex}`
// // // }

// // // let random = randomHex()
// // // document.body.style.backgroundColor = random
// // // document.getElementById("sonuc").innerHTML = random

// // //! Sayfada p etiketini hangi etiketinin altında görmek istiyorsam p etiketini onun içine append ile eklerim.

// // // const div = document.querySelector(".wrapper")
// // // const p = document.createElement("p")
// // // p.textContent = "Hello World"
// // // div.appendChild(p)


// // //! butona tıklandığında bir p etiketi yaratılsın bu p etiketinin Textcontenti input içine yazılan bilgiler olsun bunuda wrapper içine append edelim.

// // const div = document.querySelector(".wrapper")
// // const inp = document.getElementById("inp")
// // const btn = document.getElementById("btn")
// // const p = document.createElement("p")

// // btn.addEventListener("click", () => {
// //     p.textContent = inp.value;
// // })
// // div.appendChild(p)


// // //!inputa bir sayı yazılacak ve yazılan o sayıya kadar bütün sayılar ekrana li etiketleriyle yazdırılacak.Sayılar çift ise kırmızı tek ise mavi olsun.
// // // const div = document.querySelector(".wrapper")
// // // const input = document.getElementById("inp")
// // // const btn = document.getElementById("btn")
// // // const ul = document.createElement("ul")

// // // btn.addEventListener("click", () => {
// // //     let value = Number(input.value)
// // //     for (let i = 0; i <= value; i++) {
// // //         let li = document.createElement("li")
// // //         li.textContent = i
// // //         if (i % 2 == 0) {
// // //             i.style.color = "red"
// // //         } else {
// // //             i.style.color = "blue"
// // //         }
// // //         ul.appendChild(li)
// // //     }
// // //     div.appendChild(ul)
// // // })

// // // const input = document.querySelector("input")
// // // const i = document.querySelector("i")

// // // i.addEventListener("click", () => {
// // //     if (input.getAttribute("type") == "password") {
// // //         input.setAttribute("type", "text")
// // //         i.classList.remove("bi-eye")
// // //         i.classList.add("bi-eye-slash")
// // //     } else {
// // //         input.setAttribute("type", "password")
// // //         i.classList.remove("bi-eye-slash")
// // //         i.classList.add("bi-eye")
// // //     }
// // // })

// //! LOCALSTORAGE

// //!local storage bilgi saklamak
// // localStorage.setItem('isim', 'ahmet')
// // //!local storage bilgi çekmek
// // localStorage.getItem('isim')

// // let todos = [
// //     {
// //         todo: "Bulaşık yıka",
// //         isCompleted: false
// //     },
// //     {
// //         todo: "Çamaşır yıka",
// //         isCompleted: false
// //     }
// //]
// // localStorage.setItem('yapilacaklar', JSON.stringify(todos))
// // //! Bir objeyi stringleştirmek.
// // // JSON.stringify(todos)
// // //! Bir stringi objeleştirmek
// // // JSON.parse()
// // console.log(JSON.parse(localStorage.getItem("yapilacaklar")));


// // let mevcutTodos = JSON.parse(localStorage.getItem("yapilacaklar"))
// // let todo = {
// //     todo: 'kedinin tuvaletini temizle',
// //     isCompleted: false
// // }


// // mevcutTodos.push(todo)

// // localStorage.setItem('yapilacaklar', JSON.stringify(mevcutTodos))

// // let todos = JSON.parse(localStorage.getItem('yapilacaklar'))

// // let todo = {
// //     todo: 'çöpü at',
// //     isComplated: false
// // }

// // todos.push(todo)

// // localStorage.setItem('yapilacaklar', JSON.stringify(todo))



// //? Bir kullanıcı kayıt formu oluştur kullanıcının bilgilerini alıp localstorage'e kaydet ve login sayfası olsun kullanıcının bilgileri local'de varsa o bilgileri yazıp entera bastıgında
// //!ForEach Nedir?


// // for (let i = 0; i < dizi.length; i++) {
// //     console.log(dizi[i], i);
// // }

// // dizi.forEach((eleman, index, array) => {
// //     console.log(eleman, index, array);
// // })

// //! MAP

// //  let yeniDizi = []

// // for (let i of dizi) {
// //     yeniDizi.push(i ** 2)
// // }
// // console.log(yeniDizi);

// // let yeniDizi = dizi.map((eleman, index, dizi) => eleman ** 2)
// // console.log(yeniDizi);
// // let ulkeler = ["Tayland", "Netherland", "Turkey", "Italy", "Afganistan"]
// // let yeniUlkeler = ulkeler.map((ulke) => {
// //     if (ulke.includes("land")) {
// //         return ulke.toUpperCase()
// //     }
// //     return ulke
// // })
// // console.log(yeniUlkeler);
// // let ciftler = []
// // dizi = [1, 2, 3, 4, 5, 6, 7, 8, 90,]
// // for (let i of dizi) {
// //     if (i % 2 == 0) {
// //         ciftler.push(i)
// //     }
// // }

// // console.log(ciftler);

// // let ciftler = dizi.filter((sayilar, index, array) => sayilar % 2 == 0)

// // console.log(ciftler);

// //! REDUCE FONKSİYON
// // let dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // let sonuc = dizi.reduce((toplam, eleman, index, array) => toplam + eleman)

// // console.log(sonuc);


// // let sepet = [
// //     {
// //         urun: "Telefon",
// //         fiyat: 5000
// //     },
// //     {
// //         urun: "Bilgisayar",
// //         fiyat: 6000
// //     },
// //     {
// //         urun: "Kulaklık",
// //         fiyat: 2000
// //     },
// // ]
// // let topla = sepet.reduce((toplamFiyat, item) => toplamFiyat + item.fiyat, 0)

// // console.log(topla);

// // //? dizinin içerisindeki tekrar eden elemanları bulmaya yarar.

// // let isimler = ["Mehmet", "Mehmet", "Ali", "Hasan", "Mehmet", "Hasan", "Ali", "Mehmet", "Mehmet", "Ali"]

// // let tekrarEdenler = isimler.reduce((acc, item) => {
// //     if (item in acc) {
// //         acc[item]++
// //     } else {
// //         acc[item] = 1
// //     }
// //     return acc
// // }, {})
// // console.log(tekrarEdenler);
// //?

// let urunler = [
//     {
//         ad: "Iphone",
//         brand: "Apple"
//     },
//     {
//         ad: "Macbook",
//         brand: "Apple"
//     },
//     {
//         ad: "Kulaklık",
//         brand: "JBL"
//     },
//     {
//         ad: "Hoparlor",
//         brand: "JBL"
//     },
//     {
//         ad: "Kalem",
//         brand: "Apple"
//     },
//     {
//         ad: "Saat",
//         brand: "Apple"
//     }
// ]
// //? Markaları ayrı ayrı yazdırdık.
// let kategorize = urunler.reduce((acc, item) => {
//     if (!acc[item.brand]) {
//         acc[item.brand] = []
//     }
//     acc[item.brand].push(item)
//     return acc
// }, {})
// console.log(kategorize);

// //! Every Function (dizinin tüm elemanlarını gezip true or false döndürür.)

// // let isimler = ["Mehmet", "Mehmet", "Ali", "Hasan", "Mehmjet", "Hasan", "Ali", "Mehmet", "Mehmet", "Ali"]
// // let bool = isimler.every((eleman, index, arr) => eleman.includes("a"))
// // // console.log(bool);

// // //! Some (sadece bir eleman koşulu sağlasa yeterli.)

// // let boole = isimler.some((item, index, arr) => item.includes("j"))

// // console.log(boole);
// // //! Find
// // let ali = isimler.find((eleman, index, array) => eleman == "Ali")

// // console.log(ali);
// // //! FindIndex

// // let ali1 = isimler.findIndex((eleman, index, array) => eleman == "Ali")

// // console.log(ali1);

// // //! Sort -sıralamak (elemanları sıralarken bütün hepsini string'e çevirir ve dizinin kendisini de değiştirir.)

// // let number = [5, 4, 6, 8, 1, 3, 22, 62, 36, 21]

// // number.sort((x, y) => x - y)
// // console.log(number);

//! FETCH APİ

let api = 'https://jsonplaceholder.typicode.com/posts'

// fetch(api)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error)) //Hata kodu verir.
//? ASYNC

// async function getPosts() {
//     let response = await fetch(api)
//     if (response.ok) {
//         let data = await response.json()
//         console.log(data);
//     } else {
//         console.log(response);
//     }
// }

// getPosts()

//? AXİOS
async function getPosts() {
    try {
        const response = await axios.get(api);
        veriCek(response.data);
    } catch (error) {
        console.error(error);
    }
}
getPosts()

function veriCek(x) {
    x.forEach(element => {
        const p = document.createElement("p")
        p.textContent = element.title
        document.body.append(p)
    })
}










