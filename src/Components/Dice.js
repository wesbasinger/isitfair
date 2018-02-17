import React from 'react';

const getWinnings = (result) => {
    
    switch (result) {
        case 1:
            return 150;
        case 2:
            return 100;
        case 3:
            return 25;
        case 4:
            return 50;
        case 5:
            return 150;
        case 6:
            return 75;
        default:
            return 100;
    }
}

const Dice = (props) => {
    return(
        <div>
            <h1>Dice Game</h1>
            <h2>Instructions</h2>
            <p>
                This game charges a flat rate of $100 per play.
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
                        <td>150</td>
                    </tr>
                    <tr>
                        <td>Two</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Three</td>
                        <td>75</td>
                    </tr>
                    <tr>
                        <td>Four</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Five</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Six</td>
                        <td>125</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={
                (e)=> {
                    const roll = Math.floor(Math.random() * 6) + 1;
                    const winnings = getWinnings(roll) - 100;
                    alert(`You rolled a ${roll}, you win ${winnings}`)
                    props.applyWinnings(winnings)
                }
            }>Roll</button>
        </div>
    )
}

export default Dice;