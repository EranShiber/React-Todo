import React from 'react'




class TodoItem extends React.Component {
    render() {
        const titleStyle = {
            textDecoration: this.props.completed ? 'line-through' : 'none'
        }
        return (
            <div style={{padding: 10, width: 300, margin: 'auto'}}>
                <input type="checkbox" checked={this.props.completed}/>
                <span style={titleStyle}>{this.props.title}</span>
                <hr />
                <p>Change</p>
            </div>
        )
    }
}

export default TodoItem;