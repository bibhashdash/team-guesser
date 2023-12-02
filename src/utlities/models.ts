export enum GameState {
  gameDefault = 'gameDefault',
  gameStarted = 'gameStarted',
  gameOver = 'gameOver',
}

export interface IconProps {
  color: string;
  size: number;
}
export enum InputTab {
  oneByOne = 'oneByOne',
  goForGlory = 'goForGlory',
}

export enum GameResult {
  win = 'win',
  loss = 'loss',
  default = 'default',
}

export interface ScoreBreakdown {
  timeScore: number,
  livesBonus: number,
  gloryBonus: number,
}

export interface FirestoreScoreObjectModel {
  totalScore: number,
  scoreBreakdown: ScoreBreakdown,
  datePlayed: string,
}


export interface FeedbackData {
  stars: number,
  message: string,
}
