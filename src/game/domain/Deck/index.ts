import FULL_DECK from '../../generators/deck';
import Card from '../../interfaces/Card';

export default class Deck {
  public cards: Card[] = FULL_DECK;

  constructor() {
    this.shuffle();
  }

  get deck(): Card[] {
    return this.cards;
  }

  get remainingCards(): number {
    return this.cards.length;
  }

  get drawCard(): Card | null {
    const card: Card | undefined = this.cards.pop();
    if (card) {
      return card;
    }
    return null;
  }

  private swap(i: number, j: number): void {
    const temp: Card = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = temp;
  }

  private shuffle(): void {
    for (let i = 1; i < 108; i++) {
      const j: number = Math.floor(Math.random() * i);
      this.swap(i, j);
    }
  }
}
