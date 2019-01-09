import React from 'react';

let inputStyle = {
    textAlign: 'center',
    width: '80vh',
    margin: 'auto',
    border: 'none',
    borderBottom: '1px solid #ccc',
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
                        value={this.props.value}
                        onChange={(e) => this.props.inputEvent(e)}
                        placeholder={`Set your goals ${new Date().toJSON().slice(0,10).replace(/-/g,'/')}`} />
                        
                    <input type="submit"
                        value="Add" />
                </form>

            </div>
        )
    }
}
export default Input