export {};

// const allTeamsInLocalStorage = JSON.parse(localStorage.getItem("teams"));
// if (allTeamsInLocalStorage && allTeamsInLocalStorage.length > 0) {
//   setTheTeam(allTeamsInLocalStorage);
// } else {
//   let tempTeams: string[] = [];
//   for (let i = 0; i < competitionIdsArray.length; i++) {
//     getTeams(competitionIdsArray[i]).then((result) => {
//       tempTeams.push(...result);
//       if (i === competitionIdsArray.length - 1) {
//
//         localStorage.setItem("teams", JSON.stringify(tempTeams));
//         setTheTeam(tempTeams);
//
//       }
//     });
//   }
// }
