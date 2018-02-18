import React from 'react';
import arrayShuffled from 'array-shuffle';

const getSquare = (cash) => {
    
    // user always wins the first round or if cash is low.
    if(cash === 100 || cash < 70) {
        return ['😃', '😃', '😃', '😃']
    } else if (cash > 100 && cash < 120) {
    // user gets a fair square a few times after winning the first round
        return arrayShuffled(['😃', '😃', '🙁', '🙁']);
    // user gets a favorable square if they are slightly below 100
    } else if (cash => 70 && cash < 100) {
        return arrayShuffled(['😃', '😃', '😃', '🙁'])
    } else {
    // user always looses if their cash is high
        return ['🙁', '🙁', '🙁', '🙁']
    }

}

class ScratchOff extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            square: getSquare(props.cash),
            box: ['◼', '◼', '◼', '◼'],
            faces: []
        }
        
        this.handleBoxClick = this.handleBoxClick.bind(this);
        this.handleRedeem = this.handleRedeem.bind(this);
    }
    
    handleRedeem() {
        
        if(this.state.faces.length < 2) {
            alert("You have not scratched off two boxes yet.")
        } else {
            if(this.state.faces[0] === '😃' && this.state.faces[1] === '😃') {
                this.props.applyWinnings(5)
                alert('You scratched off 😃 and 😃.  You won $5!')
                this.setState({
                    square: getSquare(this.props.cash),
                    box: ['◼', '◼', '◼', '◼'],
                    faces: []
                })
            } else {
                this.props.applyWinnings(-6);
                alert(`You scratched off ${this.state.faces[0]} and ${this.state.faces[1]}.  Sorry, you lose.`);
                this.setState({
                    square: getSquare(this.props.cash),
                    box: ['◼', '◼', '◼', '◼'],
                    faces: []
                })
            }   
        }
    }
    
    handleBoxClick(event) {
        
        if(this.state.faces.length >= 2) {
            alert("You have already clicked two boxes.  Please redeem your ticket.")
        } else {
            // get a reference to which box got clicked
            const index = Number(event.target.value)
            
            // make a copy of what faces the user has revealed
            const currFaces = this.state.faces;
            
            // make a copy of the gameboard at current time
            const newBox = this.state.box;
            
            // change the gameboard to match the click
            newBox[index] = this.state.square[index]
            
            // push the new face into the faces array
            currFaces.push(this.state.square[index])
            
            this.setState({
                // update the user's choices
                faces: currFaces,
                // set the state of the board to new gameboard
                box: newBox
            })
        }
    }
    
    
    render() {
        
        return(
            <main role="main" className="container">
                <div className="starter-template">
                    <div className="jumbotron">
                        <h1 className="display-3">Scratch Off</h1>
                    </div>
                    <h2>Instructions</h2>
                    <p>
                        There are four squares.  There are two smiley faces and two frowny faces.  
                        Scratch two by clicking on them.  
                        If you reveal two smiley faces then you win.  It is $6 to play and 
                        you get $11 for winning.
                    </p>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td className="box-square"><button value="0" onClick={this.handleBoxClick}>{this.state.box[0]}</button></td>
                                <td className="box-square"><button value="1" onClick={this.handleBoxClick}>{this.state.box[1]}</button></td>
                            </tr>
                            <tr>
                                <td className="box-square"><button value="2" onClick={this.handleBoxClick}>{this.state.box[2]}</button></td>
                                <td className="box-square"><button value="3" onClick={this.handleBoxClick}>{this.state.box[3]}</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-primary"
                            onClick={this.handleRedeem}>Redeem</button>
                </div>
            </main>
        )
    }
}

export default ScratchOff;