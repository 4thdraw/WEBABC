$(document).ready(function () {

    let count = 0;

    setInterval(fadeani, 3000)

    function fadeani() { //선언적함수
        count++;
        count = count % $(".swiper-slide").length;
        // $(".swiper-slide").removeClass("on")
        $(".swiper-slide").eq(count).addClass("on").siblings().removeClass("on")
    }

})

