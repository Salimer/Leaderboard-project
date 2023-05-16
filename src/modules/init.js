import refresh from './leaderboardAPI/refresh.js';
import postNewScore from './leaderboardAPI/postNewScore.js';

export default (newLB, gameID) => {
  // Listen to Refresh button
  const refreshBtn = document.querySelector('#refresh');
  refreshBtn.addEventListener('click', () => {
    refresh(newLB, gameID);
  });

  // Listen to the submit button
  const submitBtn = document.querySelector('#submit');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newName = document.querySelector('#new-name');
    const newScore = document.querySelector('#new-score');
    if (newName.value !== '' && newScore.value !== '') {
      postNewScore(gameID, newName.value, newScore.value);
      newName.value = '';
      newScore.value = '';
    } else {
        const error = document.querySelector('#error');
        setTimeout(() => {
            error.classList.toggle('hide');
        }, 3000);
        error.classList.toggle('hide');
    }
  });
};