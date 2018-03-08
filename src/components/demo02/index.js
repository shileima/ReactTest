import React, { Component } from 'react';

class Tick extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    //函数在进入状态之后调用
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    //will 表示函数在进入之前调用
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    
    render(){
        return (
            <h2>
                {this.state.date.toLocaleString()}
            </h2>
        )
    }
}
export default Tick;