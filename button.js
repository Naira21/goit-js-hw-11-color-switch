// Исходные данные
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//Реализация задачи


const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
};

console.log(refs);
refs.startBtn.addEventListener('click', startBtnClick);
refs.stopBtn.addEventListener('click', stopBtnClick);
refs.startBtn.disabled = false;



function runner() {
    console.log('run');
    const getColorId = randomIntegerFromInterval(0, colors.length);
    refs.body.style.background = colors[getColorId];
   
    // return refs.body.setAttribute('color', colors[getColorId]); - 2
    // refs.body.classList.add("color"); -1
    // console.log(a); -1
    // refs.body.color = colors[getColorId]; -1
}
let id = null;
function startBtnClick() {
   id=setInterval(runner, 1000);
    refs.startBtn.disabled = true;
    
}

function stopBtnClick() {
    refs.startBtn.disabled = false;
    clearInterval(id);
}





// const DELAY = 1000;
// const intervalId = setInterval(() => {
//     refs.body.classList.add('color');
//     refs.body.color = colors[getColorId];
// }, DELAY);



//fix date of start
//calculate delta of time
//use setInterval

// function logger() {
//     console.log('run');
// };
// // let id = null;
// function timerStart() {
//     id=setInterval(logger, 1000);
    // setInterval(logger, 1000);
// };

// put start.addEventListeners('click', timerStart)

// function stopTimer() {
//     clearInterval(id);
// }
//put stop.addEventListeners('click', stopTimer)