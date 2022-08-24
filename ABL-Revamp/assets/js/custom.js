 


 // Language Toggler

 $(".lang-toggler").click(function(){
 	var dir = $("body").attr("dir");
 	if(dir == "ltr")
 	{	
 		$("body").attr("dir", "rtl");
 		$(".top-right-menu").addClass('me-auto');
 		$(".bottom-right-menu").addClass('me-auto');
 		$(".top-right-menu").removeClass('ms-auto');
 		$(".bottom-right-menu").removeClass('ms-auto');
 	}else{
 		$("body").attr("dir", "ltr");
 		$(".top-right-menu").addClass('ms-auto');
 		$(".bottom-right-menu").addClass('ms-auto');
 		$(".top-right-menu").removeClass('me-auto');
 		$(".bottom-right-menu").removeClass('me-auto');
 	}

 });


 
 // Initializing The OWL carousel

 $(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});



 	// Owl Carousel
	$('#owl-carousel-1').owlCarousel({
		loop:true,
		margin:0,
		dots : false,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay : true,
		responsive:{
			0:{
				items:1
			},
			992:{
				items:1
			},
		}
	});