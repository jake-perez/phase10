import * as cards from '../';

describe('Numbered Cards', () => {
  it('should export correct functions', () => {
    expect(Object.keys(cards).sort()).toEqual(
      [
        'generateCard',
        'generateCardsByColor',
        'generateHighCards',
        'generateLowCards',
        'default',
        'BLUE_CARDS',
        'RED_CARDS',
        'YELLOW_CARDS',
        'GREEN_CARDS',
        'NUMBERED_CARDS',
      ].sort(),
    );
  });

  it('should generate a card', () => {
    const result = cards.generateCard(1, 5, 'NUMBER', 'RED');

    expect(result).toEqual({
      color: 'RED',
      lossValue: 5,
      type: 'NUMBER',
      value: 1,
      imageCardType: '',
    });
  });

  it('generate low cards', () => {
    const result = cards.generateLowCards('YELLOW');

    expect(result).toMatchObject([
      {
        color: 'YELLOW',
        lossValue: 5,
        type: 'NUMBER',
        value: 1,
      },
      {
        color: 'YELLOW',
        lossValue: 5,
        type: 'NUMBER',
        value: 2,
      },
      {
        color: 'YELLOW',
        lossValue: 5,
        type: 'NUMBER',
        value: 3,
      },
      {
        color: 'YELLOW',
        lossValue: 5,
        type: 'NUMBER',
        value: 4,
      },
      {
        color: 'YELLOW',
        lossValue: 5,
        type: 'NUMBER',
        value: 5,
      },
      {
        color: 'YELLOW',
        lossValue: 5,
        type: 'NUMBER',
        value: 6,
      },
      {
        color: 'YELLOW',
        lossValue: 5,
        type: 'NUMBER',
        value: 7,
      },
      {
        color: 'YELLOW',
        lossValue: 5,
        type: 'NUMBER',
        value: 8,
      },
      {
        color: 'YELLOW',
        lossValue: 5,
        type: 'NUMBER',
        value: 9,
      },
    ]);
  });

  it('should generate high cards', () => {
    const result = cards.generateHighCards('GREEN');

    expect(result).toMatchObject([
      {
        color: 'GREEN',
        lossValue: 10,
        type: 'NUMBER',
        value: 10,
      },
      {
        color: 'GREEN',
        lossValue: 10,
        type: 'NUMBER',
        value: 11,
      },
      {
        color: 'GREEN',
        lossValue: 10,
        type: 'NUMBER',
        value: 12,
      },
    ]);
  });

  it('verify numbered cards', () => {
    expect(cards.NUMBERED_CARDS).toHaveLength(96);
    expect(cards.RED_CARDS).toHaveLength(24);
    expect(cards.YELLOW_CARDS).toHaveLength(24);
    expect(cards.BLUE_CARDS).toHaveLength(24);
    expect(cards.GREEN_CARDS).toHaveLength(24);
  });
});
