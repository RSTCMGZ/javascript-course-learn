const wrapper = document.querySelector(".wrapper")
const basket = document.querySelector(".basket")
let api = "https://dummyjson.com/products"
let sepet = []
async function getProducts() {

    let response = await fetch(api)
    let data = await response.json()
    ekranaYazdir(data.products)
}
getProducts()

function ekranaYazdir(urunler) {
    urunler.forEach(urun => {
        const card = document.createElement("div")
        card.classList.add("card", "p-0")
        card.innerHTML = `
        <img src="${urun.thumbnail}"  width='100' class="card-img-top resim" alt="..." />
        <div class="card-body">
          <h5 class="card-title isim">${urun.title}</h5>
          <p class="card-text ">
            ${urun.description}
          </p>
          <p class="card-text fiyat">
          ${urun.price}₺
        </p>
          <button class="btn btn-primary">Satın Al</button>
        </div>

        `
        wrapper.append(card)
    })
    const butonlar = document.querySelectorAll(".btn")
    butonlar.forEach(btn => {

        btn.addEventListener("click", function () {
            basket.innerHTML = ""
            let card = this.parentElement.parentElement
            let isim = card.querySelector(".isim").textContent
            let resim = card.querySelector(".resim").src
            let fiyat = card.querySelector(".fiyat").textContent

            let sepeteEklenecek = {
                name: isim,
                img: resim,
                price: fiyat,
                adet: 1
            }

            if (sepet.length == 0) {
                sepet.push(sepeteEklenecek)
            } else {
                let sepettekiÜrün = sepet.filter(urun => {
                    if (urun.name == sepeteEklenecek.name) {
                        return urun.adet++
                    }
                })
                if (sepettekiÜrün.length == 0) {
                    sepet.push(sepeteEklenecek)
                }

            }

            sepet.forEach(urun => {
                const div = document.createElement("div")
                div.innerHTML = `
                <img
                src="${urun.img} "
                alt=""
                width="100px"
              />
              <p>${urun.name}</p>
              <p>${urun.price}</p>
              <p>${urun.adet}</p>
              <p class="sil">X</p>
                `
                basket.append(div)
            })
            const sil = document.querySelectorAll(".sil")
            sil.forEach(sil => {
                sil.addEventListener("click", function () {
                    let isim = this.parentElement.children[1].textContent
                    let deneme = sepet.filter(urun => urun.name != isim)
                    sepet = deneme
                    this.parentElement.remove()


                })


            })



        })
    });
}



