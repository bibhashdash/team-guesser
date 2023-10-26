export interface Team {
  id: number;
  fullName: string;
  shortName: string;
}

export const getTeams = async (id: number) => {
  const url = 'https://football-web-pages1.p.rapidapi.com/teams.json';

  // try {
  //   const apiKey = process.env.API_KEY;
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': apiKey as string,
  //       'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
  //     }
  //   };
  //   const response = await fetch(`${url}?comp=${id}`, options);
  //   const data = await response.json();
  //   if (response.ok) {
  //    return data['teams'].reduce<Team[]>((acc, item, index) => {
  //       acc.push(item['full-name']);
  //       return acc
  //     }, []);
  //   }
  //
  // } catch (error) {
  //   console.log(error);
  // }
}
