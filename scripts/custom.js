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
		$('[data-flipper]').addClass('selected');
	});
});