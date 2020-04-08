import Card from './Card';

type drawCardFunction = () => Card;

export default interface Deck {
  cards: Card[];
  drawCard: drawCardFunction;
  remainingCards: number;
}
