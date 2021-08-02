$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.nav').addClass("sticky");
        }
        else {
            $('.nav').removeClass("sticky");
        };
        if(this.scrollY > 500) {
            $('.scroll-up-button').addClass("show");
        }
        else {
            $('.scroll-up-button').removeClass("show");
        };
    });

    $('.scroll-up-button').click(function() {
        $('html').animate({scrollTop: 0});
    });
    
    $('.menu-button').click(function(){
        $('.nav .menu').toggleClass("active");
        $('.menu-button i').toggleClass("button-active");
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTime: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});