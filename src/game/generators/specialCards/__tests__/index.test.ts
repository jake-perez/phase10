import { WildCard, SkipCard, SPECIAL_CARDS } from '..';
import { Card } from '../../../interfaces/Card';

describe('Special Cards', () => {
  it('should make sure wildcard has correct values', () => {
    const wildcard: Card = WildCard;

    expect(wildcard).toEqual({
      color: null,
      value: null,
      lossValue: 25,
      type: 'WILD',
    });
  });
});
