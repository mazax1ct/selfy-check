$(document).on('keypress', '.js-only-number', function (event) {
  event = event || window.event;
  if (event.charCode && event.charCode!=0 && event.charCode!=44 && (event.charCode < 48 || event.charCode > 57)) {
    return false;
  }
});

$(document).on('click', '.js-calc', function () {
  var uk = $('#uk').val(); //углеводный коэффициент
  var ugl = $('#ugl').val(); //количество углеводов в граммах



  var doza =
  $('#doza').val(doza);
  return false;
});
