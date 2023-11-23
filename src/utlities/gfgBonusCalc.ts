export const gfgBonusCalc = (array: Array<string>, team: string): number => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    const regex = new RegExp(array[i], "gi");
    const matches = team.match(regex);
    count += matches ? matches.length : 0;
  }
  const teamMinusSpacesLength = team.toLowerCase().split('').filter(item => item != ' ').join('').length;
  return Math.floor(50 - (count / teamMinusSpacesLength) * 50);
}
