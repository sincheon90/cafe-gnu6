document.addEventListener("DOMContentLoaded", function () {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbar = document.querySelector("nav");
  var navbarSquare = document.querySelector(".navsquare"); // 상단바 네모
  var navbarText = document.querySelectorAll(".navbutton"); // 상단텍스트
  var navbarSquraeSub = document.querySelector(".navsquare-sub") // 서브메뉴 네모
  var navbarTextSub = document.querySelectorAll(".navsubbutton") // 서브텍스트

  var navbarHeight = 2;


  window.addEventListener("scroll", function () {
    didScroll = true;
  });

  navbar.addEventListener("mouseover", function(){
    mouseOverNav();
  })

  navbar.addEventListener("mouseout",function(){
    mouseOutNav();
  })

  function mouseOutNav(){
    subNavUp();
    var st = window.scrollY || document.documentElement.scrollTop;
    if (st + window.innerHeight < Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) && window.scrollY < 20) {
      navUp();
      navUpColorChange();
    }
    navSubUpColorChange();
  }

  function mouseOverNav(){
    subNavDown();
    navDown();
    navDownColorChange();
    navSubDownColorChange()
  }

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 50);
  function navUp() {
    navbarSquare.classList.add("shrink");
    navbarSquare.classList.remove("expanded");
  }
  function navDown() {
    navbarSquare.classList.add("expanded");
    navbarSquare.classList.remove("shrink");
  }
  function navUpColorChange() {
    navbarText.forEach(function (button) {
      button.classList.add("text-white");
      button.classList.remove("text-success");
    });
  }
  function navDownColorChange() {
    navbarText.forEach(function (button) {
      button.classList.add("text-success");
      button.classList.remove("text-white");
    });
  }
  function subNavUp(){
    navbarSquraeSub.classList.remove("expanded");
    navbarSquraeSub.classList.add("shrink");
  }
  function subNavDown() {
    navbarSquraeSub.classList.add("expanded");
    navbarSquraeSub.classList.remove("shrink");
  }
  function navSubUpColorChange() {
    navbarTextSub.forEach(function (button) {
      button.classList.add("text-white");
      button.classList.remove("text-black-50");
    });
  }
  function navSubDownColorChange() {
    navbarTextSub.forEach(function (button) {
      button.classList.add("text-black-50");
      button.classList.remove("text-white");
    });
  }

  function hasScrolled() {
    var st = window.scrollY || document.documentElement.scrollTop;

    // Make sure they scroll more than delta
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
        navUp();
        navUpColorChange();
      }
    }

    lastScrollTop = st;
  }
});
