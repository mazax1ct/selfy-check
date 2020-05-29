//функция навешивания класса на шапку
var resize_scroll = function(e) {
  var h = $(".header");
  if($(window).scrollTop() > h.height()) {
    h.addClass("scrolled");
  } else {
    h.removeClass("scrolled");
  }
};

$(document).ready(function () {
  //запуск функции навешивания класса на шапку
  resize_scroll();

  //слайдер главного баннера
  if($('.js-page-slider').length) {
    $('.js-page-slider').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      mobileFirst: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false
    });
  }
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//поиск
$(document).on('click', '.js-search', function () {
  $(this).closest('.header-search').toggleClass("is-active");
  $(this).toggleClass("no-active");
  $(this).closest('.header-search').find('.header-search__input').focus();
  if($(this).closest('.header-search').find('.header-search__input').val() == '') {
    return false;
  }
});

$(document).on('keyup', '.header-search__input', function () {
  if($(this).val() !== '') {
    $(this).closest('.header-search').find('.header-search__submit').removeClass("no-active");
  } else {
    $(this).closest('.header-search').find('.header-search__submit').addClass("no-active");
  }
});

//главное меню
var targetElement = $('.main-menu');

$(document).on('click', '.js-menu-toggler', function () {
  $(this).toggleClass("is-active");
  $('.main-menu').toggleClass('is-open');
  if($(this).hasClass('is-active')) {
    bodyScrollLock.disableBodyScroll(targetElement);
  } else {
    bodyScrollLock.enableBodyScroll(targetElement);
  }
});

//3-d блоки
$(".js-block-3d").hover(function() {
  var img = $(this).find('img');
  var src = img.attr('src');
  img.attr('src', img.data("img"));
  img.data("img", src);
});
