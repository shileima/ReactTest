import React, { Component } from 'react';

class ComponentRecycle extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: '初始化 0',
            unMount: true
        }
        console.log('CildRecycle constructor')
    }

    handleClick(){
        console.log('更新props')
        this.setState({
            count: '点击后 1'
        })
    }
    unMountClick(){
        console.log('干掉子组件')
        this.setState({
            unMount: false
        })
    }

    render(){
        return (
            <div>
                <p>state->父组件count: {this.state.count}</p>
                {
                    this.state.unMount? <ComponentChild data={this.state.count}/> : null
                }
                <button onClick={()=>{return this.handleClick()}}>父组件里改变count值</button><br/>
                <button onClick={()=>{return this.unMountClick()}}>父组件里干掉子组件</button>
            </div>
    )
    }
}
class ComponentChild extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: 'old data'
        }
        console.log('ComponentRecycle constructor')
    }

    componentDidMount(){
        console.log('component Did Mount ' )
    }

    componentWillMount(){
        console.log('component Will Mount ')
    }

    componentWillReceiveProps(nextProps){
        console.log('component Will Receive Props')
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('should Component Update')
        if(nextState.data !== this.state.data){
            return true;
        }
        if(nextProps.data !== this.props.data){
            return true;
        }
        return false;
    }

    componentWillUpdate(){
        console.log('Component Will Update')
    }

    componentDidUpdate(){
        console.log('Component Did Update')
    }

    //组件卸载
    componentWillUnmount(){
        console.log('component Will Unmount')
    }

    ClickHandle(){
        this.setState({
            data: 'new data'
        })
    }

    render() {
        console.log('render')
        return(
            <div>
                <p>子组件state->data: {this.props.data}</p>
                <button onClick={()=>{return this.ClickHandle()}}>子组件更新，看log</button>
            </div>
        )
    }
}

export default ComponentRecycle;
