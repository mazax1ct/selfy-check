//яндекс карты
var myMap;
var locations = [
  [59.917222, 30.521996, '<p>Аптека "Фармакор"</p> <p>Санкт-Петербург, Лиговский проспект, 33-35</p> <p>8 (812) 333-55-99</p> <p><a href="http://www.aptekapharmacor.ru" target="_blank">http://www.aptekapharmacor.ru</a></p>'],
  [60.014356, 30.452735, '<p>Аптека "Фармакор"</p> <p>Санкт-Петербург, Лиговский проспект, 33-35</p> <p>8 (812) 333-55-99</p> <p><a href="http://www.aptekapharmacor.ru" target="_blank">http://www.aptekapharmacor.ru</a></p>'],
  [60.065795, 30.294255, '<p>Аптека "Фармакор"</p> <p>Санкт-Петербург, Лиговский проспект, 33-35</p> <p>8 (812) 333-55-99</p> <p><a href="http://www.aptekapharmacor.ru" target="_blank">http://www.aptekapharmacor.ru</a></p>'],
  [59.863956, 30.219308, '<p>Аптека "Фармакор"</p> <p>Санкт-Петербург, Лиговский проспект, 33-35</p> <p>8 (812) 333-55-99</p> <p><a href="http://www.aptekapharmacor.ru" target="_blank">http://www.aptekapharmacor.ru</a></p>'],
  [59.907677, 30.345423, '<p>Аптека "Фармакор"</p> <p>Санкт-Петербург, Лиговский проспект, 33-35</p> <p>8 (812) 333-55-99</p> <p><a href="http://www.aptekapharmacor.ru" target="_blank">http://www.aptekapharmacor.ru</a></p>'],
  [59.818816, 30.312005, '<p>Аптека "Фармакор"</p> <p>Санкт-Петербург, Лиговский проспект, 33-35</p> <p>8 (812) 333-55-99</p> <p><a href="http://www.aptekapharmacor.ru" target="_blank">http://www.aptekapharmacor.ru</a></p>']
];

setTimeout(function() {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=cba047df-856c-4d12-a13e-85e5ff327c48&lang=ru_RU&onload=init';
  document.getElementById('map').appendChild(elem);
}, 2000);

function init() {
  myMap = new ymaps.Map('map', {
    center: [59.957262, 29.705429],
    zoom: 9
  }, {
    searchControlProvider: 'yandex#search'
  });

  myMap.behaviors.disable('scrollZoom');

  var iconLayout = 'default#image';
  var iconImageHref = 'images/icons/map-pin.svg';
  var iconImageSize = [18, 18];
  var iconImageOffset = [-9, -9];

  var i, placemark, addressClass, address;

  for (i = 0; i < locations.length; i++) {
    placemark = new ymaps.Placemark([locations[i][0], locations[i][1]], {
      balloonContent: locations[i][2],
      id: locations[i][3]
    }, {
      iconLayout: iconLayout,
      iconImageHref: iconImageHref,
      iconImageSize: iconImageSize,
      iconImageOffset: iconImageOffset
    });

    myMap.geoObjects.add(placemark);
  }

  myMap.setBounds(myMap.geoObjects.getBounds(), {
    checkZoomRange: true,
    zoomMargin: 35
  });

  var body = document.querySelector('body');
  if (body.offsetWidth < 768) {
    myMap.behaviors.disable('drag');
    myMap.behaviors.enable('MultiTouch');
  }
}
