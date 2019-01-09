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
  }

  handleCompleteState = (id) => {
    this.setState(oldState => {
      const newTodo = oldState.todos.map(x => {
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


  
  deleteTodo = (e) => {
    this.setState(oldState => {
      let newState = oldState.todos.filter(x => {
        if (x.id !== e.id) {
          return x
        }
        return newState
      })
      return {
        todos: newState
      }
    })
  }

  inputEvent = (e) => {
    this.setState({ userType: e.target.value })
    this.submitEvent = this.submitEvent.bind(this)
  }

  submitEvent = (e) => {
    e.preventDefault()
    if (!this.state.userType) {
      return
    }
    let oldState = this.state.todos;
    oldState.push({
      title: this.state.userType,
      id: Math.random() ,
      completed: false,
      time: `Task from:  ${new Date().getHours()}:0${new Date().getMinutes()}`
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
        <Todos todos={this.state.todos} handleCompleteState={this.handleCompleteState} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
