import { Card } from '../interfaces/Card';

export default class Player {
  _name: string = `Player_${Math.random() * 1000}`;
  _cards: Card[] = [];

  constructor(name: string, cards: Card[] = []) {
    this._name = name || this._name;
    this._cards = cards;
  }

  get cards(): Card[] {
    return this._cards;
  }

  get name(): string {
    return this._name;
  }
}
