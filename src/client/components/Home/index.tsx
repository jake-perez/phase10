import React, { Component } from 'react';
import Deck from '../../../game/domain/Deck';
import Card from '../../../game/interfaces/Card';
import redCardImage from '../../images/cards/red-three-card.png';
import './index.scss';

const defaultDeck: Deck = new Deck();

export default class Home extends Component {
  public state = {
    deck: defaultDeck,
    player1Cards: [],
    player2Cards: [],
    card: null,
  };

  public componentDidMount() {
    const { deck } = this.state;
    this.setState({
      player1Cards: getTenCards(deck),
      player2Cards: getTenCards(deck),
      card: deck.drawCard,
    });
  }

  public drawCard = () => {
    this.setState({
      card: this.state.deck.drawCard,
    });
  };

  public newDeck = () => {
    const newDeck: Deck = new Deck();
    this.setState({
      deck: newDeck,
    });
  };

  public render() {
    const { player1Cards, player2Cards, card } = this.state;
    // console.log('deck', deck);
    return (
      <div className="Home">
        <header className="Home-header">
          <p>Phase 10 Game</p>
        </header>
        <div className="Home-body">
          <button className="buttons" onClick={this.newDeck}>
            New Deck
          </button>
          <button className="buttons" onClick={this.drawCard}>
            Draw Card
          </button>
          <div>
            <p>Card</p>
            {JSON.stringify(card, null, 2)}
          </div>
          <div>
            <p>Player 1</p>
            {player1Cards && JSON.stringify(player1Cards, null, 2)}
          </div>
          <div>
            <p>Player 2</p>
            {player2Cards && JSON.stringify(player2Cards, null, 2)}
          </div>
          <div>
            <img className="card-image" src={redCardImage} alt={'nothing here buddy'} />
          </div>
        </div>{' '}
      </div>
    );
  }
}

const getTenCards = (deck: Deck): any[] | null => {
  const cards: Card[] = [];
  for (let i = 0; i < 10; i++) {
    const card: null | Card = deck.drawCard;
    if (!card) {
      return null;
    } else {
      cards.push(deck.drawCard!);
    }
  }
  return cards.map((card: Card) => {
    return [card.type, card.value, card.color];
  });
};
