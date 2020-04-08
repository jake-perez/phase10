import ICard from './ICard';

export default interface IPlayer {
  name: string;
  totalLossCount: number;
  currentPhase: number;
  isPhaseComplete: boolean;
  cards: ICard[];
}
