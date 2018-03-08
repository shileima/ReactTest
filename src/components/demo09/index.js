import React, { Component } from 'react';
import axios from 'axios';

class Ajax extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : '',
            lastGistUrl : ''
        };
    }

    //函数在进入状态之后调用
    componentDidMount() { 
      axios.get(this.props.source).then(
        result => {
          var lastGist = result.data[0]
          console.log(lastGist.owner.login)
          this.setState({
            username : lastGist.owner.login,
            lastGistUrl : lastGist.owner.html_url
          })
          console.log(this.state)
        }
      )
    } 
    
    render(){
        return (
           <div>
                {this.state.username}'s last gist is
                <a href={this.state.lastGistUrl}>here</a>.
           </div>
        )
    }
}

export default Ajax;