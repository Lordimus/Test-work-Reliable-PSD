jQuery(document).ready(function($){

// Slick
	$('.slick-slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear'
	});

// Mobile nav
	$('header .menu .mobile-nav').click(function(){
		$(this).toggleClass('active');
		$('header .menu .main').toggleClass('active');
	});

	$('header .menu ul li .plus').click(function(){
		$(this).toggleClass('active');
		$(this).closest('li').find('.sub-menu').toggleClass('active');
		if($(this).hasClass('active')){
			$(this).text('-');
		}else{
			$(this).text('+');
		}
	});
});