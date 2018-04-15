import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Child extends Component {

    constructor(props){
        super(props)
        this.countTime = 3;
        this.state = {
            time: new Date().toTimeString()
        }
    }

    //上级父组件的 props 变化后子组件的 props 变化执行函数
    componentWillReceiveProps(nextProps){
        this.setState({
            time: new Date().toTimeString()
        })
        //if(this.props.number === 3){
        //    ReactDOM.unmountComponentAtNode(this.refs.myDiv)
        //    //this.refs.myDiv.remove();
        //}
        //this.refs.myDiv.remove();
    }

    //收到新的 props 和 state 判断组件是否应该重新渲染
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate')
        //console.log(nextProps,nextState) //这里是新接收到的 state 和 props
        //console.log(this.props,this.state)
        //return false; // 阻止组件更新,阻止 dom 渲染
        return true; // 允许组件更新,dom 重新渲染
    }

    //组件将要重新渲染,这里不能调用 this.setState({time:1})
    //否则会返回上层重新计算 state 陷入死循环
    componentWillUpdate(nextProps,nextState){
        //this.setState({time:1})
        console.log('componentWillUpdate')
        this.countTime--;
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
        //this.countTime--;
        console.log(this.countTime)
        if(this.countTime>0){
            //setTimeout(()=>{this.forceUpdate()},1000)
            this.forceUpdate()
            //调用 forceUpdate() 会导致组件跳过 shouldComponentUpdate() ，执行 componentWillUpdate() 直接调用 render()。 这将触发子组件的正常生命周期方法，包括每个子组件的 shouldComponentUpdate() 方法。
        }
    }

    render() {
        return(<div ref="myDiv">
            <button>点击state+1</button>
            <div>Child get props {this.props.number} at {this.state.time}</div>
        </div>)
    }
}

export default Child;