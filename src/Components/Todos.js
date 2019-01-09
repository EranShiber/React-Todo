import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component {
    constructor() {
        super()
    }
    render() {
        console.log(this.props)
        let newTodo = this.props.todos.map(item => {
            return <TodoItem
                id={item.id}
                deleteTodo={this.props.deleteTodo.bind(this, item)}
                handleCompleteState={this.props.handleCompleteState}
                key={item.id}
                title={item.title}
                time={item.time}
                completed={item.completed} />
        })
        return (
            <div style={{ textAlign: 'center', padding: '10px' }}>
                {newTodo}

            </div>
        )
    }
}

export default Todos;