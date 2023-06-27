console.log("Started")
const fs = require('fs');

let songname = document.getElementById('songname')
let artistname = document.getElementById('artistname')
let genre = document.getElementById('genre')
let albumname = document.getElementById('albumname')
let button = document.getElementById("submit-button")

let data ={
    song: "",
    artist: "",
    genre: "",
    album: ""
}
let previous = {}
songname.oninput = ()=>{
    data.song = songname.value
}
artistname.oninput = ()=>{
    data.artist = artistname.value
}
genre.oninput = ()=>{
    data.genre = genre.value
}
albumname.oninput = ()=>{
    data.album = albumname.value
}

button.onclick = ()=>{
    if(data.song == previous){
        return;
    }
    else{
        console.log(data)
    }
    previous = data.song;
}
