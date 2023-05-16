async function fetchData() {
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const superHeroesText = await response.text();
  
    const superHeroes = JSON.parse(superHeroesText);
    console.log(superHeroes);
  }
  
  fetchData();
  