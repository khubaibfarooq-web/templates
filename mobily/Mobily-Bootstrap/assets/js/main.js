

$(document).ready(function () {

	/*-------------------------
	 On scroll shrinking navbar
	--------------------------*/
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$(".sub-header").addClass('smooth-nav');
		} else {
			$(".sub-header").removeClass('smooth-nav');
		}
	});


	/*-------------------------
	 Toggle the menu bar icon
	--------------------------*/
	let menuOpen = false;
	$(".navbar-toggler").on("click", function () {
		if (!menuOpen) {
			$(".navbar-toggler-icon i").addClass("fa-times");
			$(".navbar-toggler-icon i").removeClass("fa-bars");
			menuOpen = true;
		} else {
			$(".navbar-toggler-icon i").addClass("fa-bars");
			$(".navbar-toggler-icon i").removeClass("fa-times");
			menuOpen = false;
		}

	})


	/*----------------------
	 Compare cards carousel
	------------------------*/
	$(".owl-carousel").owlCarousel({
		center: false,
		items: 3,
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 3,
				nav: false
			},
			600: {
				items: 3,
				nav: false
			},
			1000: {
				items: 3,
				nav: false,
				loop: false
			}
		}
	});










});


//Initalizing Wow-Animaton-Plugin
new WOW().init();

