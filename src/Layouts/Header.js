import React from 'react';

const getStyle = {
    textAlign: 'center',
    backgroundColor: '#ccc'
}

const Header = () => {
    return (
        <header style={getStyle}>
            <h1>Your Todo-List</h1>
        </header>
    )
}
export default Header ;