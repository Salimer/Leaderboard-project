import './style.scss';
import Leaderboard from './modules/LeaderBoard';
import init from './modules/init.js';
import listScores from './modules/listScores.js';
import postNewScore from './modules/postNewScore.js';

// Starting a new leader board
const newLB = new Leaderboard();
const gameID = 'yVWfxt83ZzUTJiUF6itj'
init(newLB, gameID);

// Listen to Refresh button
const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', () => {
  init(newLB, gameID);
})

// Listen to the submit button
const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', () => {
  const newName = document.querySelector('#new-name');
  const newScore = document.querySelector('#new-score');
  if (newName.value !== '' && newScore.value !== '') {
    newLB.addItem(newName.value, newScore.value);
    postNewScore(gameID, newName.value, newScore.value);
    newName.value = '';
    newScore.value = '';
  } else {
    // eslint-disable-next-line no-alert
    alert('Please fill both fields');
  }
});
