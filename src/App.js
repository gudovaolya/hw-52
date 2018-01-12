import React, { Component } from 'react';
import Numbers from './Numbers/Numbers';
import './App.css';


const generateNumbers = function(){

  let numbers = [];
  
  let compareNumeric = (a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  }

  while (numbers.length < 5) {
     
    do {
      var unicNumber = true;
      var randNumber = 5 + Math.floor(Math.random() * (32));

      for (let i = 0; i < numbers.length; i++) {
        if (randNumber === numbers[i]) {
          unicNumber = false;
          break;
        }
      }

    } while (!unicNumber)

    numbers.push(randNumber);

  }
  
  numbers.sort(compareNumeric);
  return  numbers;
  
};

let newNumbers = generateNumbers();

class App extends Component {

  state = {
    newNumbers: newNumbers
  }

  changeNumbers = () => {
    let newNumbers = this.state.newNumbers;
    newNumbers = generateNumbers();
    this.setState({newNumbers});
  }


  render() {
    return (
      <div className="App">       
        <h1>Случайные числа</h1>
        <button onClick={this.changeNumbers}>Change Numbers</button>  
        <div className="numbers">
          <Numbers number = {this.state.newNumbers[0]} />
          <Numbers number = {this.state.newNumbers[1]} />
          <Numbers number = {this.state.newNumbers[2]} />
          <Numbers number = {this.state.newNumbers[3]} />
          <Numbers number = {this.state.newNumbers[4]} />
        </div>
      </div>
    );
  }
}

export default App;
