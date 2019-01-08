import React, { Component } from 'react';
import Todos from './Components/Todos';
import Input from './Components/Input';

import Header from './Layouts/Header'
import './Layouts/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          title: 'do home work',
          completed: false,
          id: 1
        },
        {
          title: 'gym',
          completed: false,
          id: 2
        },
        {
          title: 'learn react',
          completed: true,
          id: 3
        },
      ]
    }
  }

  inputEvent = (e) => {
    console.log(e)
    console.log(e.target.value)
  }
  submitEvent = (e) => {
    e.preventDefault()
    console.log()
    console.log(this.state)
  }
  

  render() {
    return (
      <div className="App">
      <Header  />
      <Input inputEvent={this.inputEvent} submitEvent={this.submitEvent} />
      <Todos  todos={this.state.todos}
/>
      </div>
    );
  }
}

export default App;
