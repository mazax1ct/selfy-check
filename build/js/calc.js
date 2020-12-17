$(document).on('keyup', '.js-calc-option', function () {
  if (Number($('#uk').val()) > 0 && Number($('#kch').val()) > 0 && Number($('#ai').val()) > 0 && Number($('#cp').val()) > 0) {
    console.log($('#uk').val(), $('#kch').val(), $('#ai').val(), $('#cp').val());
    $('.calc-options__button').attr('disabled', false);
    if (Number($('#uk').val()) > 0 && Number($('#kch').val()) > 0 && Number($('#ai').val()) > 0 && Number($('#cp').val()) > 0 && Number($('#tug').val()) > 0 && Number($('#he').val()) > 0) {
      $('.calc__button').attr('disabled', false);
    } else {
      $('.calc__button').attr('disabled', true);
    }
  } else {
    $('.calc-options__button').attr('disabled', true);
    if (Number($('#uk').val()) > 0 && Number($('#kch').val()) > 0 && Number($('#ai').val()) > 0 && Number($('#cp').val()) > 0 && Number($('#tug').val()) > 0 && Number($('#he').val()) > 0) {
      $('.calc__button').attr('disabled', false);
    } else {
      $('.calc__button').attr('disabled', true);
    }
  }
});

$(document).on('keyup', '.js-calc-required', function () {
  if (Number($('#uk').val()) > 0 && Number($('#kch').val()) > 0 && Number($('#ai').val()) > 0 && Number($('#cp').val()) > 0 && Number($('#tug').val()) > 0 && Number($('#he').val()) > 0) {
    $('.calc__button').attr('disabled', false);
  } else {
    $('.calc__button').attr('disabled', true);
  }
});

$(document).on('click', '.js-calc', function () {
  var he = $('#he').val(); //хлебные единицы
  var uk = $('#uk').val(); //углеводный коэффициент
  var tug = $('#tug').val(); //Текущий уровень глюкозы
  var cp = $('#cp').val(); //Целевой Показатель
  var kch = $('#kch').val(); //Коэффициент Чувствительности (фактор чувств. ФЧ)
  var ai = $('#ai').val(); //Активный Инсулин
  var doza = he*uk + ((tug-cp)/kch - ai);
  $('#doza').val(doza);
  return false;
});
