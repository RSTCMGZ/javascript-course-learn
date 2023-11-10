const zorluk = document.getElementById("zorluk")
const tahmin = document.getElementById("tahmin")
const yazi = document.getElementById("yazi")
const btn = document.getElementById("btn")
const badge = document.querySelector(".badge")

let random
let hak = 3;
btn.disabled = true


zorluk.addEventListener("change", function zorlukAyarla() {
    let carpan = Number(zorluk.value)
    random = Math.round(Math.random() * carpan)
    console.log(random);
    btn.disabled = false;
    badge.textContent = hak
})


btn.addEventListener("click", karsilastir)

function karsilastir() {
    hak--
    badge.textContent = hak;
    let tahminNum = Number(tahmin.value)

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
    }
    if (hak == 0 && random != tahminNum) {
        btn.disabled = true
        yazi.textContent = "Kaybettin!"
        yazi.classList.remove("text-warning", "text-danger")
        yazi.classList.add("text-secondary")
        btn.classList.remove("btn-danger", "btn-warning")
        btn.classList.add("btn-secondary")
        btn.disabled = true
    }
}