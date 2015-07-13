$(document).ready(function(){
    
    
    
    
    $('#home').click(function(){
        $('#blackPage').fadeOut('fast');
        $('#aboutPage').fadeOut('fast');
        $('#storePage').fadeOut('fast');
        $('#contactPage').fadeOut('fast');
    });
    
    $('#store').click(function(){
        $('#blackPage').fadeIn('fast');
        $('#aboutPage').fadeOut('fast');
        $('#storePage').fadeIn('fast');
        $('#contactPage').fadeOut('fast');
    });
    
    $('#about').click(function(){
        $('#blackPage').fadeIn('fast');
        $('#storePage').fadeOut('fast');
        $('#aboutPage').fadeIn('fast');
        $('#contactPage').fadeOut('fast');
    });
    
    $('#contact').click(function(){
        $('#blackPage').fadeIn('fast');
        $('#contactPage').fadeIn('fast');
        $('#storePage').fadeOut('fast');
        $('#aboutPage').fadeOut('fast');
    });
    



    //configuration
    
    var animationSpeed = 777;
    var pause = 3000;
    var currentSlide = 1;
    
    //cache DOM
    var $slider = $('#shoe')
    var $slideContainer = $slider.find('ul');
    var $slides = $slideContainer.find('li');
    
    setInterval(function() {
        $slideContainer.animate({'margin-left': '-='+'100%'}, animationSpeed, function() {
            currentSlide++;
            if(currentSlide === $slides.length){
                currentSlide = 1;
                $slideContainer.css('margin-left', 0);
            }
        });
    }, pause);
    
    
    
    


    
    
    
});