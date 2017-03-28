//to show and hide the images
$(function(){
    $('[data-filter]').click(function(){
        var hasClass = $(this).hasClass('active');
        if(!hasClass) {
            $('[data-filter]').removeClass('active');
            $(this).addClass('active');
            
            if($(this).attr('data-filter') == "all"){
                $('[data-cat]').show(1200);
            }
            else {
                var value = $(this).attr('data-filter');
                
                $('[data-cat]').each(function(){ // looping through                    
                    if($(this).attr('data-cat') != value)
                        $(this).hide(1000);
                    else
                        $(this).show(1200);
                })
            }
        }
    })

});


//to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


//to smoothly scroll the page
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        
    });
});
