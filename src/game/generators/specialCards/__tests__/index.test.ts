import { WildCard, SkipCard, SPECIAL_CARDS } from '..';
import ICard from '../../../interfaces/ICard';

describe('Special Cards', () => {
  it('should make sure wildcard has correct values', () => {
    const wildCard: ICard = WildCard;

    expect(wildCard).toEqual({
      color: null,
      value: null,
      lossValue: 25,
      type: 'WILD',
    });
  });

  it('should make sure skipcards has correct values', () => {
    const skipCard: ICard = SkipCard;

    expect(skipCard).toEqual({
      color: null,
      value: null,
      lossValue: 15,
      type: 'SKIP',
    });
  });

  it('should have 8 wilds and 4 skips', () => {
    const specialCards: ICard[] = SPECIAL_CARDS;

    expect(specialCards.filter((e) => e.type === 'WILD')).toHaveLength(8);
    expect(specialCards.filter((e) => e.type === 'SKIP')).toHaveLength(4);
  });
});
