export const getTeams = async () => {
  const url = 'https://football-web-pages1.p.rapidapi.com/teams.json?comp=1';

  try {
    const apiKey = process.env.API_KEY;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey as string,
        'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
      }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) { // if HTTP-status is 200-299
      return data["teams"];
    }
  } catch (error) {
    console.log(error);
  }
}
