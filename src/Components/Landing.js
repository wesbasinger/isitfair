import React from 'react';

import { Link } from 'react-router-dom';

const Landing = () => {
    return(
        <main role="main" className="container">
            <div className="starter-template">
                <p>
                    Play each of the following games, two are fair and one is not.
                    By fair I mean that I have not altered the probability outcomes
                    or lied about how the game operates.
                    Try to determine which one is rigged.  I suggest that you experiment
                    quite a bit.
                </p>
                <div className="card card-body bg-light">
                    <Link to="/cards"><h1><span role="img" aria-label="cards">🃏 Cards</span></h1></Link>
                </div>
                <div className="card card-body bg-light">
                    <Link to="/dice"><h1><span role="img" aria-label="dice">🎲 Dice</span></h1></Link>
                </div>
                <div className="card card-body bg-light">
                    <Link to="/scratch"><h1><span role="img" aria-label="scratch-off">🎰 Scratch Off</span></h1></Link>
                </div>
            </div>
        </main>
    )
}

export default Landing;