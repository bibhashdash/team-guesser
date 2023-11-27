import {FirestoreScoreObjectModel} from "../utlities/models";
import {addDoc, collection, QueryDocumentSnapshot, SnapshotOptions, WithFieldValue, getDocs} from "firebase/firestore";
import {db} from "../firebase/firebase";
import {useGameControlContext} from "../contexts/gamecontrol";
import {generateDatePlayedValue} from "../utlities/generateDatePlayedValue";

interface ApiServiceUtils {
  updateScoreToDatabase: () => void,
  getAllScoresFromDatabase: () => void
}


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

export function useApiService () {
 const {scoreBreakdown} = useGameControlContext();
  const updateScoreToDatabase = () => {
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

  const getAllScoresFromDatabase = () => {
    console.log("hello")
    try {
      const colRef =  collection(db, 'leaderboard').withConverter(scoreConverter);
      getDocs(colRef).then(result => result.docs.length)
    } catch (e) {
      console.log(e);
    }
  }

  return {
    getAllScoresFromDatabase,
    updateScoreToDatabase
  } as ApiServiceUtils
}
