import Card from '../../interfaces/Card';

const RED: string = 'RED';
const YELLOW: string = 'YELLOW';
const BLUE: string = 'BLUE';
const GREEN: string = 'GREEN';

const ONE: number = 1;
const THREE: number = 3;
const FIVE: number = 5;
const NINE: number = 9;
const TEN: number = 10;

const NUMBER_TYPE: string = 'NUMBER';

const LOW_CARD_STRINGS: string[] = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
const HIGH_CARD_STRINGS: string[] = ['ten', 'eleven', 'twelve'];

const generateCard = (value: number, lossValue: number, type: string, color: string): Card => {
  return {
    color,
    value,
    lossValue,
    type,
    imageCardType: '',
  };
};

const generateLowCards = (colorInput: string): Card[] => {
  return new Array(NINE)
    .fill(ONE)
    .map((_: any, index: number) => generateCard(index + ONE, FIVE, NUMBER_TYPE, colorInput))
    .map((c: any, i: number) => {
      const { color } = c;
      const imageCardType: string = `${color.toLowerCase()}-${LOW_CARD_STRINGS[i]}-card`;
      return { ...c, imageCardType };
    });
};

const generateHighCards = (colorInput: string): Card[] => {
  return new Array(THREE)
    .fill(ONE)
    .map((_, index: number) => generateCard(index + TEN, TEN, NUMBER_TYPE, colorInput))
    .map((c: any, i: number) => {
      const { color } = c;
      const imageCardType: string = `${color.toLowerCase()}-${HIGH_CARD_STRINGS[i]}-card`;
      return { ...c, imageCardType };
    });
};

const generateCardsByColor = (color: string): Card[] => {
  return [...generateLowCards(color), ...generateHighCards(color)];
};

const RED_CARDS: Card[] = [...generateCardsByColor(RED), ...generateCardsByColor(RED)];
const YELLOW_CARDS: Card[] = [...generateCardsByColor(YELLOW), ...generateCardsByColor(YELLOW)];
const BLUE_CARDS: Card[] = [...generateCardsByColor(BLUE), ...generateCardsByColor(BLUE)];
const GREEN_CARDS: Card[] = [...generateCardsByColor(GREEN), ...generateCardsByColor(GREEN)];

const NUMBERED_CARDS: Card[] = [...RED_CARDS, ...YELLOW_CARDS, ...BLUE_CARDS, ...GREEN_CARDS];

export {
  generateCard,
  generateLowCards,
  generateHighCards,
  generateCardsByColor,
  NUMBERED_CARDS,
  RED_CARDS,
  YELLOW_CARDS,
  BLUE_CARDS,
  GREEN_CARDS,
};

export default NUMBERED_CARDS;
