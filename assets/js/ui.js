var $winW, $winH, $isMobile;
$(function () {

    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });


    
    if ($('.top.swiper-container').length) {
        var swiper = new Swiper('.top.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            // autoplay: {
            //     delay: 5000,
            //     disableOnInteraction: false,
            // },
            // navigation: {
            //     nextEl: '.__top .swiper-button-next',
            //     prevEl: '.__top .swiper-button-prev',
            // },
            pagination: {
                el: '.top .swiper-pagination',
                clickable: true,
            },
        });
    }
    
    $('.qna_list .q').on('click',function(){
        $(this).toggleClass('on');
        $(this).next('.a').toggleClass('on');

    });

    $('#btnMobile').on('click',function(){
        $('.nav').addClass('on');
        $('#wrap').addClass('on');
    });

    $('#mClosed').on('click',function(){
        $('.nav').removeClass('on');
        $('#wrap').removeClass('on');
    });

    
});


    


