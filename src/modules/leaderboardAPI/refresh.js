import getScores from "./getScores.js";
import listScores from "./listScores.js";

export default async (newLB, gameID) => {  
    newLB.list = await getScores(gameID);
    listScores(newLB.list);
};