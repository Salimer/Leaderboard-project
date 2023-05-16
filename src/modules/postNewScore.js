async function fetchData() {
    const requestURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yVWfxt83ZzUTJiUF6itj/scores";
    const newScore = {
        user: "Otman",
        score: "100"
    };
  
    const request = new Request(requestURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newScore)
    });
    const response = await fetch(request);
    const superHeroesText = await response.text();
  
    const superHeroes = JSON.parse(superHeroesText);
    console.log(superHeroes);
  }
  
  fetchData();
  