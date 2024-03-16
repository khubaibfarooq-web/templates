
    /*-----------------------------
            TOGGLE MENU ICON
     -----------------------------*/
    const body = $("body");
	const navBar = $(".side-bar");
	const menuIcon = $(".humburger");
	const menuIconClose = $(".humburger i");
	const bodyOverlay = $(".overlay");

	menuIcon.on('click' , function(e){


		e.preventDefault();
		navBar.toggleClass("open-side-bar");
        
	let toggle =  menuIconClose.toggleClass("fa-times");

	// if(toggle.hasClass("fa-times")){
	// 	toggle.removeClass("fa-bars");
	// }else{
	// 	toggle.addClass("fa-bars");
	// }
	body.toggleClass("body-overflow");
	bodyOverlay.toggleClass("hidden");

	console.log("sdasdsa");

    
	});





	/*-----------------------------
           DARK-MODE-TOGGLER
    -----------------------------*/
    $(".toggler-btn").click(function(){
    	$(".notification-bar").toggleClass("bg-noti-bar");
    	$(".side-bar-wrapper").toggleClass("dark-side-bar-wrapper");
    	$(".user-bio").toggleClass("dark-user-bio");
    	$(".side-links ul li").toggleClass("dark-side-links");
    	$(".nav-icon").toggleClass("dark-nav-icon");
    	$(".nav-text").toggleClass("dark-nav-text");
    	$(".balance-info").toggleClass("dark-balance-info");
    	$(".section-bg-wrapper-grey").toggleClass("dark-section-bg-wrapper-grey");
    	$(".user-balance h1").toggleClass("dark-user-balance");
    	$(".users-offers-item").toggleClass("dark-users-offers-item");
    	$(".user-services").toggleClass("dark-user-services");
    	$(".hot-offers").toggleClass("dark-hot-offers");
    	$(".user-service-heading").toggleClass("dark-user-service-heading");
        $(".offer-detail-active-wrapper").toggleClass("dark-offer-detail-active-wrapper")
        $(".pack-name").toggleClass("dark-pack-name");
        $(".pack-details li ").toggleClass("dark-pack-details");
        $(".hot-offer-heading").toggleClass("dark-hot-offer-heading");
        $(".view-all-offers").toggleClass("dark-view-all-offers");
        $('.app-footer').toggleClass("dark-app-footer");
        $(".footer-nav-text").toggleClass("dark-footer-nav-text");
        $(".footer-nav-text span").toggleClass("dark-footer-nav-text-span");
        $(".offers-count").toggleClass("dark-offers-count")
        $(".offers-item-info sub").toggleClass("dark-offers-count-info")
        $(".bal-rech").toggleClass("dark-text");
        $(".bal-loan").toggleClass("dark-text");

    });

    