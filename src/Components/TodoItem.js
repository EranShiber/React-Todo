import React from 'react'




class TodoItem extends React.Component {
    render() {
        const titleStyle = {
            textDecoration: this.props.completed ? 'line-through' : 'none'
        }
        return (
            <div className="todoItem" >
                 <h4><i>{this.props.time}</i></h4>
                <input onChange=
                {() => this.props.handleCompleteState(this.props.id)} 
                type="checkbox"
                 handleCompleteState={this.props.completed} />
                <span style={titleStyle}>{this.props.title}</span>
                <button onClick={this.props.deleteTodo}>Delete</button>
                <hr />
            </div>
        )
    }
}

export default TodoItem;