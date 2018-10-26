$(document).ready(function () {

	//initialize wow js
	new WOW().init();

	// navbar scroll top

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if( scroll > 100 ){
			$('.main-nav').addClass('nav-fixed-top');
		}
		else {
			$('.main-nav').removeClass('nav-fixed-top');
		}
	});

	$('#menu').on('click', function() {
		$('body').toggleClass('side-open');
	});


	
	$("a").on('click', function(event) {

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
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})
