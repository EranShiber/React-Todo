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
                <form>
                    <input style={inputStyle}
                        type="text"
                        name=""
                        placeholder="Enter todo..." />
                    <input type="submit"
                        value="Add" />
                </form>

            </div>
        )
    }
}
export default Input