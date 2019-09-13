import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Navbar from "./components/Navbar"
import character from "./character.json"

class App extends Component {
    // setting this.state to the character array
    state = {
        character,
        score: 0,
        highscore: 0
    };

    gameOver = () => {
        // Update highschore if surpassed
        if (this.state.score > this.state.highscore) {
            this.setState({ highscore: this.state.score }, function () {
                console.log(this.state.highscore);
            });
        }
        // count each card as it is clicked
        this.state.character.forEach(card => {
            card.count = 0;
        });
        // alert user to game end and reset score
        alert('Game Over!');
        this.setState({ score: 0 });
        return true;
    }

    // count clicks and shuffle cards on click
    clickCount = id => {
        this.state.character.find((o, i) => {
            if (o.id === id) {
                if (character[i].count === 0) {
                    character[i].count = character[i].count + 1;
                    this.setState({ score: this.state.score + 1 }, function () {
                        console.log(this.state.score);
                    });
                    this.state.character.sort(() => Math.random() - 0.5)
                    return true;
                } else {
                    this.gameOver();
                }
            }
        });
    }

    render() {
        return (
            <Wrapper>
                <Navbar score={this.state.score} highscore={this.state.highscore}>Clicky Memory Game</Navbar>
                {this.state.character.map(card => (
                    <Card
                        clickCount={this.clickCount}
                        id={card.id}
                        key={card.id}
                        image={card.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;