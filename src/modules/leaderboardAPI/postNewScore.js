export default async (ID, newUser, newScore) => {
  const requestURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores`;
  const obj = {
    user: newUser,
    score: `${newScore}`,
  };

  const request = new Request(requestURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  await fetch(request);
};