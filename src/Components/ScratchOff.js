import React from 'react';
import arrayShuffled from 'array-shuffle';

const getSquare = (cash) => {
    
    // user always wins the first round or if cash is low.
    if(cash === 100 || cash < 70) {
        return ['😃', '😃', '😃', '😃',]
    } else if (cash > 100 && cash < 120) {
    // user gets a fair square a few times after winning the first round
        return arrayShuffled(['😃', '😃', '🙁', '🙁']);
    } else {
    // user always looses if their cash is high
        return ['🙁', '🙁', '🙁', '🙁']
    }

}

const ScratchOff = (props) => {
    return(
        <div>
            <h1>Scratch Off</h1>
            <p>
                There are four squares.  There are two smiley faces and two frowny faces.  
                Scratch two by clicking on them.  
                If you reveal two smiley faces then you win.  It is $6 to play and 
                you get $11 for winning.
            </p>
            <p>{getSquare(props.cash)}</p>
        </div>
    )
}

export default ScratchOff;