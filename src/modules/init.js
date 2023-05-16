import LeaderBoard from "./leaderBoard.js";
import getScores from "./getScores.js";
import listScores from "./listScores.js";

export default async () => {
    const newLB = new LeaderBoard();
  
    newLB.list = await getScores('yVWfxt83ZzUTJiUF6itj');
    console.log(newLB.list);
    listScores(newLB.list);
};