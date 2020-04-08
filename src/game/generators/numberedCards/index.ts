import ICard from '../../interfaces/ICard';

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

const generateCard = (value: number, lossValue: number, type: string, color: string): ICard => {
  return {
    color,
    value,
    lossValue,
    type,
  };
};

const generateLowCards = (color: string): ICard[] => {
  return new Array(NINE)
    .fill(ONE)
    .map((_: any, index: number) => generateCard(index + ONE, FIVE, NUMBER_TYPE, color));
};

const generateHighCards = (color: string): ICard[] => {
  return new Array(THREE)
    .fill(ONE)
    .map((_, index: number) => generateCard(index + TEN, TEN, NUMBER_TYPE, color));
};

const generateCardsByColor = (color: string): ICard[] => {
  return [...generateLowCards(color), ...generateHighCards(color)];
};

const RED_CARDS: ICard[] = [...generateCardsByColor(RED), ...generateCardsByColor(RED)];
const YELLOW_CARDS: ICard[] = [...generateCardsByColor(YELLOW), ...generateCardsByColor(YELLOW)];
const BLUE_CARDS: ICard[] = [...generateCardsByColor(BLUE), ...generateCardsByColor(BLUE)];
const GREEN_CARDS: ICard[] = [...generateCardsByColor(GREEN), ...generateCardsByColor(GREEN)];

const NUMBERED_CARDS: ICard[] = [...RED_CARDS, ...YELLOW_CARDS, ...BLUE_CARDS, ...GREEN_CARDS];

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
