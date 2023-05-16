import './style.scss';
import listScores from './modules/listScores.js';
import init from './modules/init.js';

// Starting a new leader board
init();

// Listen to the submit button
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
