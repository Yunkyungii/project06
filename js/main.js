$(function () {
    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
    });


    $('.menu_list li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.menu_desc li').eq(idx).addClass('on').siblings().removeClass('on');
    });
})