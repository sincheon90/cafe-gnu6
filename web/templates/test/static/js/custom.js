document.addEventListener("DOMContentLoaded", function () {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbar = document.querySelector(".navsquare");
  var navb = document.querySelector("nav");
  var nava = document.querySelectorAll(".navbutton");
  var navbarHeight = navb.offsetHeight;
  window.addEventListener("scroll", function () {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 50);

  function hasScrolled() {
    var st = window.scrollY || document.documentElement.scrollTop;

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      navbar.classList.add("expanded");
      navbar.classList.remove("shrink");
      navb.classList.add("text-black");
      navb.classList.remove("text-white");
      nava.forEach(function (button) {
        button.classList.add("text-black");
        button.classList.remove("text-white");
      });
    } else {
      // Scroll Up
      if (st + window.innerHeight < Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) && window.scrollY < 20) {
        navbar.classList.add("shrink");
        navbar.classList.remove("expanded");
        navb.classList.add("text-white");
        navb.classList.remove("text-black");
        nava.forEach(function (button) {
          button.classList.add("text-white");
          button.classList.remove("text-black");
        });
      }
    }

    lastScrollTop = st;
  }
});
