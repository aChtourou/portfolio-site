let hasScrolled = false;

function scrollFunction() {
  if (!hasScrolled && (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5)) {
    document.getElementById("headerScroll").style.height = "90px";
    document.getElementById("slideshow").style.height = "auto";
    document.querySelector("header").style.marginBottom = "0";
    document.querySelector("header").style.transition = ".4s";

    hasScrolled = true;
  }
}

window.addEventListener("scroll", scrollFunction);

window.addEventListener("load", () => {
  document.getElementById("headerScroll").style.height = "100vh";
  document.getElementById("slideshow").style.height = "100vh";
  document.querySelector("header").style.marginBottom = "-4%";
});