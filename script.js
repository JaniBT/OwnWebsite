$(document).ready(function () {
    // Ellenőrizzük, hogy a modal-t már meg kellett-e jeleníteni a felhasználónak
    var isModalShown = localStorage.getItem('isModalShown');

    if (!isModalShown) {
      // Ha még nem jelenítettük meg a modalt, akkor megjelenítjük
      $('#myModal').modal('show');
    }

    // A "Save Changes" gomb eseménykezelése
    $('#saveChangesButton').click(function () {
      // Elmentjük az információt arról, hogy a felhasználó már látta a modalt
      localStorage.setItem('isModalShown', true);
    });
});

$(function () {
  $('[data-toggle="popover"]').popover()
})

window.onscroll = function() {
  showBackToTopButton();
};

function showBackToTopButton() {
  var btn = document.getElementById("backToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = "block";
  } else {
      btn.style.display = "none";
  }
}

// Animált görgetés a lap tetejére
document.getElementById("backToTopBtn").addEventListener("click", function() {
  scrollToTop(1000);
});

function scrollToTop(duration) {
  var start = document.documentElement.scrollTop || document.body.scrollTop;
  var startTime = new Date().getTime();

  function scroll() {
      var currentTime = new Date().getTime();
      var timeElapsed = currentTime - startTime;

      document.documentElement.scrollTop = document.body.scrollTop = easeInOut(timeElapsed, start, -start, duration);

      if (timeElapsed < duration) {
          requestAnimationFrame(scroll);
      }
  }

  function easeInOut(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(scroll);
}

// Display the loader overlay until the website fully loads
window.addEventListener('load', function () {
  const loaderOverlay = document.querySelector('.loader-overlay');
  loaderOverlay.style.display = 'none';
  document.body.style.overflow = 'auto'; // Visszaállítjuk a görgetés engedélyezését
});