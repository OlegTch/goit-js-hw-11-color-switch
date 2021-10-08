const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  buttonStart: document.querySelector('[data-action="start"]'),
  buttonStop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

let timerId = null;

refs.buttonStart.addEventListener('click', onStartBattonClick);
refs.buttonStop.addEventListener('click', onStopBattonClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function createRandomColor() {
  let randomNumber = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.style.backgroundColor = colors[randomNumber];
}

function removeActiveButtonStart() {
  refs.buttonStart.removeEventListener('click', onStartBattonClick);
}

function addActiveButtonStart() {
  refs.buttonStart.addEventListener('click', onStartBattonClick);
}

function onStartBattonClick() {
  console.log('При клике на кнопку start ');
  timerId = setInterval(() => {
    createRandomColor();
  }, 1000);
  console.log(timerId);
  removeActiveButtonStart();
}

function onStopBattonClick() {
  console.log('При клике на кнопку stop ');
  clearInterval(timerId);
  addActiveButtonStart();
  console.log(timerId);
}
