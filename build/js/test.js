$(document).on('click', '.js-test-next', function () {
  $('.test-step.active').slideUp(300, function () {
    setTimeout(function () {
      $('.test-step.active').next('.test-step').slideDown(300, function () {
        $('.test-step.active').next('.test-step').addClass('active').prev('.test-step').removeClass('active');
      });
      var offTop = $('.page-banner').offset().top + $('.page-banner').height() - $('.header').height();
      $('html, body').animate({scrollTop:offTop}, '300');
    }, 300);
  });
  if($(this).hasClass('js-test-finish')) {
    $('.test-note').fadeOut();
    var cnt = $('.test input[type="radio"]').length;
    var cnt_1 = 0;
    var cnt_2 = 0;
    for(var i = 0; i < cnt; i++) {
      if($('.test input[type="radio"]:checked:eq("'+ i +'")').attr('value') == 1) {
        cnt_1++;
      }

      if($('.test input[type="radio"]:checked:eq("'+ i +'")').attr('value') == 2) {
        cnt_2++;
      }
    }

    if(cnt_1 > cnt_2) {
      $('.test-result[data-id="1"]').fadeIn();
    } else if (cnt_1 == cnt_2){
      alert('бери оба');
    } else {
      $('.test-result[data-id="2"]').fadeIn();
    }
  } else {
    $('.test-note').fadeIn();
  }
  return false;
});
