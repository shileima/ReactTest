import React, { Component } from 'react';

class Child extends Component {

    constructor(props){
        super(props)
        this.state = {
            time: new Date().toTimeString()
        }
    }

    //上级父组件的 props 变化后子组件的 props 变化执行函数
    componentWillReceiveProps(nextProps){
        this.setState({
            time: new Date().toTimeString()
        })
    }

    render() {
        return(<div>
            <button>点击state+1</button>
            <div>Child get props {this.props.number} at {this.state.time}</div>
        </div>)
    }
}

export default Child;