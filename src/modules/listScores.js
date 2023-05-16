export default async (list) => {
  try {
    const container = document.querySelector('.scores-container');
    // Reset score items
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    for (const item of list) {
      const scoreItem = document.createElement('li');
      scoreItem.className = 'score-item';
      scoreItem.textContent = `${item.user}: ${item.score}`;
      container.appendChild(scoreItem);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
