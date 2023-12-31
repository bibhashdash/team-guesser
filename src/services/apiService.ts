import {FeedbackData, FirestoreScoreObjectModel, ScoreBreakdown} from "../utlities/models";
import {addDoc, collection, getDocs, QueryDocumentSnapshot, SnapshotOptions, WithFieldValue,} from "firebase/firestore";
import {db} from "../firebase/firebase";
import {generateDatePlayedValue} from "../utlities/generateDatePlayedValue";

const scoreConverter = {
  toFirestore(score: WithFieldValue<any>): FirestoreScoreObjectModel {
    return {
      totalScore: score.totalScore,
      scoreBreakdown: {
        timeScore: score.scoreBreakdown['timeScore'],
        gloryBonus: score.scoreBreakdown['gloryBonus'],
        livesBonus: score.scoreBreakdown['livesBonus']
      },
      datePlayed: score.datePlayed
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): FirestoreScoreObjectModel {
    const data = snapshot.data(options) as FirestoreScoreObjectModel;
    return {
      totalScore: data.totalScore,
      scoreBreakdown: data.scoreBreakdown,
      datePlayed: data.datePlayed
    };
  }
};

const feedbackConverter = {
  toFirestore(feedbackData: WithFieldValue<any>): FeedbackData {
    return {
      message: feedbackData.message,
      stars: feedbackData.stars
    }
  },
  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): FeedbackData {
    const data = snapshot.data(options) as FeedbackData;
    return {
      stars: data.stars,
      message: data.message
    }
  }
}

export function useApiService () {

  const updateScoreToDatabase = (scoreBreakdown: ScoreBreakdown) => {
    const uploadedScore: FirestoreScoreObjectModel = {
      scoreBreakdown: scoreBreakdown,
      datePlayed: generateDatePlayedValue(),
      totalScore: scoreBreakdown.timeScore + scoreBreakdown.gloryBonus + scoreBreakdown.livesBonus
    }
    try {
      const colRef = collection(db, 'leaderboard').withConverter(scoreConverter);
      addDoc(colRef, uploadedScore).then(result => console.log(result))
    } catch (e) {
      console.log(e);
    }
  }

  const getAllScoresFromDatabase = (): Array<FirestoreScoreObjectModel> => {
    const tempArray: Array<FirestoreScoreObjectModel> = [];
    try {
      const colRef =  collection(db, 'leaderboard').withConverter(scoreConverter);
      const querySnapshot = getDocs(colRef);
      querySnapshot.then(result => result.forEach(item => tempArray.push(item.data())))
    } catch (e) {
      console.log(e);
    }
    return tempArray;
  }

  const uploadFeedbackToDatabase = (feedbackData: FeedbackData) => {
    try {
      const colRef = collection(db, 'feedback').withConverter(feedbackConverter);
      addDoc(colRef, feedbackData)
    } catch (e) {
      console.log(e);
    }
  }

  return {
    getAllScoresFromDatabase,
    updateScoreToDatabase,
    uploadFeedbackToDatabase
  }
}
