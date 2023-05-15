export default (list) => {
  const container = document.querySelector('.scores-container');
  // Reset score items
  while (container.children[0]) {
    container.removeChild(container.children[0]);
  }

  list.forEach((item) => {
    const scoreItem = document.createElement('li');
    scoreItem.className = 'score-item';
    scoreItem.innerHTML = `${item.name}: ${item.score}`;
    container.appendChild(scoreItem);
  });
};