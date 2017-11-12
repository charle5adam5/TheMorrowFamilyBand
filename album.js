
var photo = document.getElementById("album");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var album = [
  "./images/gallery1.JPG",
  "./images/flavors.JPG",
  "./images/gallery2.JPG",
  "./images/gallery3.JPG",
  "./images/flavors2.JPG",
  "./images/gallery4.JPG",
  "./images/gallery5.JPG",
  "./images/fullband.JPG",
  "./images/gallery6.JPG",
  "./images/gallery7.JPG",
  "./images/fullband2.JPG",
  "./images/gallery8.JPG",
  "./images/gallery9.JPG",
  "./images/flavors3.JPG",
  "./images/gallery10.JPG",
  "./images/gallery11.JPG",
  "./images/flavors4.JPG"
];
var count = 0;
photo.src = album[count];

console.log(album.length);


(function images() {
  next.addEventListener("click", function() {
    count++;
    console.log(count);
    if(count > album.length-1) {
      count = 0;
    }
    photo.src = album[count];
  });
  prev.addEventListener("click", function() {
    count--;
    console.log(count);
    if(count < 0) {
      count = album.length-1;
    }
    photo.src = album[count];
  });
})();
