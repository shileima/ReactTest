import React, { Component } from 'react';

class Input extends Component {

    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }

    handleClick(e){
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return(
            <input type="text" value={this.state.value} onChange={this.handleClick.bind(this)} />
            // 为什么 value={this.value} 也可以运行 ?????
        )
    }
}

export default Input;