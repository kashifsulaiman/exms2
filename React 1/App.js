import React, { Component } from 'react';
import CustomButton from './components/CustomButton/CustomButton'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App -header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello to the world.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <CustomButton text="1" name="kashif" bg="red"/>
          <CustomButton text="2" bg="blue"/>
          <CustomButton text="3" />
          <CustomButton text="4" />
        </header>
      </div>
    );
  }
}

export default App;
