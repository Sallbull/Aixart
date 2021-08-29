var $winW, $winH, $isMobile;
$(function () {

    chkBrowserSize();

    $(window).resize(function () {
        chkBrowserSize();
    });
    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });
    $('nav li').off('click').on('click', function () {
        let $headerHeight = $('.header').height();
        let _target = $(this).attr('rel');
        let moveTop = $('#' + _target).offset().top - $headerHeight;
        
        $(this).addClass('on').siblings().removeClass('on');

        if ($isMobile) {
            
            moveTop = $('#' + _target).offset().top - $headerHeight;
            // $('body,html').scrollTop(moveTop);
            $('.nav').removeClass('on');
            $('#wrap').removeClass('on');
        }
        $('body,html').animate({
            scrollTop: moveTop  //탑 설정 클수록 덜올라간다
        }, 1000, 'easeInOutExpo');  // 탑 이동 스크롤 속도를 조절할 수 있다.
        return false;
    });


    
    if ($('.top.swiper-container').length) {
        var swiper = new Swiper('.top.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
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
        // $('#wrap').addClass('on');
    });

    $('#mClosed').on('click',function(){
        $('.nav').removeClass('on');
        $('#wrap').removeClass('on');
    });

    
});


function chkBrowserSize() {
    $winW = $(window).width();
    $winH = $(window).height();

    if ($winW < 1200) {
        $isMobile = true;
    } else {
        $isMobile = false;
    }
}    


