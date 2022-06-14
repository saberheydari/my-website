// dark-mode: START
function darkMode(mode = "on") {
  let htmlBody = document.body,
    htmlHeader = document.querySelector("#header"),
    htmlContact = document.querySelector("#contact"),
    htmlDarkModeBtn = document.querySelector("#color-mode");
    
  if (mode == "on") {
    htmlBody.classList.add("body-dark-mode");
    htmlHeader.classList.add("body-dark-mode");
    htmlContact.classList.add("mini-dark-mode");

    htmlDarkModeBtn.style.color = "var(--secondary-color)";
    htmlDarkModeBtn.setAttribute("onclick", "darkMode('off')");
  } else {
    htmlBody.classList.remove("body-dark-mode");
    htmlHeader.classList.remove("body-dark-mode");
    htmlContact.classList.remove("mini-dark-mode");

    htmlDarkModeBtn.style.color = "inherit";
    htmlDarkModeBtn.setAttribute("onclick", "darkMode('on')");
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
