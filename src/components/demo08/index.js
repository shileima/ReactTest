import React, { Component } from 'react';

class DidMount extends Component {
    constructor(props){
        super(props)
        this.state = {
            opacity: 1
        }
    }

    componentWillMount(){
        clearInterval(this.timer)
    }

    componentDidMount(){
        // 箭头函数没有this指向,所以componentDidMount下的所有this指向class组件DidMount
        this.timer = setInterval(() => { 
            let opacity = this.state.opacity
            opacity -= 0.1
            if(opacity <= 0.1){
                opacity = 0.1
            }
            this.setState({
                opacity: opacity
            })
        },1000)
    }

    render() {
        return(
            <h3 style={{opacity : this.state.opacity}}>
                Hello {this.props.title} {' '} {this.state.opacity}
            </h3>
        )
    }
}

export default DidMount;