import React, { Component } from 'react';

class Counter extends Component{

    render(){
        var textStyle = {
            fontSize: 24,
            color: '#333',
            fontFamily: 'sans-serif',
            fontWeight: 'bold'
        }
        return (
            <div style={textStyle}>
                {this.props.display}
            </div>
        )

    }
}

export default Counter;