import React, { Component } from 'react';
import Deck from '../../../game/domain/Deck';
import Card from '../../../game/interfaces/Card';
import './index.scss';

const defaultDeck: Deck = new Deck();

export default class Home extends Component {
  public state = {
    deck: defaultDeck,
    player1Cards: [],
    player2Cards: [],
    card: { imageCardType: '' },
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
      player1Cards: getTenCards(newDeck),
      player2Cards: getTenCards(newDeck),
      card: newDeck.drawCard,
    });
  };

  public render() {
    const { player1Cards, player2Cards, card } = this.state;

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
            <p>Drawn Card</p>
            {card.imageCardType && (
              <img
                className="card-image"
                src={require(`../../images/cards/${card.imageCardType}.png`)}
                alt={'nothing here buddy'}
              />
            )}
          </div>
          <div>
            <p>Player 1</p>
            {player1Cards &&
              player1Cards.map((c: Card, i: number) => {
                return (
                  <img
                    key={`${c.color}-${c.type}-${i}`}
                    className="card-image"
                    src={require(`../../images/cards/${c.imageCardType}.png`)}
                    alt={'nothing here buddy'}
                  />
                );
              })}
          </div>
          <div>
            <p>Player 2</p>
            {player2Cards &&
              player2Cards.map((c: Card, i: number) => {
                return (
                  <img
                    key={`${c.color}-${c.type}-${i}`}
                    className="card-image"
                    src={require(`../../images/cards/${c.imageCardType}.png`)}
                    alt={'nothing here buddy'}
                  />
                );
              })}
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
  return cards;
};
