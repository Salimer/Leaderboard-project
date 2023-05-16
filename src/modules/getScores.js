export default async (ID = 'yVWfxt83ZzUTJiUF6itj') => {
    const requestURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores`;
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const superHeroes = await response.json();
    
    return superHeroes.result;
  }