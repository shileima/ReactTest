import React, { Component } from 'react';

class LikeButton extends Component {

    constructor(props){
        super(props)
        this.state = {
            liked : false
        }
    }

/*  constructor OR getInitialState? The two approaches are not interchangeable. You should initialize state in the constructor when using ES6 classes, and define the getInitialState method when using React.createClass.*/

/*    getInitialState(){
        return {liked : false}
    }*/

    handleClick(){
        this.setState({liked : !this.state.liked})
    }

    render() {
        let text = this.state.liked? 'have liked' : 'have not like'
        return(
            <p onClick={this.handleClick.bind(this)}>
                You {text} this, Click to toggle。
            </p>
        )
    }
}

export default LikeButton;