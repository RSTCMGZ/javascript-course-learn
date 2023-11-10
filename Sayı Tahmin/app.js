const zorluk = document.getElementById("zorluk")
const tahmin = document.getElementById("tahmin")
const yazi = document.getElementById("yazi")
const btn = document.getElementById("btn")
const badge = document.querySelector(".badge")
const yenile = document.getElementById("yenile")



let random
let hak = 3;
btn.disabled = true
tahmin.disabled = true;

zorluk.addEventListener("change", function zorlukAyarla() {
    let carpan = Number(zorluk.value)
    random = Math.round(Math.random() * carpan)
    console.log(random);
    btn.disabled = false;
    badge.textContent = hak
    zorluk.disabled = true
})




btn.addEventListener("click", karsilastir)
tahmin.addEventListener("keydown", function press(e) {
    if (event.keyCode == 13) {
        karsilastir()
    }
})
function karsilastir() {
    let tahminNum = Number(tahmin.value)
    if (isNaN(tahminNum)) {
        yazi.textContent = "Oyun rakam ile oynanır"
    } else {
        hak--
        badge.textContent = hak
        if (tahminNum < random) {
            yazi.textContent = "Daha büyük bir sayı gir!";
            yazi.classList.remove("text-primary");
            yazi.classList.add("text-danger", "text-warning");
            btn.classList.remove("btn-primary", "btn-warning")
            btn.classList.add("btn-danger")
        } else if (tahminNum > random) {
            yazi.textContent = "Daha büyük bir sayı gir!";
            yazi.classList.remove("text-primary", "text-danger");
            yazi.classList.add("text-warning");
            btn.classList.remove("btn-primary", "btn-danger")
            btn.classList.add("btn-warning")
        } else {
            yazi.textContent = "Tebrikler Kazandın!"
            yazi.classList.remove("text-danger", "text-warning", "text-primary")
            yazi.classList.add("text-success")
            btn.classList.remove("btn-primary", "btn-danger", "btn-warning")
            btn.classList.add("btn-success")
            btn.disabled = true
            tahmin.disabled = true


        }
        if (hak == 0 && random != tahminNum) {
            yaziHandle("Kaybettin!", ["text-warning", "text-danger"])
            yazi.textContent = "Kaybettin!"
            yazi.classList.remove("text-warning", "text-danger")
            yazi.classList.add("text-secondary")
            btn.classList.remove("btn-danger", "btn-warning")
            btn.classList.add("btn-secondary")
            btn.disabled = true
            tahmin.disabled = true
        }
    }

}

function yaziHandle(icerik, kaldirilacak) {
    yazi.textContent = icerik
    for (let i of kaldirilacak) {
        yazi.classList.remove(i)
    }

}