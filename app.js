const inputlar = document.getElementsByClassName("inp")
const icon = document.getElementById("bi")
const pass = document.getElementById("pass")
console.log(icon);

icon.addEventListener("click", function sifreGöster(e) {
    if (pass.getAttribute("type") == "password") {

        pass.setAttribute("type", "text")
        icon.classList.remove("bi-eye-fill")
        icon.classList.add("bi-eye-slash")
    } else {
        pass.setAttribute("type", "password")
        icon.classList.remove("bi-eye-slash")
        icon.classList.add("bi-eye-fill")
    }
})
for (let input of inputlar) {
    input.addEventListener("focusin", function labelYerlestir() {
        let label = this.parentElement.children[0]
        label.style.fontSize = "13px"
        label.style.top = "2px"
    })
    input.addEventListener("focusout", function labelYerlestir() {
        if (input.value = "") {
            let label = this.parentElement.children[0]
            label.style.fontSize = "16px"
            label.style.top = "15px"
        }
    })
}


for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        return;
    } else {
        return;
    }
}