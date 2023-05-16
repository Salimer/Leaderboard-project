export default async (list) => {
  const container = document.querySelector('.scores-container');
  // Reset score items
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  list.forEach((item) => {
    const scoreItem = document.createElement('li');
    scoreItem.className = 'score-item';
    scoreItem.textContent = `${item.user}: ${item.score}`;
    container.appendChild(scoreItem);
  });
};
