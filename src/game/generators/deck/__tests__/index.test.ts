import Card from '../../../interfaces/Card';
import FULL_DECK from '..';

describe('Full Deck', () => {
  it('should be a full deck', () => {
    const deck: Card[] = FULL_DECK;
    expect(deck).toHaveLength(108);
  });
});
