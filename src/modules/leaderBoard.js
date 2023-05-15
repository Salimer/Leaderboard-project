export default class leaderboard {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    static scoresList = [
        {
            name: 'Salim',
            score: 100
        },
        {
            name: 'Misal',
            score: 0
        }
    ];

    addItem (name, score) {
        const newItem = new leaderboard(name, score);
        scoresList.push(newItem);
    }
}