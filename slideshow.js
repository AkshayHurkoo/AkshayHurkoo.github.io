var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("myslides");
  var dots = document.getElementsByClassName("myslides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 8 seconds

}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle('active');
  document.getElementById("sidebar").style.width = "200px";
  document.getElementById("Container").style.marginLeft = "250px";
  document.getElementById("comingSoon").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
