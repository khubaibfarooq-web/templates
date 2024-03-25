$(document).ready(function(){

	/*FAQS-Accordian*/
	$('.accordion').click(function() {
			//e.preventDefault();
			let $this = $(this);

			if ($this.next().hasClass('show')) {
				$this.next().removeClass('show');
				$this.next().slideUp(350);
			} else {
				$this.parent().parent().find('.panel').removeClass('show');
				$this.parent().parent().find('.panel').slideUp(350);
				$this.next().toggleClass('show');
				$this.next().slideToggle(350);
			}
		});


	/*Dark-Mode-Toggler*/
	$(".trigger").click(function(){
		$(".service-title").toggleClass("white-text");
		$(".service-sub-title").toggleClass("white-text");
		$(".service-info").toggleClass("white-text");
		$(".btn-service").toggleClass("btn-dark");
		$(".bg-lightgrey").toggleClass("bg-dark");
		$('.bg-nav').toggleClass("bg-dark");
		$(".bg-gradient").toggleClass("bg-dark");
		$(".explore-card-bg").toggleClass("bg-dark");
		$(".mobily-pay-bg").toggleClass("bg-dark");
		$(".mobily-support-bg").toggleClass('bg-dark');
		$(".sec-pad").toggleClass('mb-0');
		$(".accordion").toggleClass('bg-dark-accord white-text')
		$("#footer").toggleClass('bg-dark');
		$(".trigger").toggleClass("active");
	});



});