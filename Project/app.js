const inp = document.getElementById("number")
const btn = document.querySelector("#btn")
const wrap = document.getElementsByClassName("wrapper")[0]


btn.addEventListener("click", tıklandı)
function tıklandı() {
    let value = Number(inp.value)
    if (isNaN(value)) {
        let p = document.createElement("p")
        p.textContent = "Bu oyun rakamlarla oynanır"
        wrap.append(p)
    }
}