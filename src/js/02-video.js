import throttle from 'lodash.throttle';
import VimeoPlayer from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
const vimeoPlayer = new VimeoPlayer(iframe);

function savePlaybackTime(time) {
  localStorage.setItem('videoplayer-current-time', time);
}

function restorePlaybackTime() {
  const savedTime = localStorage.getItem('videoplayer-current-time');

  if (savedTime) {
    vimeoPlayer.setCurrentTime(parseFloat(savedTime));
  }
}

vimeoPlayer.on('timeupdate', throttle((event) => {
  const currentTime = event.seconds;
  savePlaybackTime(currentTime);
}, 1000));

restorePlaybackTime();
