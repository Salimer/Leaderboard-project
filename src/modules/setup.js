import LeaderBoard from './leaderboardAPI/LeaderBoard.js';
import init from './init.js';
import newGameID from './leaderboardAPI/newGameID.js';

export default async () => {
  const newLB = new LeaderBoard();
  const gameID = localStorage.getItem('ID') || await newGameID();
  init(newLB, gameID);
};