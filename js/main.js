$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on')
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.btn_circle').addClass('on')
            : $('.btn_circle').removeClass('on')
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._se_').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on')
            }
            else {
                $(this).removeClass('on')
            };

        })
    })


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


    $('.menu_list li').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
    })
})