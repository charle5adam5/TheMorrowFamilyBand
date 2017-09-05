  var playlist = document.getElementById("playlist");


var tracks = [
  {
    name: "Ho Hey (Demo)",
    source: './songs/hohey3.mp3'
  },
  {
    name: "Summertime Sadness",
    source: './songs/SummertimeSadness.mp3'
  },
  {
    name: "I'm Alright",
    source: './songs/imallright4.mp3'
  },
  {
    name: "Desert Sky (Demo)",
    source: './songs/DesertSky.mp3'
  },
  {
    name: "When You Get Older (MFB Original)",
    source: './songs/WhenYouGetOlder.mp3'
  },
];
tracks.forEach(function(item) {
  var audio = document.createElement("audio");
  var source = document.createElement("source");
  var title = document.createElement("p");
      title.innerHTML =item.name;
      audio.setAttribute("controls", "");
      source.setAttribute("src", item.source);
      audio.appendChild(source);
        playlist.appendChild(title);
        playlist.appendChild(audio);
});
