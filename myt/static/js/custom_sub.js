document.addEventListener("DOMContentLoaded", function () {
  var navbars = document.querySelectorAll("nav");
  var navbarSquare = document.querySelector(".navsquare"); // 상단바 네모
  var navbarText = document.querySelectorAll(".navbutton"); // 상단텍스트
  var navbarSquareSubs = document.querySelectorAll(".navsquare-sub") // 서브메뉴 네모
  var navbarTextSub = document.querySelectorAll(".navsubbutton") // 서브텍스트

  init();

  function init() {
    navDown();
    navDownColorChange();
  }

  navbars.forEach(function(navbar){
    navbar.addEventListener("mouseover", function () {
      if (window.matchMedia("(min-width: 992px)").matches) {
        mouseOverNav();
      }
    });
    navbar.addEventListener("mouseout", function () {
      if (window.matchMedia("(min-width: 992px)").matches) {
        mouseOutNav();
      }
    });
  });

  // Applying mouseover effects
  setupMouseEvents(navbarText, "mouseover", "text-over", "text-menu");
  setupMouseEvents(navbarText, "mouseout", "text-menu", "text-over");

  // Applying mouseover effects to sub-menu elements
  setupMouseEvents(navbarTextSub, "mouseover", "text-over", "text-menu");
  setupMouseEvents(navbarTextSub, "mouseout", "text-menu", "text-over");

  function setupMouseEvents(elements, eventType, addClass, removeClass) {
    elements.forEach(function(element) {
      element.addEventListener(eventType, function() {
        if (window.matchMedia("(min-width: 992px)").matches) {
          element.classList.add(addClass);
          element.classList.remove(removeClass);
        }
      });
    });
  }

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
      navbarSquareSubs.forEach(function(element) {
        element.classList.remove("expanded");
        element.classList.add("shrink");
      });
    }
  }
  function subNavDown() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      navbarSquareSubs.forEach(function(element) {
        element.classList.remove("shrink");
        element.classList.add("expanded");
      });
    }
  }
  function navSubUpColorChange() {


  }
  function navSubDownColorChange() {

  }
});

// 스크롤시 함수
var header = document.querySelector("#header");
var mainheader = document.querySelector("#main-header");

if(mainheader !== null) {
  init();
}

function init(){  
  window.onscroll = function() {scrollFunction()};
  header.classList.add("d-lg-none");
  header.classList.add("transition-effect");
  mainheader.classList.add("transition-effect");
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.remove("d-lg-none");
    mainheader.classList.add("d-lg-none");
  } else {
    header.classList.add("d-lg-none");
    mainheader.classList.remove("d-lg-none");
  }
}

