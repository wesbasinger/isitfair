import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Cards from './Cards';
import Dice from './Dice';
import ScratchOff from './ScratchOff';


class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            cash: 100
        }
        
        this.applyWinnings = this.applyWinnings.bind(this);
    }
    
    applyWinnings(winnings) {
        const currentCash = this.state.cash;
        this.setState({cash: currentCash + winnings})
    }
    

    render() {
        return(
            <div>
                <Header cash={this.state.cash} />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/cards" render={()=><Cards cash={this.state.cash}
                                                            applyWinnings={this.applyWinnings}/>} />
                    <Route path="/dice"  render={()=><Dice applyWinnings={this.applyWinnings}/>}/>
                    <Route path="/scratch" component={ScratchOff} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App;