import Deck from '..';
import Card from '../../../interfaces/Card';

describe('Deck Class', () => {
  it('should return a deck', () => {
    const deck: Deck = new Deck();

    expect(deck.deck).toHaveLength(108);
  });

  it('should draw cards from a deck', () => {
    const deck: Deck = new Deck();
    const card: Card = deck.drawCard!;

    expect(card).not.toBeNull();
  });

  it('should get remaining card number', () => {
    const deck: Deck = new Deck();

    const card: Card = deck.drawCard!;
    const card2: Card = deck.drawCard!;

    expect(deck.remainingCards).toEqual(106);
    expect(card).not.toEqual(card2);
  });

  it('should shuffle a deck randomly everytime', () => {
    const deck1: Deck = new Deck();
    const deck2: Deck = new Deck();

    expect(deck1.drawCard).not.toEqual(deck2.drawCard);
  });

  it('should return null when deck is empty', () => {
    const deck: Deck = new Deck();
    let card: Card | null = null;
    for (let i = 0; i < 108; i++) {
      card = deck.drawCard;
    }
    card = deck.drawCard;

    expect(card).toBeNull();
  });
});
