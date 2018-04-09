import React, { Component } from 'react';

class TodoApp extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: [],
            curVal:''
        }
    }

    inputChange=(e)=>{
        this.setState({ curVal: e.target.value })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        let{items,curVal} = this.state;
        if (!curVal.length) {
            return;
        }

        this.setState({
            items: [
                {
                    text: curVal,
                    id: Date.now()
                },
                ...items
            ],
            curVal: ''
        });
    }

    delHandle = (id) => {
        let {items} = this.state;
        this.setState({
            items:items.filter((item)=>{
                return item.id !== id;
            })
        })
    }

    render() {
        return(
            <div>
                <h3>TODOS</h3>
                <input
                    onChange = {this.inputChange}
                    value = {this.state.curVal}
                />
                <button onClick={this.handleSubmit}>
                    ADD # {this.state.items.length + 1}
                </button>
                <ul>
                    {/* react 里面 return输出的结果最好用()包含起来 */}
                    {this.state.items.map(item =>
                    <li style={{display:'block',padding:'10px 5px'}}
                        key = {item.id}
                    >
                        <span>{item.text}</span>
                    {/*错误写法: 这里传递过来的应该是函数名,而不是 名称() 带执行, 如果需要传递参数的话
                    就需要把这个函数在一个匿名函数里 return 名称(参数) */}
                        {/*<button onClick={this.delHandle(item.id)}>删除</button>*/}
                        <button onClick={()=>this.delHandle(item.id)}>删除</button>
                    </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default TodoApp;