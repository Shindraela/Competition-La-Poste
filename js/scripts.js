var content = document.querySelector('#hamburger-content');
var sidebarBody = document.querySelector('#hamburger-sidebar-body');
var button = document.querySelector('#hamburger-button');
var overlay = document.querySelector('#hamburger-overlay');
var activatedClass = 'hamburger-activated';

sidebarBody.innerHTML = content.innerHTML;			

button.addEventListener('click', function(e) {
	e.preventDefault();

	this.parentNode.classList.add(activatedClass);
});

button.addEventListener('keydown', function(e) {
	if (this.parentNode.classList.contains(activatedClass))
	{
		if (e.repeat === false && e.which === 27)
			this.parentNode.classList.remove(activatedClass);
	}
});

overlay.addEventListener('click', function(e) {
	e.preventDefault();

	this.parentNode.classList.remove(activatedClass);
});

// resize helpers
function onResize() {
  // auto resize header
  $('#homepage').height($(window).height());
}

// scroll helpers
function onScroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  true;
}

$(document).ready(function () {

  // $(window).bind('resize', _.throttle(onResize, 100));
  // onResize();

  // $(window).bind('scroll', _.throttle(onScroll, 100));
  // onScroll();

  $(window).bind('scroll', function () {
    var distance = 70;
    if ($(window).scrollTop() > distance) {
      $('.header').addClass('scrolled');
      $('.header a').addClass('textscrolled');
      $('.logo').addClass('logoscrolled');
    } else {
      $('.header').removeClass('scrolled');
      $('.header a').removeClass('textscrolled');
      $('.logo').removeClass('logoscrolled');
    }
  });
});