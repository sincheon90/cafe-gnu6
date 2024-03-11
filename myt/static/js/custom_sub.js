document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector("nav");
  var navbarSquare = document.querySelector(".navsquare"); // 상단바 네모
  var navbarText = document.querySelectorAll(".navbutton"); // 상단텍스트
  var navbarSquraeSub = document.querySelector(".navsquare-sub") // 서브메뉴 네모
  var navbarTextSub = document.querySelectorAll(".navsubbutton") // 서브텍스트

  init();

  function init() {
    navDown();
    navDownColorChange();
  }

  navbar.addEventListener("mouseover", function () {
    if (window.matchMedia("(min-width: 992px)").matches) {
      mouseOverNav();
    }

  })

  navbar.addEventListener("mouseout", function () {
    if (window.matchMedia("(min-width: 992px)").matches) {
      mouseOutNav();
    }
  })

  function mouseOutNav() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      subNavUp();
      navSubUpColorChange();
    }
  }

  function mouseOverNav() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      subNavDown();
      navSubDownColorChange()
    }

  }

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
    navbarText.forEach(function (button) {
      button.classList.add("text-menu");
      button.classList.remove("text-white");
    })
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
});
