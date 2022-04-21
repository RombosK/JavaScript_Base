const field = document.querySelector('#field');

let snakeHeadPos = [5, 5];
let snakeElems = [];
let direction = [0, 1];
let applePos = [randomInt(0, 9), randomInt(0, 9)];

function randomInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function createField() {
  for(let y = 0; y < 10; y++) {
    for(let x = 0; x < 10; x++){
      const col = document.createElement('DIV');
      col.classList.add('col');
      col.id = `col-${x}-${y}`;

      field.append(col);
    }
  }
}

function getNewPos() {
  return [snakeHeadPos[0] + direction[0], snakeHeadPos[1] + direction[1]];
}


function getHead([x, y]) {
  return field.querySelector(`#col-${x}-${y}`);
}

function gameInit() {
  field.textContent = '';

  createField();


  snakeHeadPos = [randomInt(0, 9), randomInt(0, 9)];
  snakeElems = [];
  direction = [0, 1];
  applePos = [randomInt(0, 9), randomInt(0, 9)];

  const appleEl = getHead(applePos);
  const headEl = getHead(snakeHeadPos);
  headEl.classList.add('snake');
  appleEl.classList.add('apple');
  snakeElems.push(headEl);
}

function step() {
  snakeHeadPos = getNewPos();
  const newHead = getHead(snakeHeadPos);
  newHead.classList.add('snake');
  snakeElems.push(newHead);

  if(snakeHeadPos[0] == applePos[0] && snakeHeadPos[1] == applePos[1]) {
    applePos = [randomInt(0, 9), randomInt(0, 9)];
    newHead.classList.remove('apple');
    getHead(applePos).classList.add('apple');
  } else {
    snakeElems.shift().classList.remove('snake');
  }
  
}

document.addEventListener('keydown', (e) => {
  if(e.key == 'ArrowUp') {
    direction = [0, -1];
  }
  if(e.key == 'ArrowDown') {
    direction = [0, 1]
  }
  if(e.key == 'ArrowLeft') {
    direction = [-1, 0];
  }
  if(e.key == 'ArrowRight') {
    direction = [1, 0]
  }
})

gameInit();
setInterval(step, 1000);
