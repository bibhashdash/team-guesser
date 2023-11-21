export enum GameState {
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
