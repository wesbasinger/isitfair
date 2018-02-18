import React from 'react';

import { Link } from 'react-router-dom';

const Landing = () => {
    return(
        <div>
            <p>Play each of the following games, two are fair and one is not.  Try to determine which one is rigged.</p>
            <div>
                <Link to="/cards">Cards</Link>
            </div>
            <div>
                <Link to="/dice">Dice</Link>
            </div>
            <div>
                <Link to="/scratch">Scratch Off</Link>
            </div>
        </div>
    )
}

export default Landing;