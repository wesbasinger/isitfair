import React from 'react';

import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="/"><h1>Life isn't Fair</h1> :a game of chance</a>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to='/dice'>Play Dice</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/cards'>Play Cards</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to='/scratch'>Play Scratch Off</Link>
                    </li>
                </ul>
            </div>
            <span>
                <h2 className="cash-balance">Cash Balance: ${props.cash}</h2>
            </span>
        </nav>
    )
}

export default Header;