 $(document).ready(function() {
     if ($('.loader').hasClass('loading')) {
         setTimeout(function() {
             $('.loader').removeClass('loading');
         }, 3000);
     }
 })
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
     loop: true,
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
     scrollbar: {
         el: '.swiper-scrollbar',
         hide: false,
     },
     mousewheel: {
         releaseOnEdges: true
     }
 });



 //initialize inertiaScroll
 // $(".box").inertiaScroll({
 //     parent: $(".page-wrapper")
 // });

 var swiper = new Swiper('#projectsSwiper', {
     loop: true,
     slidesPerView: 2,
     spaceBetween: 50,
     centeredSlides: true,
     pagination: {
         el: '.swiper-pagination',
         clickable: true,
     },
 });
 //initialize wowjs
 var wow = new WOW({
     boxClass: 'wow',
     animateClass: 'animated',
     mobile: true,
     live: true,
     callback: afterReveal
 }).init();

 window.onload = function() {
     Particles.init({
         selector: '.particles',
         color: '#121A2E',
         shape: 'edge',
         connectParticles: true
     });
     Particles.init({
         selector: '.particles-footer',
         color: '#121A2E',
         connectParticles: true,
         maxParticles: 4,
         minDistance: 700,
         speed: 0.2,
         sizeVariations: 4
     });
 };

 var s = skrollr.init({
     easing: {
         WTF: Math.random,
         inverted: function(p) {
             return 1 - p;
         }
     },
     forceHeight: false,
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

 // Wrap every letter in a span
 $('.text-animate').each(function() {
     $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
 });

 // Wrap every letter or word
 function afterReveal(el) {
     $('.text-animate').each(function() {
         if ($('.text-animate').hasClass('animated')) {
             anime.timeline({ loop: false })
                 .add({
                     targets: '.text-animate .letter',
                     translateY: [-50, 0],
                     opacity: [0, 1],
                     easing: "easeInOutQuart",
                     duration: 400,
                     delay: function(el, i) {
                         return 10 * i;
                     }
                 });
         }
     });
 }
 $("#contactFormlink").on('click', function(event) {
     // Make sure this.hash has a value before overriding default behavior
     if (this.hash !== "") {
         // Prevent default anchor click behavior
         event.preventDefault();

         // Store hash
         var hash = this.hash;

         // Using jQuery's animate() method to add smooth page scroll
         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
         $('html, body').animate({
             scrollTop: $(hash).offset().top
         }, 800, function() {

             // Add hash (#) to URL when done scrolling (default click behavior)
             window.location.hash = hash;
         });
     } // End if
 });

 // var png = new Image();
 // png.onload = drawScene;
 // png.src = "../images/codepen.png";
 // var canvas = document.getElementById("scene");
 // var ctx = canvas.getContext("2d");

 // canvas.width = png.width;
 // canvas.height = png.height;

 // ctx.drawImage(png, 0, 0);
 // var data = ctx.getImageData(0, 0, png.width, png.height);
 // ctx.clearRect(0, 0, canvas.width, canvas.height);
 // var particles = [];
 // for (var y = 0, y2 = data.height; y < y2; y++) {
 //     for (var x = 0, x2 = data.width; x < x2; x++) {
 //         if (data.data[(x * 4 + y * 4 * data.width) + 3] > 128) {
 //             var particle = {
 //                 x: x,
 //                 y: y
 //             };
 //             particles.push(particle);
 //         }
 //     }
 // }