import React, { Component } from 'react';
import Todos from './Components/Todos';
import Input from './Components/Input';

import Header from './Layouts/Header'
import './Layouts/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      userType: ""
    }
    this.inputEvent = this.inputEvent.bind(this)
    this.submitEvent = this.submitEvent.bind(this)
  }

  checkMark = (id) => {
    this.setState(oldState => {
      const newTodo = oldState.todos.map(x => {
        console.log(x)
        if (x.id === id) {
          x.completed = !x.completed
        }
        return x
      })
      return {
        todos: newTodo
      }
    })
  }


  inputEvent = (e) => {
    this.setState({ userType: e.target.value })
    this.submitEvent = this.submitEvent.bind(this)
  }

  submitEvent = (e) => {
    e.preventDefault()
    let oldState = this.state.todos;
    oldState.push({
      title: this.state.userType,
      id: Math.random(),
      completed: false
    })
    this.setState({
      todos: oldState,
      userType: ''
    })

  }


  render() {
    return (
      <div className="App">
        <Header />
        <Input inputEvent={this.inputEvent} submitEvent={this.submitEvent} value={this.state.userType} />
        <Todos todos={this.state.todos} checkMark={this.checkMark} />
      </div>
    );
  }
}

export default App;
