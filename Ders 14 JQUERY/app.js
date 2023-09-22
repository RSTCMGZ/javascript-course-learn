//! Animation add

// $(".kare").click(function () {
//     $(".kare").animate({
//         width: "400px",
//         height: "400px",
//         margin: "20px"
//     }, 2000, function () {
//         $(".kare").animate({
//             height: "150px",
//             width: "150px",
//             margin: "0"
//         }, 2000)
//     })
// })

//! Form Örneği
// $("#gonder").click(function () {
//     if ($("#isim").val() == "") {
//         $("#isim").attr("placeholder", "isim boş bırakılamaz")
//     }
//     if ($("#email").val() == "") {
//         $("#email").attr("placeholder", "email boş bırakılamaz")
//     }
//     if ($("#sifre").val() == "") {
//         $("#sifre").attr("placeholder", "sifre boş bırakılamaz")
//     }
//     if ($("#isim2").val() == "") {
//         $("#isim2").attr("placeholder", " Şifreyi onaylayınız")
//     }
// })

// function isEmail(email) {

// }

//! Yeni Örnek
$("#renk").keyup(function () {
    renk = $("#renk").val();
    $("div").css("background-color", renk)
})
$("#genislik").keyup(function () {
    genislik = $("#genislik").val();
    $("div").animate({ width: genislik + "px" })
})
$("#yukseklık").keyup(function () {
    yukseklık = $("#yukseklık").val();
    $("div").animate({ height: yukseklık + "px" })
})
