import { Card } from './Card';

export default interface Player {
  name: string;
  totalLossCount: number;
  currentPhase: number;
  isPhaseComplete: boolean;
  cards: Card[];
}
