import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    
    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
          this.props.onIncrement()
        }
    }
    
    incrementAsync = function() {
    setTimeout(this.props.onIncrement, 1000)
    }

    render(){
        const { value, onIncrement, onDecrement } = this.props
        return (
            <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd.bind(this)}>
        {/* 也可以写成以下形式,但是 初始化state的时候,增加 this.incrementIfOdd.bind(this) */}
        {/* <button onClick={this.incrementIfOdd}> */}
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync.bind(this)}>
          Increment async
        </button>
      </p>
        )
    }
}  //组件定义结束

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter;