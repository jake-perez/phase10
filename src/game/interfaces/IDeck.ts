import ICard from './ICard';

type drawCardFunction = () => ICard;

export default interface IDeck {
  cards: ICard[];
  drawCard: drawCardFunction;
  remainingCards: number;
}
