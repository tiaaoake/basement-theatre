$(document).ready(function() {
	// CUSTOM
	var $logo = $("a.header-brand");
	$(window).scroll(function () {
	    var e = $(this).scrollTop();
	    if (e > 90) {
	       $logo.addClass('scroll-shrink');
	    } else {
	       $logo.removeClass('scroll-shrink');
	    }
	});

	$('[data-flip]').on('click', function() {
		$(this).parents('[data-flipper]').addClass('active');
	});

	$('[data-flip-back]').on('click', function() {
		$(this).parents('[data-flipper]').removeClass('active');
	});

	$('[data-toggle-mobile-nav]').on('click', function() {
		$('[data-mobile-nav]').toggleClass('active');
	});
});