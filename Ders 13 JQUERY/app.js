//! Javascript
// document.getElementById("btn").onclick = function () {
//     alert("Jquery çalışıyor")
// }

//!jquery javascript

// $("#btn").click(function () {
//     alert("Jquery çalışıyor")

// })


//! Click
//! kare'ye tıklandığında p etiketinde kare ye tıklandı, daireye tıklandığında p'de daire yazsın
// $("#kare").click(function () {
//     $("p").html("Kareye tıklandı")
// });

// $(".daire").click(function () {
//     $("p").html("Daireye tıklandı")
// });
//! Hover
// $("#kare").hover(function () {
//     $("p").html("Kareye geldiniz")
// });

// $(".daire").hover(function () {
//     $("p").html("Daireye geldiniz")
// });
//! Css işlemleri
//? tekli css işlemleri

// $("#kare").click(function () {
//     $("#kare").css("background-color", "blue")
//     $("#kare").css("border-radius", "50%")
// })
// $(".daire").click(function () {
//     $(".daire").css("background-color", "red")
//     $(".daire").css("border-radius", "0")
// })
//? Çoklu css İşlemleri
// $("#kare").click(function () {
//     $("#kare").css({
//         "backgroun-color": "red",
//         "width": "300px",
//         "height": "300px",
//         "border-radius": "50%",
//         "transition": "2s"
//     })
// })
//? 2. Yöntemi
// $("#kare").click(function () {
//     $("#kare").css({
//         backgrounColor: "red",
//         width: "300px",
//         "height": "300px",
//         "border-radius": "50%",
//         "transition": "2s"
//     })
// })
//!  butona tıklandıgında secilen p etiketini secme ve işlem uygulama

// $("#btn").click(function () {
//     $(".bir p:first").html("Neos Yazılım").css({
//         color: "red"
//     })
// })

//!Etikete tıklandığında etiketi kaybeden fonksiyonu yaz
// $(document).ready(function () {
//     $(".text").click(function () {
//         $(this).hide()
//     })
// })
//! (this).css = iki tane paragraf olacak tıklanılanın rengi kırmızı olacak
// $(document).ready(function () {
//     $("p").click(function () {
//         $(this).css({
//             color: "red"
//         })
//     })
// })
//! Attribute seçimi

// $("div").click(function () {
//     alert("Bu divin id ismi  = " + $(this).attr("id"))
// })
// $("div").click(function () {
//     alert("Bu divin class ismi  = " + $(this).attr("class"))

// })
//!  butona tıklandıgında resmi göstersin tıklandıgında gizlesin

// $("#btn").click(function () {
//     $("img").toggle(5000)
// })

//!  butona tıklandıgında resmi göstersin tıklandıgında gizlesin (fade toggle)
// $("#btn").click(function () {
//     $("img").fadeToggle(5000)
// })
//!  butona tıklandıgında daireyi göstersin tıklandıgında gizlesin (fadeOut - fadeIn)

// $("#btn1").click(function () {
//     $(".daire").fadeOut()
// })

// $("#btn2").click(function () {
//     $(".daire").fadeIn()
// })
//!  Listeye Eleman ekleme 

$("#btn").click(function () {
    $("ol").append($("<li>Liste Elemanı</li>"))
})

