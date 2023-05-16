async function sendData() {
  const requestURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games";
  const requestData = {
    name: "My cool new game"
  };

  const request = new Request(requestURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestData)
  });

  const response = await fetch(request);
  const responseData = await response.json();

  console.log(responseData.result);
  const splitResult = responseData.result.split(' ');
  console.log(splitResult);
  const gameID = splitResult[3];
  console.log(gameID);
}

sendData();
