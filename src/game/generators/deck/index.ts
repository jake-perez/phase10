import Card from '../../interfaces/Card';
import NUMBERED_CARDS from '../numberedCards';
import SPECIAL_CARDS from '../specialCards';

const FULL_DECK: Card[] = [...NUMBERED_CARDS, ...SPECIAL_CARDS];

export default FULL_DECK;
