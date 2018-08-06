//intro swiper


var intro = new Swiper('.intro-wrapper .swiper-container', {
    autoplay: {
        delay: 3000,
    },

});


//products swipers

var projects = new Swiper('.projects .swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    autoplay: {
        delay: 10000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


//
var testimonies = new Swiper('.testimonies .swiper-container', {
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


var teamSwiper = new Swiper('.team-swiper ', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
    },
    mousewheel:{
        releaseOnEdges: true
    }
});



//initialize inertiaScroll
// $(".box").inertiaScroll({
//     parent: $(".page-wrapper")
// });


//initialize wowjs
new WOW().init();

// window.onload = function() {
//   Particles.init({
//     selector: '.particles',
//     color: '#ffffff',
//   });
// };

var s = skrollr.init({
    easing: {
            WTF: Math.random,
            inverted: function(p) {
                return 1-p;
            }
        }
});


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