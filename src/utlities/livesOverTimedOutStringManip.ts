export const livesOverTimedOutStringManip = (team: string, userSubmissionArray: string[]): Array<string> => {
  const len = team.split('').filter(item => item !== ' ').length;
  return new Array(len - userSubmissionArray.length).fill(' ');
}
