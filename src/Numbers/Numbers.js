import React, { Component } from 'react';
import './Numbers.css';


const Numbers = (props) => {
  return (   
    <span className="number">{props.number}</span>   
  );
};

export default Numbers;