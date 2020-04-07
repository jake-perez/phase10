import Player from '..';

describe('Player', () => {
  it('Should throw error if no cards are passed in constructor', () => {
    const t = () => new Player('Joe');
    expect(t).toThrowError('Please initialize with 10 cards');
  });
});
