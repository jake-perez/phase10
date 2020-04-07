import Player from '../Player';

describe('Domain', () => {
  it('should test Player Class', () => {
    const player = new Player('Joe');

    expect(player.name).toEqual('Joe');
    expect(player.cards).toHaveLength(0);
  });
});
