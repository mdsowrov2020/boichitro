'use strict';

const musicContainer = document.querySelector('.music-container');
const audioContainer = document.querySelector('.audio-container');
const audio = document.querySelector('#audio');
const song_lyric = document.getElementById('lyric');

const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const nextBtn = document.getElementById('next');

const speakerBtn = musicContainer.querySelector('#speaker');
const speakerIcon = musicContainer.querySelector('.mute-vol');

const songs = [
  {
    title: 'purano',
    lyric: `পুরানো সেই দিনের কথা
    ভুলবি কি রে হায়
    ও সেই চোখের দেখা, প্রাণের কথা,
    সে কি ভোলা যায়,
    পুরানো সেই দিনের কথা
    ভুলবি কি রে হায়
    ও সেই চোখের দেখা, প্রাণের কথা,
    সে কি ভোলা যায়
    
    আয়, আরেকটি বার আয় রে সখা,
    প্রাণের মাঝে আয়
    মোরা সুখের দুখের কথা কব,
    প্রাণ জুড়াবে তায়।
    আয়, আরেকটি বার আয় রে সখা,
    প্রাণের মাঝে আয়
    মোরা সুখের দুখের কথা কব,
    প্রাণ জুড়াবে তায়
    
    পুরানো সেই দিনের কথা
    ভুলবি কি রে হায়
    ও সেই চোখের দেখা, প্রাণের কথা,
    সে কি ভোলা যায়
    
    মোরা ভোরের বেলায় ফুল তুলেছি,
    দুলেছি দোলায়
    বাজিয়ে বাঁশি গান গেয়েছি
    বকুলের তলায়
    মোরা ভোরের বেলায় ফুল তুলেছি,
    দুলেছি দোলায়
    বাজিয়ে বাঁশি গান গেয়েছি
    বকুলের তলায়
    
    হায় মাঝে হল ছাড়াছাড়ি,
    গেলেম কে কোথায়
    আবার দেখা যদি হলো সখা,
    প্রাণের মাঝে আয়।
    হায় মাঝে হল ছাড়াছাড়ি,
    গেলেম কে কোথায়
    আবার দেখা যদি হলো সখা,
    প্রাণের মাঝে আয়।
    
    পুরানো সেই দিনের কথা
    ভুলবি কি রে হায়
    ও সেই চোখের দেখা, প্রাণের কথা,
    সে কি ভোলা যায়
    
    আয়, আরেকটি বার আয় রে সখা,
    প্রাণের মাঝে আয়
    মোরা সুখের দুখের কথা কব,
    প্রাণ জুড়াবে তায়।
    
    পুরানো সেই দিনের কথা
    ভুলবি কি রে হায়
    ও সেই চোখের দেখা, প্রাণের কথা,
    সে কি ভোলা যায়,
    পুরানো সেই দিনের কথা
    ভুলবি কি রে হায়
    ও সেই চোখের দেখা, প্রাণের কথা,
    সে কি ভোলা যায়।`,
  },
  {
    title: 'sample-15s',
    lyric: 'sample-15s',
  },
  {
    title: 'sample-3s',
    lyric: 'sample-3s',
  },
  {
    title: 'sample-6s',
    lyric: 'sample-6s',
  },
];

let songIndex = 0;

//load song

loadSong(songs[songIndex]['title']);

loadLyric(songs[songIndex]['lyric']);

function loadSong(song) {
  audio.src = `./mp3/${song}.mp3`;
}

function loadLyric(song) {
  song_lyric.innerText = song;
}

function playSong() {
  musicContainer.classList.add('play');
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  audio.pause();
}

function prevSong() {
  const isPlaying = musicContainer.classList.contains('play');
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]['title']);
  loadLyric(songs[songIndex]['lyric']);
  if (isPlaying) {
    playSong();
  }
}

function nextSong() {
  const isPlaying = musicContainer.classList.contains('play');
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]['title']);
  loadLyric(songs[songIndex]['lyric']);
  if (isPlaying) {
    playSong();
  }
}

function mutedSong() {
  // musicContainer.classList.remove('play');
  // speakerIcon.classList.remove('fa-volume-high');
  let unmute = document.querySelector('.fa-volume-high');
  if (unmute) {
    speakerIcon.classList.remove('fa-volume-high');
    speakerIcon.classList.add('fa-volume-xmark');
    audio.muted = true;
  }
}

function unmuteSong() {
  // musicContainer.classList.remove('play');
  // speakerIcon.classList.remove('fa-volume-high');
  let mute = document.querySelector('.fa-volume-xmark');
  if (mute) {
    speakerIcon.classList.remove('fa-volume-xmark');
    speakerIcon.classList.add('fa-volume-high');

    audio.muted = false;
  }
}
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (!isPlaying) {
    playSong();
  }
});

pauseBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  }
});

speakerBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');
  let high = speakerIcon.classList.contains('fa-volume-high');
  // if (isPlaying) {
  //   mutedSong();
  // } else {
  //   unmuteSong();
  // }

  if (isPlaying) {
    if (high) {
      mutedSong();
    } else {
      unmuteSong();
    }
  }
});

// Change song

prevBtn.addEventListener('click', prevSong);

nextBtn.addEventListener('click', nextSong);
