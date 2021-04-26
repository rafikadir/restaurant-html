jQuery(function($) {
	'use strict';

    //Sticky nav
    $(window).on('scroll', function() {
		if ($(this).scrollTop() > 50) {
			$('.main-menu').addClass('sticky');
		} else {
			$('.main-menu').removeClass('sticky');
		}
	});
	$('navbar-nav .nav-item .nav-link').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 30
        }, 1500);
        e.preventDefault();
    });
    $(document).on('click','.navbar-collapse.show',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });	
	$('.navbar-nav .nav-item .nav-link').click(function(){
        $('.navbar-nav .nav-item .nav-link').removeClass('active');
        $(this).addClass('active-menu');
    });

	//Owl Carousel
	$('.review-area').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items:1,
		dots:false
	})

	//Back Top
	$(window).scroll(function() {
		if ($(this).scrollTop()) {
			$('.back-top i').addClass('fade');
		} else {
			$('.back-top i').removeClass('fade');
		}
	});

	$(".back-top").click(function () {
		$("html, body").animate({scrollTop: 0}, 1500);
	 })

}(jQuery));