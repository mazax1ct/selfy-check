$(document).ready(function () {

});

//поиск
$(document).on('click', '.js-search', function () {
  $(this).closest('.header-search').toggleClass("is-active");
  $(this).toggleClass("no-active");
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
