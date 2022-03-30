
$(function() {
'use strict';

// sticky menu
var navOff = $('.navigation').offset().top;

$(window).scroll(function () {

  var scrolling = $(this).scrollTop();

  if (scrolling > navOff) {
    $('.navigation').addClass('manu-fix');
  } else {
    $('.navigation').removeClass('manu-fix');
  }
});

// back to top

$('.back-to-top').on('click',function(){
    $('html,body').animate({
        scrollTop:0,
    },500);
});

$(window).scroll(function(){
    var scrolling2 = $(this).scrollTop();
    if(scrolling2 > 150){
        $('.back-to-top').fadeIn();
    }else{
        $('.back-to-top').fadeOut();
    }
});

});