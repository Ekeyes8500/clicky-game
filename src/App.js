import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import './App.css';

let pickedArray = [];
let score = 0;
let topScore = 0;

function importAll(r) {
  return r.keys().map(r);
}

const imageImport = importAll(require.context('./images', false, /\.(png)$/));

Array.prototype.shuffle = function() {
  var input = this;
   
  for (var i = input.length-1; i >=0; i--) {
   
      var randomIndex = Math.floor(Math.random()*(i+1)); 
      var itemAtIndex = input[randomIndex]; 
       
      input[randomIndex] = input[i]; 
      input[i] = itemAtIndex;
  }
  return input;
}


class App extends Component {
  state = {
    images:[],
    score:0,
    topScore:0,
    instructions:"Select a character to begin!"
  }

  scoreCheck = (name) => {
    for (let i = 0; i < pickedArray.length; i++){
      if (pickedArray[i] === name){
        console.log("Failed!")
        pickedArray = [];
        score = 0;
        imageImport.shuffle();
        this.setState({
          images:imageImport,
          score:0,
          instructions:"Incorrect, restarting game!"
        })
        return
      }
    }
    pickedArray.push(name);
    imageImport.shuffle();
    score++;
    if (score > topScore){
      topScore++;
      this.setState({topScore:topScore})
    }
    this.setState({
      images:imageImport,
      score:score,
      instructions:"Correct!"
    })
  }


  componentDidMount(){
    imageImport.shuffle();
    this.setState({images:imageImport})
  }

  render() {
    return (
      <div className="App">
          <Navbar
          instructions={this.state.instructions}
          score={this.state.score}
          topScore={this.state.topScore}
          />
          <div className="container">
            <div className="card-columns">
              {this.state.images.map(image=>(
                <Card
                  key={image}
                  image={image}
                  name={image}
                  scoreCheck={this.scoreCheck}
                />
              ))}

            </div>

          </div>
          
      </div>
    );
  }
}

export default App;
