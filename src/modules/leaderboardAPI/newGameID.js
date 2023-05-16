export default async () => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
  const requestData = {
    name: "Salim's game",
  };

  const request = new Request(requestURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  });

  const response = await fetch(request);
  const responseData = await response.json();

  const gameID = responseData.result.split(' ')[3];
  return gameID;
};
