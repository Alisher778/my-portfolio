$(document).ready(function () {

  $(document).scroll(function () {
    var dHeight = $(this).height()-$(window).height();
    if (dHeight >= $(this).scrollTop()) {
      $('nav').css('background', 'rgba(1,16,24,' + $(this).scrollTop() / dHeight + ')');
    }
  });


//// For overlay effects
  
  
  $('#projects img').on('click', function (event) {
    event.preventDefault();
    var $overlay = $('<div class="overlay"></div>');
  
    //Set location of the image
      var $att = $(this).attr('src');
    //Add div with overlay class
      $('body').append($overlay);
      $('.overlay').append("<img class='overlay-img'/>",'<p class="source"></p>','<a class="close" >X</a');
    //Preventing body to be scrollable
      $('html,body').css({'overflow':'hidden', 'margin':'0', 'padding': '0'});
  
    // Add img tage into overlay class
    $('.overlay .source').text('');

  
    // Take src of corrent img src and set it equal
    $('.overlay-img').attr('src', $att);
    // Adding close button
    $('.close').click(function(){
      $('html,body').css({'overflow':'auto', 'margin':'0', 'padding': '0'});
      $('.overlay').remove();
    })
  });   
  
});