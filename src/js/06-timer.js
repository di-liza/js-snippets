import '../css/common.css';

const clockfaceEl = document.querySelector('.js-clockface');
const startBtn = document.querySelector('[data-action-start]');
const stopBtn = document.querySelector('[data-action-stop]');

class Timer {
  constructor({ onTick }) {
    this.onTick = onTick;
    this.intervalId = null;
    this.isActive = false;
    this.init();
  }
  init() {
    const time = getTimeComponents(0);
    this.onTick(time);
  }
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    const startTime = Date.now();
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = getTimeComponents(deltaTime);
      this.onTick(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    const time = getTimeComponents(0);
    this.onTick(time);
  }
}

const timer = new Timer({
  onTick: updateClockface,
});
function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}

function updateClockface({ hours, mins, secs }) {
  clockfaceEl.textContent = `${hours}:${mins}:${secs}`;
}

startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer));
