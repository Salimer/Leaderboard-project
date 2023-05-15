import './style.scss';
import leaderBoard from './modules/leaderBoard';
import listScores from './modules/listScores'

const newLB = new leaderBoard;
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
        alert('Please fill both fields');
    }
})
