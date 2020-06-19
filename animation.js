//show/hide

$('.button-show').on('click', function () {
  $('.image-1').show();
});

$('.button-hide').on('click', function () {
  $('.image-1').hide();
});

$('.button-toggle').on('click', function () {
  $('.image-1').toggle();
});

$('.button-style').on('click', function () {
  $('.image-1').animate({
    width:100,
    opacity:0.5
  } ,1000)
});
// slide

$('.button-slidedown').on('click', function () {
  $('.image-2').slideDown(200);
});

$('.button-slideup').on('click', function () {
  $('.image-2').slideUp(1000);
});

$('.button-slidetoggle').on('click', function () {
  $('.image-2').slideToggle();
});

// Fade

$('.button-fadein').on('click', function () {
  $('.image-3').fadeIn(1000 ,function () {
    console.log('fadein')
  });
});

$('.button-fadeout').on('click', function () {
  $('.image-3').fadeOut(1000, function () {
    console.log('fadeout')
  });
});

$('.button-fadetoggle').on('click', function () {
  $('.image-3').fadeToggle();
});
