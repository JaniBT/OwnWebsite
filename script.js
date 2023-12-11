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