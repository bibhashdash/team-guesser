import {FirestoreScoreObjectModel} from "@/utlities/models";

interface ScoreAnalysisReturnUtils {
  livesBonusDataset: Array<number>
}

export const getScoreAnalysis = (allDocs:FirestoreScoreObjectModel[]): ScoreAnalysisReturnUtils => {
  const livesBonusDataset = [0,0,0,0,0,0,0];
  allDocs.forEach((scoreObject) => {
    const {livesBonus}  = scoreObject.scoreBreakdown;
    livesBonusDataset[livesBonus] += 1;
  });
  return {
    livesBonusDataset
  }
}
