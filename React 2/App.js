import React, { Component } from 'react';
import CustomButton from './components/CustomButton/CustomButton'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    // this.name = "kashif";

    this.state = {
      text: 'hello world',
      showButton: false,

      todoText: null,
      list: []
    }
    console.log('constructor of App')
    /*
      State Advantages: 
      1) Global Access
      2) Runs render function each time when updated
    */
  }

  changeText() {
    this.setState({
      text: 'abcd'
    })
  }

  reverse(e) {
    console.log('e***', e.target.value);
    this.setState({
      text2: e.target.value.split('').reverse().join('')
    })
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    })
  }

  updateAbuName(e) {
    this.setState({
      abuName: e.target.value
    })
  }

  updateAge(e) {
    this.setState({
      age: e.target.value
    })
  }

  storeText(e) {
    this.setState({
      todoText: e.target.value
    })
  }

  //Todo list functions

  add() {
    const { todoText, list } = this.state;
    const newList = list;

    newList.push(todoText);
    this.setState({list: newList, todoText: ''});
  }

  remove(index) {
    const { list } = this.state;
    const newList = list;

    newList.splice(index, 1);
    this.setState({list: newList});
  }

  render() {
    // const { text, text2, showButton, name, abuName, age } = this.state;
    const { list, todoText } = this.state;
    
    return (
      <div className="App">
        <header className="App -header">
          {/* <input onKeyUp={(e) => this.reverse(e)} placeholder="Type Text Here"/>
          <br />
          Input text: <b>{text2}</b>
          <br />
          My text: <b>{text}</b>
          <br />
          <button onClick={() => this.changeText()}>Update the text</button> */}

          {/* <input onKeyUp={(e) => this.updateName(e)} placeholder="Mera Naam"/>
          <br />
          <input onKeyUp={(e) => this.updateAbuName(e)} placeholder="Abu Ka Naam"/>
          <br />
          <input onKeyUp={(e) => this.updateAge(e)} placeholder="Age"/>
          <br />
          {name && abuName && age && <CustomButton text="Submit" name="kashif" bg="red"/>} */}

          <input 
          placeholder="Add any item from here" 
          onChange={(e) => this.storeText(e)}
          value={todoText}
          />

          <button onClick={() => {this.add()}}> Add </button>

          <ul>
            {list.map((item, index) => {
              return <li>{item} <button onClick={() => {this.remove(index)}}> Remove </button></li>
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
