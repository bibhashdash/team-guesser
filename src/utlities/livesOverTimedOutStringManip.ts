export const livesOverTimedOutStringManip = (team: string, userSubmissionArray: string[]) => {
  const len = team.split('').filter(item => item !== ' ').length;
  return new Array(len - userSubmissionArray.length).fill(' ');
}
