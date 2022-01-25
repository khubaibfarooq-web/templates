

$(document).ready(function(){


    /*-----------------------------
             TOGGLE MENU ICON
     -----------------------------*/
	const navBar = $(".navbar");
	const menuIcon = $(".humburger");
	const menuIconClose = $(".humburger i");

	menuIcon.on('click' , function(e){


		e.preventDefault();
		navBar.toggleClass("open");
	let toggle =  menuIconClose.toggleClass("fa-times");

	if(toggle.hasClass("fa-times")){
		toggle.removeClass("fa-bars");
	}else{
		toggle.addClass("fa-bars");
	}

    
	});




    /*-----------------------------
                TAB-PANE
     -----------------------------*/
    $("#tab-btn-1").addClass("active-tab");
    $(document).find("div:not(#side-tab-1)[id^='side-tab-']").hide();

    $(".tabs-list").on("click", function () {
        var iconId = $(this).children().attr('id');
        var idIndex = iconId.slice(-1);
        $(this).children().addClass("active-tab");
        $("#side-tab-" + idIndex).fadeIn(1000);

        $(this).siblings().each(function () {
            var sibId = $(this).children().attr('id');
            var sibIdIndex = sibId.slice(-1);
            $(this).children("#tab-btn-" + sibIdIndex).removeClass("active-tab");
            $("#side-tab-" + sibIdIndex).hide();
        });

    });




    /*-----------------------------
             PARTNER-SLIDER
     -----------------------------*/
	 $(".slider-slides-wrapper").slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite:true,
                autoplay:true,
                speed:1000,
                arrows:true,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                ltr: true,
                responsive: [{

                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        infinite: true
                    }

                }, {

                    breakpoint: 666,
                    settings: {
                        slidesToShow: 1,
                        dots: false
                    }

                }, {

                    breakpoint: 300,
                    settings: "unslick" // destroys slick

                }]
            });



	




});