
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

function fadeEffect() {
  return album.forEach(function(img) {
    setInterval(function() {
      photo.className = '';
    }, 1999);
  });
};

(function imgChange() {
    setInterval(function() {
      fadeEffect();
    }, 1999);
    setInterval(function() {
    curIndex++;
    if(curIndex >= album.length) {
      curIndex = 0;
    }
    photo.className = 'fade';
    photo.src = album[curIndex];
  }, 4000);
})();
