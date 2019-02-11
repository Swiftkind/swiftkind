$(document).ready(function() {


    var svcSwiper = new Swiper("#svcSwiper", {
        direction: "vertical",
        loop: false,
        //pagination: ".swiper-pagination",
        // grabCursor: true,
        speed: 1,
        // paginationClickable: true,
        parallax: true,
        // autoplay: false,
        spaceBetween: 300,
        slidesPerView: 1,
        mousewheelControl: 3,
        mousewheel: true,
        freeMode: true,
        touchMoveStopPropagation: false,
        iOSEdgeSwipeDetection: false,
        iOSEdgeSwipeThreshold: 30,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
        touchReleaseOnEdges: true,
        on: {
            reachEnd: function() {
                // svcSwiper.mousewheel.disable();
            }
        },
        breakpoints: {
            768: {
                autoplay: true,
                mousewheel:false,
                autoplay: {
                    delay:5000
                }
            }
        }
    });
    var projSwiper = new Swiper("#projectSwiper", {
        direction: "vertical",
        loop: false,
        //pagination: ".swiper-pagination",
        // grabCursor: true,
        speed: 1000,
        // paginationClickable: true,
        parallax: true,
        // autoplay: false,
        effect: "slide",
        mousewheelControl: 1,
        mousewheel: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        }
    });
    var teamSwiper = new Swiper("#teamSwiper1", {
        slidesPerView: 3,
        spaceBetween: 100,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    var teamSwiper = new Swiper("#teamSwiper2", {
        slidesPerView: 3,
        spaceBetween: 100,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    var teamSwiper = new Swiper("#testimonySwiper", {

    });


    //wow js init
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: afterReveal,
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();
    //adds animation to menu toggle

    $('.menuToggle').on('click', function() {
        $('.menuToggle').toggleClass('toggled');
        $('body').toggleClass('nav-open');
        if (!$('body').hasClass('nav-open')) {
            $('body').toggleClass('nav-closing');
            setTimeout(function() {
                $('body').toggleClass('nav-closing');
                new WOW().init();
            }, 500);
        }
    });

    //splittext animation

    var splitText = new SplitText('.split');
    var splitAnimate = anime.timeline({ loop: false })
        .add({
            targets: '.split div',
            translateY: [100, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1000,
            delay: function(el, i) {
                return 10 * i;
            },
            autoplay: false
        });

    var modalFadeIn = anime.timeline({ loop: false })
        .add({
            targets: $('.project-modal .m-el'),
            translateY: [100, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1000,
            delay: function(el, i) {
                return 10 * i;
            },
            autoplay: false
        });

    function afterReveal(el) {

        $('.split').each(function() {
            if ($('.split').hasClass('animated')) {
                splitAnimate.play;
            }
        });
    }

    $(window).resize(function() {
        if($(window).width()> 1024){
            $(".box").inertiaScroll({
            parent: $(".page-wrapper")
        });
        }
    })


    $('.project-modal .modal-content').on('click', function() {
        $('.project-modal').toggleClass('closing');
        setTimeout(function() {
            $('.project-modal').modal('hide')
            $('.project-modal').toggleClass('closing');
        }, 300);
    });
    

})