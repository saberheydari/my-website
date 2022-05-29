// dark-mode: START
function darkMode(mode = "on") {
  if (mode == "on") {
    document.body.className += " body-dark-mode";
    document.getElementById("header").className += " body-dark-mode";
    document.getElementById("contact").className += " mini-dark-mode";

    document.getElementById("color-mode").style.color =
      "var(--secondary-color)";
    document
      .getElementById("color-mode")
      .setAttribute("onclick", "darkMode('off')");
  } else {
    document.body.className -= " body-dark-mode";
    document.getElementById("header").className -= " body-dark-mode";
    document.getElementById("contact").className -= " mini-dark-mode";

    document.getElementById("color-mode").style.color = "inherit";
    document
    .getElementById("color-mode")
    .setAttribute("onclick", "darkMode('on')");
  }
}
// dark-mode: END


// slideshow: START

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// slideshow: END
