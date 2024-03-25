





// Active Page
$(".top-left-menu nav ul li a").click(function (e) {
	e.preventDefault();
	$('.top-left-menu nav ul li a').removeClass("active-menu-item");
	$(this).addClass("active-menu-item");

});




// Darkmode Switcher
$(".dark-mode-switcher").click(function () {
	var dataTheme = $("html").attr("data-theme");
	var themeClass = $("html");
	if (dataTheme == "light") {
		$("html").attr("data-theme", "dark");
		$(".dark-mode-toggler-img").attr("src", "assets/img/svgs/dark-switch-icon.svg");
	} else {
		$("html").attr("data-theme", "light");
		$(".dark-mode-toggler-img").attr("src", "assets/img/svgs/day.svg");
	}
	if(themeClass.hasClass("theme-light")){
		themeClass.removeClass("theme-light");
		themeClass.addClass("theme-dark");
	}else{
		themeClass.removeClass("theme-dark");
		themeClass.addClass("theme-light");
	}
});




// Language Toggler
$(".lang-toggler").click(function () {
	var dir = $("body").attr("dir");
	if (dir == "ltr") {
		$("body").attr("dir", "rtl");
		$(".top-right-menu").addClass('me-auto');
		$(".bottom-right-menu").addClass('me-auto');
		$(".top-right-menu").removeClass('ms-auto');
		$(".bottom-right-menu").removeClass('ms-auto');
	} else {
		$("body").attr("dir", "ltr");
		$(".top-right-menu").addClass('ms-auto');
		$(".bottom-right-menu").addClass('ms-auto');
		$(".top-right-menu").removeClass('me-auto');
		$(".bottom-right-menu").removeClass('me-auto');

	}

});



// Rotating btn-arrows
$(".nav-btn-toggler").click(function (e) {
	e.preventDefault();
	$(this).find(".fa-arrow-down").toggleClass('active-arrow');
});


// Bento-menu Toggling
$(".vertical-menu-box-toggler").on("click", function () {
	$(".vertical-menu-box").toggleClass("active-vertical-menu-box");
	$(".vertical-menu-sub-box").removeClass("active-vertical-menu-sub-box");
})






// Bento menu rotating arrows and toggling sub-bento-menu-box
$(".v-box-toggler").click(function (e) {
	e.preventDefault();
	$(this).find(".fa-arrow-down").toggleClass('active-arrow');
	$(".vertical-menu-sub-box").toggleClass("active-vertical-menu-sub-box");
});






// Initializing The OWL carousel
$(document).ready(function () {
	$(".owl-carousel").owlCarousel();
});



// HOME-PAGE-SLIDER
$('#owl-carousel-1').owlCarousel({
	loop: true,
	margin: 0,
	dots: true,
	nav: false,
	autoplay: false,
	rt: true,
	smartSpeed: 1800,
	animateIn: 'fadeIn',
	animateOut: 'fadeOut',
	responsive: {
		0: {
			items: 1
		},
		992: {
			items: 1
		},
	}
});


$('#owl-carousel-2').owlCarousel({
	loop: true,
	margin: 10,
	dots: false,
	nav: true,
	navText: ['<i class="fa fa-angle-left"> </i>', '<i class="fa fa-angle-right"> </i>'],
	autoplay: true,
	smartSpeed: 1600,
	responsive: {
		0: {
			items: 3,
				nav:false,
			dots:true
		},
		992: {
			items: 6
		},
	}
});


$('#owl-carousel-3').owlCarousel({
	loop: false,
	margin: 10,
	dots: false,
	nav: true,
	navText: ['<i class="fa fa-angle-left"> </i>', '<i class="fa fa-angle-right"> </i>'],
	autoplay: false,
	smartSpeed: 1600,
	responsive: {
		0: {
			items: 1,
				nav:false,
			dots:true
		},
		992: {
			items: 3
		},
	}
});


