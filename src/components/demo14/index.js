import React, { Component } from 'react';

class TodoApp extends Component {

    constructor(props){
        super(props)
        this.state = {items: [],text: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(e){
        this.setState({ text: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        })); 
        console.log(this.state.items)
    }

    render() {
        return(
            <div>
                <h3>TODOS</h3>
                <TodoList items = {this.state.items} />
                <form onSubmit = {this.handleSubmit}>
                    <input
                        onChange = {this.handleChange}
                        value = {this.state.text}
                    />
                    <button>
                        ADD # {this.state.items.length + 1}
                    </button>
                </form>
            </div>
        )
    }
}

class TodoList extends Component{
    render() {
        return(
            <ul>
                {/* react 里面 return输出的结果最好用()包含起来 */}
                {this.props.items.map(item => 
                        <li key = {item.id}>{item.text}</li>
                )}
            </ul>
        )
    }
}

export default TodoApp;