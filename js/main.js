$(document).ready(function() {
	$('.carousel').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
  		autoplaySpeed: 2000
  	});

  	 $('#announcement-list').paginate({itemsPerPage: 3});
  	 $('#news-list').paginate({itemsPerPage: 3});
  	 $('#events-list').paginate({itemsPerPage: 3});
});

jQuery(document).ready(function($) {
    "use strict";

    //Sticky Navigation
    if ($('nav').length) {
        // grab the initial top offset of the navigation
        var stickyNavTop = $('nav').offset().top;
        // our function that decides weather the navigation bar should have "fixed" css position or not.
        var stickyNav = function() {
            var scrollTop = $(window).scrollTop(); // our current vertical position from the top
            // if we've scrolled more than the navigation, change its position to fixed to stick to top,
            // otherwise change it back to relative
            if (scrollTop > stickyNavTop) {
                $('nav').addClass('cp_sticky');
            } else {
                $('nav').removeClass('cp_sticky');
            }
        };
        stickyNav();
        // and run it again every time you scroll
        $(window).scroll(function() {
            stickyNav();
        });
    }
});
