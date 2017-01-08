$(document).ready(function() {

    $(document).scroll(function() {
        var dHeight = $(this).height() - $(window).height();
        if (dHeight >= $(this).scrollTop()) {
            $('nav').css('background', 'rgba(1,16,24,' + $(this).scrollTop() / dHeight + ')');
        }
    });


    //// For overlay effects


    $('#projects li').on('click', function(event) {
        event.preventDefault();
        var $overlay = $('<div class="overlay"></div>');
        var $h3 = $(this).find('h3').text();
        var $p = $(this).find('p').text();
        var $demo = $(this).find('.preview').attr('href');
        var $source = $(this).find('.project').attr('href');

        //Set location of the image
        var $att = $(this).find('img').attr('src');
        //Add div with overlay class
        $('body').append($overlay);
        $('.overlay').append("<img class='overlay-img'/>", 
                             '<h3 class="h3"></h3>',
                             '<p class="p"></p>', 
                             '<a href="" class="demo"><button>Demo</button></a>',
                             '<a href="" class="source"><button>Source</button></a>',
                             '<a class="close" >X</a');
        //Preventing body to be scrollable
        $('html,body').css({
            'overflow': 'hidden',
            'margin': '0',
            'padding': '0'
        });

        // Add img tage into overlay class
        $('.overlay .h3').text($h3);
        $('.overlay .p').text($p);
        $('.overlay .demo').attr('href', $demo);
        $('.overlay .source').attr('href', $source);
        console.log($demo)

        // Take src of corrent img src and set it equal
        $('.overlay-img').attr('src', $att);
        // Adding close button
        $('.close').click(function() {
            $('html,body').css({
                'overflow': 'auto',
                'margin': '0',
                'padding': '0'
            });
            $('.overlay').remove();
        })
    });
    

    var $width = $( window ).width();

    // Nav Bar styling Dropdown menu
    $('i.fa.fa-bars').hover(function() {
        
        $('.nav-list').show().slideDown();

        $('.nav-list').on('click mouseleave', function(){
            $(this).hide();
        })
    });
    

    // About Page media styling
    $('.text-wrapper h3').click(function(){
        $(this).next().toggle(200);
        $('.toggle').click(function(){
            $('h3 .toggle').attr('class', '');
        });
    });

    $('.toggle').click(function(){
        $('h3 .toggle').attr('class', '');
    });

    
});