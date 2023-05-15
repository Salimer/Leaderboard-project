import './style.scss';
import LeaderBoard from './modules/leaderBoard.js';
import listScores from './modules/listScores.js';

const newLB = new LeaderBoard();
listScores(newLB.list);

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', () => {
  const newName = document.querySelector('#new-name');
  const newScore = document.querySelector('#new-score');
  if (newName.value !== '' && newScore.value !== '') {
    newLB.addItem(newName.value, newScore.value);
    newName.value = '';
    newScore.value = '';
    listScores(newLB.list);
  } else {
    // eslint-disable-next-line no-alert
    alert('Please fill both fields');
  }
});
