import Card from '../../interfaces/Card';
import NUMBERED_CARDS from '../numberedCards';
import SPECIAL_CARDS from '../specialCards';

const FULL_DECK: Card[] = [...NUMBERED_CARDS, ...SPECIAL_CARDS];

const generateNewDeck = (): Card[] => {
  return [...FULL_DECK];
};

export { FULL_DECK, generateNewDeck };

export default generateNewDeck;
