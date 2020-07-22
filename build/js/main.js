//функция навешивания класса на шапку
var resize_scroll = function(e) {
  var h = $(".header");
  if($(window).scrollTop() > h.height()) {
    h.addClass("scrolled");
  } else {
    h.removeClass("scrolled");
  }
};

tippy('.js-tippy-1', {
  allowHTML: true,
  theme: 'white',
  maxWidth: 275,
  placement: 'top-start',
  trigger: 'mouseenter click',
  zIndex: 1
});

tippy('.js-tippy-2', {
  allowHTML: true,
  theme: 'white',
  maxWidth: 345,
  placement: 'top',
  trigger: 'mouseenter',
  zIndex: 1
});

$(document).ready(function () {
  //запуск функции навешивания класса на шапку
  resize_scroll();

  //кнопка наверх
  var btn = $('#go-top');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('is-active');
    } else {
      btn.removeClass('is-active');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

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

  //плавный скролл к якорю при загрузке страницы
  var myHash = location.hash;
  //location.hash = '';
  if(myHash[1] != undefined) {
    $('html, body').animate({
      scrollTop: $(myHash).offset().top - 90
    }, 700);
  };

  //кастомный скролл
  $('.js-custom-scroll').each(function(index, element) {
    new SimpleBar(element, { autoHide: false })
  });
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

if($('body').width() > 1239){
  $(window).on('scroll', function() {
  	var st = $(window).scrollTop();
    $('.fade-up:not(.animate)').each(function() {
  		var $this = $(this);
  		if($this.offset().top + 250 < st + $(window).height()) {
  			$this.addClass('animate');
  		}
  	});
  });
}

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

//аккордион
$(document).on('click', '.js-accordion-toggler', function () {
  var _this = $(this);
  _this.next('.accordion__body').slideToggle('300', 'linear', function () {
    _this.toggleClass("is-open");
  });
});

//скролл по якорю
$(document).on('click', '.js-anchor-link', function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 90
  }, 500);
  return false;
});
