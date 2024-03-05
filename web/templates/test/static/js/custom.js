document.addEventListener("DOMContentLoaded", function () {
  var didScroll;
  var lastScrollTop = 0;
  var over = false;
  var delta = 5;
  var navbar = document.querySelector("nav");
  var navbarSquare = document.querySelector(".navsquare"); // 상단바 네모
  var navbarText = document.querySelectorAll(".navbutton"); // 상단텍스트
  var navbarSquraeSub = document.querySelector(".navsquare-sub") // 서브메뉴 네모
  var navbarTextSub = document.querySelectorAll(".navsubbutton") // 서브텍스트

  var navbarHeight = 2;

  hasScrolled();

  window.addEventListener("scroll", function () {
    didScroll = true;
  });

  navbar.addEventListener("mouseover", function(){
    mouseOverNav();
    over = true;
  })

  navbar.addEventListener("mouseout",function(){
    mouseOutNav();
    over = false;
  })

  function mouseOutNav() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      subNavUp();
      var st = window.scrollY || document.documentElement.scrollTop;
      if (st + window.innerHeight < Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) && window.scrollY < 20) {
        navUp();
        navUpColorChange();
      }
      navSubUpColorChange();
    }
  }

  function mouseOverNav() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      subNavDown();
      navDown();
      navDownColorChange();
      navSubDownColorChange()
    }
  }

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 50);
  function navUp() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      navbarSquare.classList.add("shrink");
      navbarSquare.classList.remove("expanded");
    }

  }
  function navDown() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      navbarSquare.classList.add("expanded");
      navbarSquare.classList.remove("shrink");
    }
  }
  function navUpColorChange() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      navbarText.forEach(function (button) {
        button.classList.add("text-white");
        button.classList.remove("text-menu");
      });
    }
  }
  function navDownColorChange() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      navbarText.forEach(function (button) {
        button.classList.add("text-menu");
        button.classList.remove("text-white");
      });
    }
  }
  function subNavUp() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      navbarSquraeSub.classList.remove("expanded");
      navbarSquraeSub.classList.add("shrink");
    }
  }
  function subNavDown() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      navbarSquraeSub.classList.add("expanded");
      navbarSquraeSub.classList.remove("shrink");
    }
  }
  function navSubUpColorChange() {


  }
  function navSubDownColorChange() {

  }

  function hasScrolled() {
    var st = window.scrollY || document.documentElement.scrollTop;

    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      navDown();
      navDownColorChange();
    } else {
      // Scroll Up
      if (st + window.innerHeight < Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) && window.scrollY < 20) {
        if (!over)
        {
          navUp();
        navUpColorChange();
        }
      }
    }

    lastScrollTop = st;
  }
});
