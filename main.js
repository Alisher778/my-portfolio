$(document).ready(function(){

  $(document).scroll(function() {
    var dHeight = $(this).height()-$(window).height();
    if (dHeight >= $(this).scrollTop()) {
      $('nav').css('background', 'rgba(1,16,24,' + $(this).scrollTop() / dHeight + ')');
    }
  });
});