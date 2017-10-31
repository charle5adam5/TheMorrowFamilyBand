
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

function albumFlip() {
  var curIndex = 0;
  photo.src = album[curIndex];
  setInterval(function() {
    curIndex++;
    if(curIndex >= album.length) {
      curIndex = 0;
    }
    if(photo.className != "fade") {
        photo.className = "fade";
      setTimeout(function() {
        photo.className = "";
      }, 1000);
    }
    photo.src = album[curIndex];
  }, 3000);
};

photo.addEventListener("load", albumFlip());
