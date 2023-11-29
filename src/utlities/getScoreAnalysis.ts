import {FirestoreScoreObjectModel} from "@/utlities/models";

export interface ScoreAnalysisReturnUtils {
  livesBonusDataset: Array<number>,
  biggestTimeBonus: number,
}

export const getScoreAnalysis = (allDocs:FirestoreScoreObjectModel[]): ScoreAnalysisReturnUtils => {

  return allDocs.reduce<ScoreAnalysisReturnUtils>((acc, item) => {
    if (item.scoreBreakdown.timeScore > acc.biggestTimeBonus) {
      acc.biggestTimeBonus = item.scoreBreakdown.timeScore
    }
    const {livesBonus} = item.scoreBreakdown;
     acc.livesBonusDataset[livesBonus-1] +=1
    return acc;
  }, {
    livesBonusDataset: [0,0,0,0,0,0,0],
    biggestTimeBonus: 0
  })
}
