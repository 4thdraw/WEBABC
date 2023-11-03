$(document).ready(function () {

    setInterval(function () {
        $(".swiper-wrapper").animate({ "marginTop": -300 }, 400, function () {
            $(".swiper-wrapper div:first-child").appendTo($(".swiper-wrapper"))
            $(".swiper-wrapper").css("marginTop", 0)
        })
    }, 3000)



})