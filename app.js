console.log("Started")
let songIndex = 0;
let audioElement = new Audio("songs/Cheap Thrills.mp3");
let mainplayer = document.getElementById('mainplayer');
let progressBar = document.getElementById('progressBar');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let maincover = document.getElementById('maincover');
let mainname = document.getElementById('mainname');
let songs = Array.from(document.getElementsByClassName('songbox'));
maincover.src = "covers/Cheap Thrills.jpeg"
mainname.innerText = "Cheap Thrills"
console.log(songs);
console.log("Hey")
let songlist =[
    {
        songname: "Cheap Thrills",
        songpath: "songs/Cheap Thrills.mp3",
        imgpath: "covers/Cheap Thrills.jpeg"
    },
    {
        songname: "In da Getto",
        songpath: "songs/In the Getto.mp3",
        imgpath: "covers/In da Getto.jpeg"
    },
    {
        songname: "Love Me Like You Do",
        songpath: "songs/Love Me Like You Do.mp3",
        imgpath: "covers/Love Me like you do.jpeg"
    },
    {
        songname: "On My Way",
        songpath: "songs/On My Way.mp3",
        imgpath: "covers/On my Way.jpeg"
    },
    {
        songname: "Stay",
        songpath: "songs/Stay.mp3",
        imgpath: "covers/Stay.jpg"
    }
]

songs.forEach((element, i)=>{ 
    console.log(i);
    element.getElementsByClassName("singerlist")[0].src = songlist[i].imgpath; 
    element.getElementsByClassName("songname")[0].innerText = songlist[i].songname; 
})
// console.log(songs)

mainplayer.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<0){
        audioElement.play()
        mainplayer.src = "images/pause.png"    
    }
    else{
        audioElement.pause()
        makeAllPlays()
        mainplayer.src = "images/play.png"
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    progressBar.value = progress
})
console.log("End")

const makeAllPlays = ()=>{
    songs.forEach((element, i)=>{ 
        console.log(i);
        element.getElementsByClassName("local-button")[0].src = "images/play-button.png";  
    })
}

songs.forEach((element, i)=>{ 
    // console.log(i);
    let item = element.getElementsByClassName("local-button")[0]
    item.addEventListener('click', ()=>{
        makeAllPlays();
        item.src = "images/pause-button.png"
        mainplayer.src = "images/pause.png"
        let songidx = item.id
        songIndex = songidx-1
        audioElement.src = songlist[songIndex].songpath
        maincover.src = songlist[songIndex].imgpath
        mainname.innerText = songlist[songIndex].songname
        console.log(audioElement)
        audioElement.currentTime = 0
        audioElement.play()
    })
})

previous.addEventListener('click', ()=>{
    if(songIndex>0){
        songIndex--;
    }
    audioElement.src = songlist[songIndex].songpath
    maincover.src = songlist[songIndex].imgpath
    mainname.innerText = songlist[songIndex].songname
    audioElement.currentTime = 0
    audioElement.play()
})

next.addEventListener('click', ()=>{
    if(songIndex<(songlist.length-1)){
        songIndex++;
    }
    audioElement.src = songlist[songIndex].songpath
    maincover.src = songlist[songIndex].imgpath
    mainname.innerText = songlist[songIndex].songname
    audioElement.currentTime = 0
    audioElement.play()
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = parseInt(progressBar.value*audioElement.duration/100);
})
