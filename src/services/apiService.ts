import {FirestoreScoreObjectModel, ScoreBreakdown} from "../utlities/models";
import {
  addDoc,
  collection,
  QueryDocumentSnapshot,
  SnapshotOptions,
  WithFieldValue,
  getDocs,
  QuerySnapshot
} from "firebase/firestore";
import {db} from "../firebase/firebase";
import {useGameControlContext} from "../contexts/gamecontrol";
import {generateDatePlayedValue} from "../utlities/generateDatePlayedValue";
import {useState} from "react";

interface ApiServiceUtils {
  updateScoreToDatabase: (scoreBreakdown: ScoreBreakdown) => void,
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
  const [allDocs, setAllDocs] = useState([])

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

  return {
    getAllScoresFromDatabase,
    updateScoreToDatabase
  }
}
