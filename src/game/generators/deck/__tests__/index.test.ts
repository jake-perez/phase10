import Card from '../../../interfaces/Card';
import { generateNewDeck } from '..';

describe('Full Deck', () => {
  it('should be a full deck', () => {
    const deck: Card[] = generateNewDeck();
    expect(deck).toHaveLength(108);
  });

  it('should not have any undefined cards', () => {
    const deck: Card[] = generateNewDeck();

    const filteredCards: Card[] = deck.filter((card: Card) => card === null);

    expect(filteredCards).toHaveLength(0);
  });
});
