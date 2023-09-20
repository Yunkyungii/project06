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


    $('.main_menu .inner').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: 'unslick'
            }
        ]
    });

    $(window).on('resize', function () {
        $('.main_menu .inner').slick('resize');
    });

    $('.menu_list li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.menu_desc li').eq(idx).addClass('on').siblings().removeClass('on');

    });


    $('.menu_list li').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
    });

    // 반응형
    $('.mo_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.header .gnb').toggleClass('on');
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.sub').stop().slideUp();
            // $(this).parent().siblings().find('.submenu').slideUp();
        }

    });

})


