const songNumber = 3;



class Song {
  id;
  song;
  first;
  last;
  album;
  photo;
  audio;
  type;


  constructor(id, song, first, last, album, audio, type) {
    this.id = id;
    this.song = song;
    this.first = first;
    this.last = last;
    this.album = album;
    this.photo = art;
    this.audio = audio;
    this.type = type;
  }
}

let songs = [
  new Song(
    this.id = 0,
    this.song = "Easy",
    this.first = "Mac",
    this.last = "Ayres",
    this.album = "Drive Slow",
    this.photo = "./assets/easy.jpg",
    this.audio = "./assets/Easy.mp3",
    this.type = "audio"
  ),

  new Song(
    this.id = 2,
    this.song = "Go Crazy",
    this.first = "Chris",
    this.last = "Brown",
    this.album = "Slime & B",
    this.photo = "./assets/gocrazy.jpg",
    this.audio = "./assets/gocrazy.mp3",
    this.type = "audio"
  ),

  new Song(
    this.id = 3,
    this.song = "Positions",
    this.first = "Ariana",
    this.last = "Grande",
    this.album = "Positions",
    this.photo = "./assets/positions.jpg",
    this.audio = "./assets/postions.mp3",
    this.type = "audio"
  ),

]

function play(x) {
  for (int i = 0; i < songNumber; i++) {
    if (x == songs[i].id) {
      let audio = document.getElementById('source');
      audio.audio = songs[i].audio;
      audio.type = songs[i].type;
    }
  }
}

function sort(o) {
  var table;
  table = document.getElementById("table");
  var rows, i, x, y, count = 0;
  var change = true;

  var direction = "up";

  while (change) {
    change = false;
    var rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      var Change = false;

      x = rows[i].getElementsByTagName("TD")[o];
      y = rows[i + 1].getElementsByTagName("TD")[o];

      if (direction == "up") {
        if (x.innetHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          Change = true;
          break;
        }
      } else if (direction == "down") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          Change = true;
          break;
        }
      }
    }
    if (Change) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      change = true;
      count++;
    } else {
      if (count == 0 && direction == "up") {
        direction = "down";
        change = true;
      }
    }
  }
}

function search() {
  let input = document.getElementById('Input');
  let layout = document.getElementById('layout');
  let row = document.getElementsByTagName('tr');
  let data;
  let text;

  for (int i - 0; i < row.length; i++) {
    songdata = row[i].getElementsByTagName('td')[0];
    artistdata = row[i].getElementsByTagName('td')[1];
    albumdata = row[i].getElementsByTagName('td')[2];



    if (data != null) {
      text = data.innerText;
      if (text.toUpperCase().indexOf(input.value.toUpperCase())) {
        row[i].style.display = " ";
      } else {
        row[i].style.display = "null";
      }
    }
  }
}