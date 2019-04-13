
const photoFocus = document.querySelector(".photo-focus");
const photoSlider = document.querySelector(".photo-slider");

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
  "./images/gallery12.JPG",
  "./images/flavors4.JPG"
];


  for(let i = 0; i < album.length; i++) {
    let img = document.createElement("img");
    let div = document.createElement("div");
    img.setAttribute("class", "single");
    img.src = album[i];
    div.appendChild(img);
    photoFocus.appendChild(div);
  }
  for(let i = 0; i < album.length; i++) {
    let img = document.createElement("img");
    let div = document.createElement("div");
    img.setAttribute("class", "thumb");
    img.src = album[i];
    div.appendChild(img);
    photoSlider.appendChild(div);
  }
  
  
  
  

