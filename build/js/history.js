$(document).ready(function () {
  $('.history__list').addClass('is-no-scrollbar');
  var speed = 0;
	var scroll = 0;
	var maxScroll = 0;
	var prevFrame = new Date().getTime();

	$(document).on('mousemove', '.history', function(e) {
		var $this = $(this);
		var $thisWidth = $this.width();
		var mouseX = e.clientX - $this.offset().left;
		var mousePercentage = 100 * mouseX / $thisWidth;
		speed = mousePercentage - 50;

    var widthInner = 0;

    $('.history__item').each(function() {
     widthInner += 1 * $(this).outerWidth(true);
    });

    if(widthInner > $thisWidth) {
      maxScroll = widthInner - $thisWidth;
    }
	});

	$(document).on('mouseleave', '.history', function() {
		speed = 0;
	});

	function updateScroll() {
		var cur_frame = new Date().getTime();
		var time_elapsed = cur_frame - prevFrame;
		prevFrame = cur_frame;
		if (speed !== 0) {
			scroll += speed * time_elapsed / 50;
			if (scroll < 0) scroll = 0;
			if (scroll > maxScroll) scroll = maxScroll;
			$('.history__list').css('left', -scroll);
		}
		window.requestAnimationFrame(updateScroll);
	}

  var scrollAreaObserver = new IntersectionObserver(function(entries) {
    const $entry = entries[0];

    if ($entry.isIntersecting) {
      speed = 1;
      window.requestAnimationFrame(updateScroll);
    } else {
      speed = 0;
    }
  });

	const $events = document.querySelector('.history');

	if ($events) {
    scrollAreaObserver.observe($events);
  }

	window.requestAnimationFrame(updateScroll);
});
