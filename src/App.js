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
  render() {
    return (
      <div className="App">       
        <h1>Случайные числа</h1>
        <div className="numbers">
          <Numbers number = {newNumbers[0]} />
          <Numbers number = {newNumbers[1]} />
          <Numbers number = {newNumbers[2]} />
          <Numbers number = {newNumbers[3]} />
          <Numbers number = {newNumbers[4]} />
        </div>
      </div>
    );
  }
}

export default App;
