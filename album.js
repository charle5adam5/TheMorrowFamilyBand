
let album = [
  "./images/morrow2.JPG",
  "./images/dawn2.JPG",
  "./images/morrow3.JPG",
  "./images/jim2.JPG",
  "./images/melindajim.JPG",
  "./images/melinda2.JPG",
  "./images/jim3.JPG",
  "./images/morrow4.JPG",
  "./images/ad1.JPG",
  "./images/ad2.JPG",
  "./images/ad3.JPG",
  "./images/ad4.JPG"
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
