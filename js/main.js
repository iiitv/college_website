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

  	 // $("#content").jPaginate();
  	 $('#announcement-list').paginate({itemsPerPage: 3});
  	 $('#news-list').paginate({itemsPerPage: 3});
});

