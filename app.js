const video = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");
const musicText = document.getElementById("musicText");

// Pehli interaction par music autoplay
function autoPlayInit() {
  video.play().then(() => {
    window.removeEventListener('click', autoPlayInit);
    window.removeEventListener('touchstart', autoPlayInit);
    window.removeEventListener('scroll', autoPlayInit);
  }).catch(err => {
    console.log("Autoplay context wait...", err);
  });
}

window.addEventListener('click', autoPlayInit);
window.addEventListener('touchstart', autoPlayInit);
window.addEventListener('scroll', autoPlayInit);

// Corner button: mute / unmute
musicToggle.addEventListener('click', function (e) {
  e.stopPropagation();
  if (video.muted) {
    video.muted = false;
    musicIcon.className = "fa-solid fa-volume-high music-btn-icon";
    musicText.innerText = "Music On";
  } else {
    video.muted = true;
    musicIcon.className = "fa-solid fa-volume-xmark music-btn-icon";
    musicText.innerText = "Music Off";
  }
});

// Mobile hamburger menu
const navToggle = document.getElementById("navToggle");
const navBar = document.getElementById("navBar");

navToggle.addEventListener('click', function () {
  const open = navBar.classList.toggle('open');
  navToggle.querySelector('i').className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

// Link click par menu band
navBar.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navBar.classList.remove('open');
    navToggle.querySelector('i').className = "fa-solid fa-bars";
  });
});