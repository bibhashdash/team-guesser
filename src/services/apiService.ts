const url = 'https://football-web-pages1.p.rapidapi.com/teams.json?comp=1';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7e3e7507fbmsh3ac2e6ed9ad32bep1d3fa3jsn12b698d56994',
    'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
  }
};

export const getTeams = async () => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) { // if HTTP-status is 200-299
      return data["teams"];
    }
  } catch (error) {
    console.log(error);
  }
}
