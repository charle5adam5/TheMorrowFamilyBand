  const audio = document.querySelectorAll('.audio');
  const playBtn = document.querySelectorAll('.play-btn');
  const ranges = document.querySelectorAll('.bar');
  const times  = document.querySelectorAll('.time');
  const volDown = document.querySelectorAll('.volDown');
  const volUp = document.querySelectorAll('.volUp');

  let isPlaying = false;

  window.onload = function() {
    for(let i = 0, j = 0; i < times.length, j < audio.length; i++, j++) {
    let fullM = Math.floor((audio[j].duration / 60) % 60);
    let fullS = Math.floor(audio[j].duration % 60);
    let m = Math.floor((audio[j].currentTime / 60) % 60);
    let s = Math.floor(audio[j].currentTime % 60);
    times[i].innerHTML = m + ":" + s + "/" + fullM + ":" + fullS;
    console.log(audio[j].currentTime);
  }
}

  for(let i = 0, j = 0, k = 0; 
      i < volDown.length, j < volUp.length, k < audio.length;
      i++, j++, k++) {
    volDown[i].addEventListener('click', function() {
      audio[k].volume -= 0.1;
    })
    volUp[j].addEventListener('click', function() {
      audio[k].volume += 0.1;
    })
  }

  function setTime() {
    for(let i = 0, j = 0, k = 0, l = 0;
      i < playBtn.length, j < audio.length, k < ranges.length, l < times.length;
      i++, j++, k++, l++) {
    setInterval(() => {
      ranges[k].setAttribute("max", audio[j].duration);
      let fullM = Math.floor((audio[j].duration / 60) % 60);
      let fullS = Math.floor(audio[j].duration % 60);
      let m = Math.floor((audio[j].currentTime / 60) % 60);
      let s = Math.floor(audio[j].currentTime % 60);
      times[l].innerHTML = m + ":" + s + "/" + fullM + ":" + fullS;
      ranges[k].value = audio[j].currentTime;
  }, 999.5);
}
}

  for(let i = 0, j = 0, k = 0, l = 0;
      i < playBtn.length, j < audio.length, k < ranges.length, l < times.length;
      i++, j++, k++, l++) {
        ranges[k].setAttribute("max", audio[j].duration);
        ranges[k].addEventListener('input', function() {
          let totalM = Math.floor((audio[j].duration / 60) % 60);
          let totalS = Math.floor(audio[j].duration % 60);
          let m = Math.floor((audio[j].currentTime / 60) % 60);
          let s = Math.floor(audio[j].currentTime % 60);
          times[l].innerHTML = m + ":" + s + "/" + totalM + ":" + totalS;
          ranges[k].setAttribute("max", audio[j].duration);
          audio[j].currentTime = ranges[k].value;
          console.log(ranges[k].value);
        })
    playBtn[i].addEventListener('click', function() {
      if(i == j ) {
        setTime();
      }
        if(isPlaying == true) {
          isPlaying = false;
          this.textContent = 'Play';
        } else {
          isPlaying = true;
          this.textContent = 'Pause';
        }
          if(isPlaying == true && i == j) {
            audio[j].play();
          } else {
            audio[j].pause();
          }
    })
  }



  
  


  
  