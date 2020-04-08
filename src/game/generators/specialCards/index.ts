import ICard from '../../interfaces/ICard';

const WildCard: ICard = {
  color: null,
  value: null,
  lossValue: 25,
  type: 'WILD',
};

const SkipCard: ICard = {
  color: null,
  value: null,
  lossValue: 15,
  type: 'SKIP',
};

/**
 * 8 - Wild Cards
 * 4 - Skip Cards (Technically they are blue, but currently won't
 *                 be using color, null for now)
 */
const SPECIAL_CARDS: ICard[] = [
  WildCard,
  WildCard,
  WildCard,
  WildCard,
  WildCard,
  WildCard,
  WildCard,
  WildCard,
  SkipCard,
  SkipCard,
  SkipCard,
  SkipCard,
];

export { WildCard, SkipCard, SPECIAL_CARDS };

export default SPECIAL_CARDS;