$('#owl-carousel-4').owlCarousel({
	loop: false,
	margin: 10,
	dots: false,
	nav: true,
	navText: ['<i class="fa fa-angle-left"> </i>', '<i class="fa fa-angle-right"> </i>'],
	autoplay: false,
	smartSpeed: 1600,
	responsive: {
		0: {
			items: 1,
				nav:false,
			dots:true
		},
		992: {
			items: 3
		},
	}
});


$('#owl-carousel-5').owlCarousel({
	loop: false,
	margin: 10,
	dots: false,
	nav: true,
	navText: ['<i class="fa fa-angle-left"> </i>', '<i class="fa fa-angle-right"> </i>'],
	autoplay: false,
	smartSpeed: 1600,
	responsive: {
		0: {
			items: 1,
			nav:false,
			dots:true
		},
		992: {
			items: 3
		},
	}
});


// DIGITAL-BANKING-SLIDER
$('#owl-carousel-6').owlCarousel({
	loop: true,
	margin: 0,
	dots: true,
	nav: false,
	autoplay:false,
	rt: true,
	smartSpeed: 1800,
	animateIn: 'fadeIn',
	animateOut: 'fadeOut',
	responsive: {
		0: {
			items: 1
		},
		992: {
			items: 1
		},
	}
})


$('#owl-carousel-7').owlCarousel({
	loop: false,
	margin: 10,
	dots: false,
	nav: true,
	navText: ['<i class="fa fa-angle-left"> </i>', '<i class="fa fa-angle-right"> </i>'],
	autoplay: false,
	smartSpeed: 1600,
	rt:true,
	responsive: {
		0: {
			items: 1,
				nav:false,
			dots:true
		},
		992: {
			items: 3,

		},
	}
});





// PRIMARY-TAB-PANE-SLIDER
$('.primary-tab-pane').owlCarousel({
	loop: false,
	margin: 0,
	dots: false,
	nav: true,
	navText: ['<i class="fa fa-angle-left"> </i>', '<i class="fa fa-angle-right"> </i>'],
	autoplay: false,
	smartSpeed: 1600,
	rt:true,
	responsive: {
		0: {
			items: 1,
				nav:false,
			dots:false,
			autoWidth:true
		},
		767: {
			items: 3,
				nav:true,
			dots:false,
		
		},
		992: {
			items: 5,

		},
	}

});

// PRIMARY-TAB-PANE-SLIDER FOR ACTIVE CLASS
var owlBtn =  $(".owl-item button");

$(".owl-item button").click(function(){
owlBtn.removeClass('active');
$(this).addClass('active');
});



// RANGE-SLIDER CALCULATOR
var sliderAmount = document.getElementById("sliding-amount");
var sliderTenure = document.getElementById("sliding-years"); 

var yearsOutput = document.getElementById("years-value"); 
var amountOutput = document.getElementById("amount-value");

var amountSlideValue = document.getElementById("amount-tool-value");
var yearSlideValue = document.getElementById("year-tool-value");


amountOutput.innerHTML = sliderAmount.value;
// amountOutput.innerHTML = `Rs ${sliderAmount.value}`;
yearsOutput.innerHTML = sliderTenure.value;


sliderAmount.oninput = function(){
	let value = sliderAmount.value;
	// amountOutput.innerHTML = `Rs ${this.value}`;
		amountOutput.innerHTML = this.value;
	amountSlideValue.style.left = (value / 3000000) * 100 + "%";
}

sliderTenure.oninput = function(){
	yearsOutput.innerHTML = this.value;
}

	sliderAmount.addEventListener("mousemove", function(){
	var x = (sliderAmount.value/3000000)*100;
	var color = 'linear-gradient(90deg, rgb(105 105 105)' + x + '%, rgb(232 232 232)' + x + '%)';
	sliderAmount.style.background = color;
})

	sliderTenure.addEventListener("mousemove", function(){
	var x = sliderTenure.value;
	var color = 'linear-gradient(90deg, rgb(105 105 105)' + x + '%, rgb(232 232 232)' + x + '%)';
	sliderTenure.style.background = color;
})



