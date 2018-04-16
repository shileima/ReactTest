import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Child from './widget.js';
import Counter from './counter.js'

class ComponentMount extends Component {

    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            time: new Date().toTimeString()
        })
        if(this.state.count === 3){
            ReactDOM.unmountComponentAtNode(this.refs.myDiv)
            //this.refs.myDiv.remove();
        }
        //this.refs.myDiv.remove();
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

    shouldComponentUpdate(nextProps,nextState){

        if(this.state.count < 5){
            console.log('Should component update')
            return true;
        }else{
            console.log('Should not component update')
            return false;
        }
    }

    //组件卸载
    componentWillUnmount(){
        console.log('componentWillUnmount')
        debugger
    }

    ClickHandle(){
        this.setState({
            count:this.state.count+1
        })
        //console.log(this.state.count)
    }

    increase(){
        this.setState({
            count:this.state.count+1
        })
    }

    render() {
        return(<div>
            <h5>componentWillMount(){} 挂载前执行</h5>
            <h5>componentDidMount(){} 挂载之后执行</h5>
            <Counter display={this.state.count} />
            <button onClick={this.increase.bind(this)}>
                +
            </button>
            <div onClick={this.ClickHandle.bind(this)}>
                {this.state.count === 3 ? '' :
                <Child number={this.state.count} />
                }
            </div>
        </div>)
    }
}

export default ComponentMount;