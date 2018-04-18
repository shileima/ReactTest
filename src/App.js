import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.css';
import {createStore} from 'redux';
import 'whatwg-fetch'; 
import 'es6-promise';



let store = createStore(counter)

function counter(state=0,action){
  switch(action.type){
      case 'INCREMENT':
          return state + 1;
      case 'DECREMENT':
          return state -1;
      default:
          return state;
  }
}

function Increment(){
  store.dispatch({type : 'INCREMENT'})
}

function Decrement(){
  store.dispatch({type : 'DECREMENT'})
}

store.subscribe(() => {
  console.log('current state ' + store.getState())
})

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      fetchData : ''
    }
  }

  componentDidMount(){
    // 箭头函数没有this指向,所以componentDidMount下的所有this指向class组件DidMount
    let result = fetch('/api/get', {
      credentials: 'include',
      headers: {
          'Accept': 'application/json, text/plain, */*'
      }
    });
      
    result.then(res => {
      return res.text()
    }).then(text => {
      this.setState({
        fetchData : text
      })
    })  
    
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className={style.red}>Welcome Here!</h1>
        </header>
        <h3 className="App-intro">
          Created by Loading
        </h3>
        <button onClick={ Increment }>打印状态增加</button>
        <button onClick={ Decrement }>打印状态减少</button>
        {/* this.props.fetchData是从父组件传递过来的值；this.state.fetchData 是自定义的状态值 */}
        <div>{this.state.fetchData}</div> 
      </div>
    );
  }
}

export default Home;
