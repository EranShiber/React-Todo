import React from 'react';
import TodoItem from './TodoItem';



class Todos extends React.Component {
    constructor() {
        super()        
    }
    render() {
        let newTodo = this.props.todos.map(item => {
            return <TodoItem id={item.id} checkMark={this.props.checkMark} key={item.id} title={item.title} completed={item.completed} />
        })
        return(
            <div style={{textAlign: 'center', padding: '10px'}}>
            
           {newTodo} 
            </div>
        )
    }
}

export default Todos;