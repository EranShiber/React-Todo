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

  

  render() {
    return (
      <div className="App">
      <Header  />
      <Input />
      <Todos  todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
