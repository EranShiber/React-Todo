import React from 'react';

let inputStyle = {
    textAlign: 'center',
    width: '80vh',
    margin: 'auto',
    border: 'none',
    borderBottom: '1px solid lightblue',
    outline: 'none'
}

class Input extends React.Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <form
                 onSubmit={(e) => this.props.submitEvent(e)}>
                    <input style={inputStyle}
                        type="text"
                        name="name"
                        onChange={(e) => this.props.inputEvent(e)}
                        placeholder="Enter todo..." />
                        
                    <input type="submit"
                        value="Add" />
                </form>

            </div>
        )
    }
}
export default Input