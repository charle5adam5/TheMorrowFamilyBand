
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


function fadeIn() {
  album.forEach(function(img) {
    setInterval(function() {
      photo.className = "";
    }, 2400);
  })
    setInterval(function() {
      curIndex++;
      if(curIndex >= album.length) {
        curIndex = 0;
      }
      photo.className = "fade";
      photo.src = album[curIndex];
    }, 2500);
}
document.getElementById("album").src = album[curIndex];
fadeIn();
