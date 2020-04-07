import { Card } from './Card';

export default interface Deck {
  cards: Card[];
  drawCard: Function;
  remainingCards: number;
}
