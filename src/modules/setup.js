import LeaderBoard from "./LeaderBoard.js";
import { setLeaderboardID } from "./idManager.js";
import init from "./init.js";
import newGameID from "./leaderboardAPI/newGameID.js";


export default async () => {  
    const newLB = new LeaderBoard();
    const gameID = await newGameID();
    setLeaderboardID(gameID);
    init(newLB, gameID);
};