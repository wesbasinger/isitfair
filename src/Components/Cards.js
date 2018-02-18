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
            <main role="main" className="container">
                <div className="starter-template">
                    <div className="jumbotron">
                        <h1 className="display-3">Card Game</h1>
                    </div>
                    <h2>Instructions</h2>
                    <p>
                        This game allows you to place a wager.  You will place your wager
                        first and then draw a card to see what your payout will be.
                        Face cards pay out double the bet, everything else loses.
                    </p>
                    <h2>
                        BET: ${this.state.bet}
                    </h2>
                    <button 
                    type="button" className="btn btn-primary"
                    onClick={
                        (e)=> {
                            if(this.props.cash <= this.state.bet) {
                                alert("You are out of cash and cannot increase your bet.");
                            } else {
                                const incrementBet = this.state.bet + 1
                                this.setState({bet: incrementBet})   
                            }
                        }
                    }>Increase Bet</button>
                    <button 
                    type="button" className="btn btn-primary"
                    onClick={
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
                    <button
                    type="button" className="btn btn-primary"
                    onClick={
                        (e)=> {
                            const card = deck[Math.floor(Math.random()*deck.length)];
                            
                            let winnings;
                            
                            if (card.text === 'J' || card.text === 'Q' || card.text === 'K') {
                                winnings = this.state.bet*2;
                            } else  {
                                winnings = this.state.bet*-1;
                            }
                            
                            this.props.applyWinnings(winnings);
                            
                            this.setState({bet: 0})
                            
                            if (winnings > 0) {
                                alert(`You drew a ${card.text} of ${card.suite}. You win $${winnings}!`);
                            } else {
                                alert(`You drew a ${card.text} of ${card.suite}. You lose $${winnings*-1}!`);
                            }
        
                        }
                    }>Draw Card</button>
                </div>
            </main>
        )
    }
}

export default Cards;