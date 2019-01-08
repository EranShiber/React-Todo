import React from 'react'




class TodoItem extends React.Component {
    render() {
        const titleStyle = {
            textDecoration: this.props.completed ? 'line-through' : 'none'
        }
        return (
            <div style={{ padding: 10, width: 300, margin: 'auto' }}>
                <input onChange={() => this.props.checkMark(this.props.id)} type="checkbox"
                 checked={this.props.completed} />
                <span style={titleStyle}>{this.props.title}</span>
                <hr />
            </div>
        )
    }
}

export default TodoItem;