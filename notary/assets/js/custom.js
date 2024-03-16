$(document).ready(function(){


 const mainLogo = $('.main-logo img'); 
    function detectWidth() {
        var width = $(window).width();
        if (width < 768) {
            mainLogo.attr('src', 'assets/img/logo-sm.svg');
            console.log('logo sm');
        } else {
            mainLogo.attr('src', 'assets/img/logo-lg.svg');
            console.log('logo lg');
        }
    }
    detectWidth();
    $(window).resize(detectWidth);

  
});// Document-Ready