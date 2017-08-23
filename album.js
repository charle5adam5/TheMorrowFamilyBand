
let album = [
  "./images/morrow2.webp",
  "./images/dawn2.webp",
  "./images/morrow3.webp",
  "./images/jim2.webp",
  "./images/melindajim.webp",
  "./images/melinda2.webp",
  "./images/jim3.webp",
  "./images/morrow4.webp",
  "./images/ad1.webp",
  "./images/ad2.webp",
  "./images/ad3.webp",
  "./images/ad4.webp"
],
  curIndex = 0;
  imgDuration = 4000;

function fadeIn() {
  document.getElementById("album").className += "fadeOut";
  setTimeout(function() {
    document.getElementById("album").src = album[curIndex];
    document.getElementById("album").className = "";
  },1000);
  curIndex++;
  if (curIndex == album.length) {
    curIndex = 0;
  }
  setTimeout(fadeIn, imgDuration);
}
fadeIn();
