$(document).ready(function(){
	
	if($(window).width() < 768){
        setTimeout(function(){
            $('.app-download-popup').fadeIn(300);
        }, 2000);
        $(window).bind('mousewheel', function(event) {
            if (event.originalEvent.wheelDelta >= 0) {
                $('.global-header').css('top','0px');
            }
            else {
                $('.global-header').css('top','-80px');
            }
        });
    }
    
    $('.app-download-popup .close').click(function(){
        $('.app-download-popup').fadeOut(300);
    });
    
});

$(window).on('load', function () {
    
    $('.warp-loading').fadeOut();
    
});