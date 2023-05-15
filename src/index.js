import './style.scss';
import leaderBoard from './modules/leaderBoard';
import listScores from './modules/listScores'

listScores(leaderBoard.scoresList);

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', () => {
    const newName = document.querySelector('#new-name');
    const newScore = document.querySelector('#new-score');
    if (newName.value !== '' && newScore.value !== '') {
        leaderBoard.addItem(newName.value, newScore.value);
    } else {
        alert('Please fill both fields');
    }
})
