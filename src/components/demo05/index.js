import React, { Component } from 'react';

class RefDOM extends Component {

    handleClick(){
        //this.refs.myInputText 相当于获取了真实的DOM元素,类似于jQuery的$选择器
        this.refs.myInputText.focus();
        this.refs.myInputText.value = "这是通过this.refs.myInputText.value 来设置的value值"
    }

    render() {
        return(
            <div style={{textAlign:'center', height:"30px"}}>
                <input type="text" ref="myInputText" />
                <input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)} />
            </div>
        )
    }
}

export default RefDOM;