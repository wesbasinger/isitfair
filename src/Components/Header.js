import React from 'react';

const Header = (props) => {
    return(
        <div>
            <h1>Isitfair: a game of chance</h1>
            <h2>Cash Balance: {props.cash}</h2>
        </div>
    )
}

export default Header;