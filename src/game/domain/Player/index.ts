import Card from '../../interfaces/ICard';

export default class Player {
  public _name: string = `Player_${Math.random() * 1000}`; // Random Name unless set
  public _cards: Card[];
  public _currentPhase: number = 1; // Initialized to 1
  public _currentLossCount: number = 0; // Initialized to 0

  constructor(name: string, cards: Card[] = []) {
    this._name = name || this._name;
    if (!cards || cards.length !== 10) {
      throw new Error('Please initialize with 10 cards');
    }
    this._cards = cards;
  }

  get cards(): Card[] {
    return this._cards;
  }

  get name(): string {
    return this._name;
  }

  set phase(phaseNumber: number) {
    this._currentPhase = phaseNumber;
  }

  get phase(): number {
    return this._currentPhase;
  }
}
