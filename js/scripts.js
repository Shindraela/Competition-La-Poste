(function () {

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

  $(document).ready(function () {
    $(window).bind('resize', _.throttle(onResize, 100));
    onResize();

    $(window).bind('scroll', _.throttle(onScroll, 100));
    onScroll();

    $(window).bind('scroll', function () {
      var distance = 500;
      if ($(window).scrollTop() > distance) {
        $('.header').addClass('scrolled');
      } else {
        $('.header').removeClass('scrolled');
      }
    });
  });
})();