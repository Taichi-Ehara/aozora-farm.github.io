$(function() {
  $('#menuButton').click(function() {
    if ($('.icon').hasClass('close')) {
      $('.icon').removeClass('close');
      $('.bar').css('background-color', '#fff');
      $('.icon-text').css('color', '#fff');
      $('.icon-text').text('MENU');
      $('.hide-menu-wrapper').slideUp();
      $('.burger-msk').fadeOut();

    } else {
      $('.icon').addClass('close');
      $('.bar').css('background-color', '#241300');
      $('.icon-text').css('color', '#241300');
      $('.icon-text').text('CLOSE');
      $('.hide-menu-wrapper').slideDown();
      $('.burger-msk').fadeIn();
    }
  });

  $('header a, footer a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html, body').animate({
      'scrollTop' : position
    }, 1000, 'easeInOutCirc');
  });

  setTimeout(function() {
    $('.copy').fadeIn(2500);
  }, 500);

  $(window).scroll(function() {
    var scrollTopValue = $(document).scrollTop();
    var messageTop = $('.message').offset().top;

    if (scrollTopValue > messageTop) {
      $('.bar').css('background-color', '#241300');
      $('.icon-text').css('color', '#241300');
    } else {
      $('.bar').css('background-color', '#fff');
      $('.icon-text').css('color', '#fff');
    }
  })
});
