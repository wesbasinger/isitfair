import React from 'react';
import { newDeck } from '52-deck';

const deck = newDeck();


class Cards extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            bet: 0
        }
    }
    
    render() {
        return(
            <div>
                <h1>Card Game</h1>
                <h2>Instructions</h2>
                <p>
                    This game allows you place a wager.  You will place your wager
                    first and then draw a card to see what your payout will be.
                    Face cards pay out double the bet, everything else loses.
                </p>
                <p>
                    BET: ${this.state.bet}
                </p>
                <button onClick={
                    (e)=> {
                        if(this.props.cash <= this.state.bet) {
                            alert("You are out of cash and cannot increase your bet.");
                        } else {
                            const incrementBet = this.state.bet + 1
                            this.setState({bet: incrementBet})   
                        }
                    }
                }>Increase Bet</button>
                <button onClick={
                    (e)=> {
                        if(this.state.bet===0) {
                            alert("You cannot bet a negative amount.");
                        } else {
                            const decrementBet = this.state.bet - 1;
                            this.setState({bet: decrementBet});
                        }
                    }
                }>Decrease Bet</button>
                <br />
                <button>Draw Card</button>
            </div>
        )
    }
}

export default Cards;