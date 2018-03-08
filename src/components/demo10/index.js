import React, { Component } from 'react';
import axios from 'axios';

class Axio extends Component {

    constructor(props) {
      super(props);
      this.state = {
        posts: []
      };
    }
  
    componentDidMount() {
      axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`).then(res => {
          const posts = res.data.data.children.map(item => item.data);
          this.setState({ posts });
        });
    }
  
    render() {
      return (
        <div>
          <span>有关: </span><b>{`${this.props.subreddit}`}</b><span> 的搜索</span>
          <ol>
            {this.state.posts.map(item =>
              <li key={item.id}><a href={item.url}>{item.title}</a></li>
            )}
          </ol>
        </div>
  
      );
  
    }
  
  }

export default Axio;