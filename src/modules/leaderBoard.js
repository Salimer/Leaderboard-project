export default class leaderboard {
  constructor() {
    this.list = [];
  }

  addItem(newName, newScore) {
    const newItem = {
      name: newName,
      score: newScore,
    };
    this.list.push(newItem);
  }
}