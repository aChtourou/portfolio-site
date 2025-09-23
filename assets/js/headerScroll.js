let hasScrolled = false;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    if (!hasScrolled) {
      document.getElementById("headerScroll").style.height = "90px";
      document.getElementById("slideshow").style.height = "auto";
      document.querySelector("header").style.marginBottom = "0";
      document.querySelector("header").style.transition = ".4s";
      hasScrolled = true;
    }
  } else {
    if (!hasScrolled) {
      document.getElementById("headerScroll").style.height = "100vh";
      document.getElementById("slideshow").style.height = "100vh";
      document.querySelector("header").style.marginBottom = "-4%";
    }
  }
}

document.addEventListener('DOMContentLoaded', scrollFunction);

window.onscroll = scrollFunction;