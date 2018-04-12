import React, { Component } from 'react';
import Child from './widget.js';

class ComponentMount extends Component {

    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    componentDidMount(){
        this.setState({
            count:2
        })
        console.log('I did mounted! 挂载完成后 ' + this.state.count)
    }

    componentWillMount(){
        this.setState({
            count:1
        })
        console.log('I will mount!挂载之前 ' + this.state.count)
    }

    ClickHandle(){
        this.setState({
            count:this.state.count+1
        })
        //console.log(this.state.count)
    }

    render() {
        return(<div>
            <h5>componentWillMount(){} 挂载前执行</h5>
            <h5>componentDidMount(){} 挂载之后执行</h5>
            <div onClick={this.ClickHandle.bind(this)}>
                <Child number={this.state.count} /> {/*把父组件的值传递给子组件使用*/}
            </div>
        </div>)
    }
}

export default ComponentMount;