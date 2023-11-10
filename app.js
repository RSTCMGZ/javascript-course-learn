const inputlar = document.getElementsByClassName("inp")
const icon = document.querySelector(".icon")
const pass = document.getElementById("pass")
console.log(icon);

icon.addEventListener("click", function sifreGöster() {
    if (pass.getAttribute("type") == "password") {
        pass.setAttribute("type", "text")
        icon.textContent = "visibility"
    } else {
        pass.setAttribute("type", "password")
        icon.textContent = "visibility"
    }
})
for (let input of inputlar) {
    input.addEventListener("focusin", function labelYerlestir() {
        let label = this.parentElement.children[0]
        label.style.fontSize = "13px"
        label.style.top = "2px"
    })
    input.addEventListener("focusout", function labelYerlestir() {
        if (input.value = " ") {
            let label = this.parentElement.children[0]
            label.style.fontSize = "16px"
            label.style.top = "15px"
        }
    })
}
