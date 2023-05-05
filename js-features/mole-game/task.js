const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const holes = document.querySelectorAll('.hole');

let countDead = 0;
let countLost = 0;

const getHole = (index) => document.getElementById(`hole${index}`);

const checkWin = () => {
  if (countDead === 10) {
    alert('Победа!');
    countDead = 0;
    countLost = 0;
    dead.innerText = countDead;
    lost.innerText = countLost;
  }
};

const checkLose = () => {
  if (countLost === 5) {
    alert('Вы проиграли!');
    countDead = 0;
    countLost = 0;
    dead.innerText = countDead;
    lost.innerText = countLost;
  }
};

holes.forEach(hole => {
  hole.addEventListener('click', () => {
    if (hole.classList.contains('hole_has-mole')) {
      countDead++;
      dead.innerText = countDead;
      checkWin();
    } else {
      countLost++;
      lost.innerText = countLost;
      checkLose();
    }
  });
});