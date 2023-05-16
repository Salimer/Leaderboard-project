export default class LeaderBoard {
  constructor() {
    this.list = [];
  }

  addItem(newName, newScore) {
    const newItem = {
      user: newName,
      score: newScore,
    };
    this.list.push(newItem);
  }
}