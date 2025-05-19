let songs=[];

let song1={
    title:'NCS Music, Anonymous',
    url:'./assets/no-copyright-music-corporate-background-334863.mp3',
    cover:'./assets/artist-image.png'
}

function getDurationInString(inSecs){
    let minutes=0;
    let seconds=0;
    inSecs=Math.floor(inSecs);
    minutes=Math.floor(inSecs/60);
    seconds=inSecs-(60*minutes);

    let string=`${minutes}:${seconds<10?`0${seconds}`:seconds}`;
    return string;

}

for(let i=0;i<10;i++){
    songs.push(song1);
}

let songList=document.getElementById('song-list');

let audioPlayer=document.getElementById('audio-player');

function renderSongList(){
    songs.forEach((item,index,arr)=>{
        let songContainer=document.createElement('div');
        songContainer.className='song-item';
        
        let songCover=document.createElement('div');
        songCover.className='song-cover';
        songCover.style.backgroundImage=`url('${item.cover}')`;
        
        let songTitle=document.createElement('span');
        songTitle.className='song-title';
        songTitle.innerHTML=item.title;

        let songDurationAndPlayContainer=document.createElement('div');
        songDurationAndPlayContainer.className='duration-playbutton';

        let songDuration=document.createElement('span');
        songDuration.className='song-duration';

        let audioTag=document.createElement('audio');
        audioTag.src=item.url;
        audioTag.addEventListener('loadedmetadata',()=>{
            songDuration.innerHTML=getDurationInString(audioTag.duration);
        })

        let playButton=document.createElement('div');
        playButton.className='play-button';

        songContainer.append(songCover);
        songContainer.append(songTitle);
        songDurationAndPlayContainer.append(songDuration);
        songDurationAndPlayContainer.append(playButton);
        songContainer.append(songDurationAndPlayContainer);
        songList.append(songContainer);

        playButton.addEventListener('click',()=>{
            
            renderPlayer(audioPlayer,item.url,item.title);
        })
    })
}

renderSongList();

function renderPlayer(audioPlayer,url,title){
    let progressBar=document.getElementById('progress');
    let trackTitle=document.getElementById('track-title');
    let prevButton=document.getElementById('prev-button');
    let playPauseButton=document.getElementById('play-pause-button');
    let nextButton=document.getElementById('next-button');
    let trackDuration=document.getElementById('durationOfTrack');
    //Setting the song in the audioplayer and auto playing it.
    audioPlayer.src=url;
    playPauseButton.style.backgroundImage=`url('./assets/media-control-buttons/pause.png')`;
    trackTitle.innerHTML=`${title}`;

    //Setting the max value of the input range to implement seek control.
    audioPlayer.addEventListener('loadedmetadata',()=>{
        let durationOfTrack=Math.floor(audioPlayer.duration);
        progressBar.setAttribute('max',durationOfTrack);
    })

    //Event Listeners of Play, Pause, Next, Prev
    //and Event Listener for input range value updation
    //and for song over and for input range value update

    prevButton.addEventListener('click',()=>{
        audioPlayer.currentTime=0;
    })

    playPauseButton.addEventListener('click',()=>{
        if(!audioPlayer.paused){
            audioPlayer.pause();
            playPauseButton.style.backgroundImage=`url('./assets/media-control-buttons/play.png')`;
        }
        else if(audioPlayer.paused){
            audioPlayer.play();
            playPauseButton.style.backgroundImage=`url('./assets/media-control-buttons/pause.png')`;
        }
        else{
            audioPlayer.currentTime=0;
            audioPlayer.play();
            playPauseButton.style.backgroundImage=`url('./assets/media-control-buttons/pause.png')`;
        }
    })

    nextButton.addEventListener('click',()=>{
        audioPlayer.currentTime=audioPlayer.duration;
        playPauseButton.style.backgroundImage=`url('./assets/media-control-buttons/play.png')`;
    })

    audioPlayer.addEventListener('timeupdate',()=>{
        trackDuration.innerHTML=`${getDurationInString(audioPlayer.currentTime)}`;
        progressBar.value=audioPlayer.currentTime;
    })

    progressBar.addEventListener('input',()=>{
        audioPlayer.currentTime=progressBar.value;
    })


}