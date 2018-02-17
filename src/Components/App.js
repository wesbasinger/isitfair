import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Cards from './Cards';
import Dice from './Dice';
import Spinner from './Spinner';


class App extends React.Component {
    
    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/cards" component={Cards} />
                    <Route path="/dice" component={Dice} />
                    <Route path="/spinner" component={Spinner} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App;