import React, { Component } from 'react';
import ExchangedCurrency from './Components/CurrencyConverter'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>

        <h2>Higher Order Component Example</h2>
        <ExchangedCurrency/>
      </div>
    );
  }
}