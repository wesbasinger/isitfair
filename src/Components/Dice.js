import React from 'react';

const getWinnings = (result) => {
    
    switch (result) {
        case 1:
            return 20;
        case 2:
            return 15;
        case 3:
            return 12;
        case 4:
            return 9;
        case 5:
            return 7;
        case 6:
            return 5;
        default:
            return 1;
    }
}

const Dice = (props) => {
    return(
        <main role="main" className="container">
            <div className="starter-template">
                <div className="jumbotron">
                    <h1 className="display-3">Dice Game</h1>
                </div>
                <h2>Instructions</h2>
                <p>
                    This game charges a flat rate of $10 per play.
                    Players will roll the dice and then be awarded based on the outcome according to the table below.
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Outcome</th>
                            <th>Payout</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>One</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Two</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Three</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Four</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Five</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>Six</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
                <button 
                type="button" className="btn btn-primary"
                onClick={
                    (e)=> {
                        const roll = Math.floor(Math.random() * 6) + 1;
                        const winnings = getWinnings(roll) - 10;
                        if(winnings > 0) {
                            alert(`You rolled a ${roll}, you win ${winnings}`)
                        } else {
                            alert(`You rolled a ${roll}, you lose ${winnings*-1}`)
                        }
                        
                        props.applyWinnings(winnings)
                    }
                }>Roll</button>
            </div>
        </main>
    )
}

export default Dice;