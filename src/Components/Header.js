import React from 'react';

import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <div>
            <h1>Isitfair: a game of chance</h1>
            <h2>Cash Balance: {props.cash}</h2>
            <Link to='/dice'>Play Dice</Link>
            <Link to='/cards'>Play Cards</Link>
            <Link to='/scratch'>Play Scratch Off</Link>
        </div>
    )
}

export default Header;