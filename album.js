
var photo = document.getElementById("album");

var album = [
  "./images/gallery1.JPG",
  "./images/gallery2.JPG",
  "./images/gallery3.JPG",
  "./images/gallery4.JPG",
  "./images/gallery5.JPG",
  "./images/gallery6.JPG",
  "./images/gallery7.JPG",
  "./images/gallery8.JPG",
  "./images/gallery9.JPG",
  "./images/gallery10.JPG",
  "./images/gallery11.JPG"
];
var curIndex = 0;
photo.src = album[curIndex];

function imgIncrement() {
  curIndex++;
  if(curIndex >= album.length) {
    curIndex = 0;
  }
  return photo.src = album[curIndex];
};

function fadeEffect() {
    if(photo.className != "fade") {
        photo.className = "fade";
      setTimeout(function() {
        photo.className = "";
      }, 0999);
    }
};

(function imgChange() {
  setInterval(function() {
    fadeEffect();
    imgIncrement();
  }, 3000);
})();
