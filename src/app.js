// Get the modals
var galataModal = document.getElementById("galata-map-modal");
var maidensModal = document.getElementById("maidens-map-modal");
var basilicaModal = document.getElementById("basilica-map-modal");

// Get the button that opens the modal
var galataBtn = document.getElementById("open-galata-map");
var maidensBtn = document.getElementById("open-maidens-map");
var basilicaBtn = document.getElementById("open-basilica-map");

// Get the <span> element that closes the modal
var galataClose = document.getElementById("galata-close");
var maidensClose = document.getElementById("maidens-close");
var basilicaClose = document.getElementById("basilica-close");

// When the user clicks the button, open the modal
galataBtn.onclick = function () {
  galataModal.style.display = "block";
};

maidensBtn.onclick = function () {
  maidensModal.style.display = "block";
};

basilicaBtn.onclick = function () {
  basilicaModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
galataClose.onclick = function () {
  galataModal.style.display = "none";
};

maidensClose.onclick = function () {
  maidensModal.style.display = "none";
};

basilicaClose.onclick = function () {
  basilicaModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == galataModal) {
    galataModal.style.display = "none";
  } else if (event.target == maidensModal) {
    maidensModal.style.display = "none";
  } else if (event.target == basilicaModal) {
    basilicaModal.style.display = "none";
  }
};
