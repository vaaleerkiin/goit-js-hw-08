const iframe = document.querySelector('iframe');
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Vimeo(iframe);
const TIME_KEY = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on(
  'timeupdate',
  throttle(data => {
    console.log(data.seconds);
    const strigifyData = JSON.stringify(data.seconds);
    localStorage.setItem(TIME_KEY, strigifyData);
  }, 1000)
);

function setTime() {
  const currentTime = JSON.parse(localStorage.getItem(TIME_KEY));
  console.log(currentTime);
  if (currentTime == null) {
    return;
  }
  player.setCurrentTime(currentTime);
}
setTime();
