// jQuery for page scrolling feature
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

(function(){

  // resize helpers
  function onResize() {

    // auto resize header
    $('#homepage').height($(window).height());
  }

  // scroll helpers
  function onScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    $('body').toggleClass('scrolled', scrollTop > 0);

    true;
  }

  $(document).ready(function() {
    $(window).bind('resize', _.throttle(onResize, 100));
    onResize();

    $(window).bind('scroll', _.throttle(onScroll, 100));
    onScroll();
  });

})();
