import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Router, Route, hashHistory } from 'react-router'; // @4 之前版本配置方式
import { BrowserRouter, Switch, Route } from 'react-router-dom'; // @4 版本路由配置
// import axios from 'axios';
import './index.css';
// import PropTypes from 'prop-types';
import Home from './App';
// import ArrayItem from './components/demo01';
// import Tick from './components/demo02';
// import NoteList from './components/demo03';
// import PropType from './components/demo04';
// import RefDOM from './components/demo05';
// import LikeButton from './components/demo06';
// import Input from './components/demo07';
 import DidMount from './components/demo08';
// import Ajax from './components/demo09';
// import Axios from './components/demo10';
//import Counter from './components/demo11';
//import TodoApp from './components/demo14';
import TodoApp from './components/demo15';
import ComponentMount from './components/demo16';

// import counter from './reducers';

import registerServiceWorker from './registerServiceWorker';
import HomeHeader from './components/HomeHeader';
import './static/css/common.less'
import './static/css/font.css'

const App = () => (
    <div>
        <Header />
        <Main />
        {/* <button onClick={this.Back.bind(this)}>返回</button> */}
        {/* <button onClick={this.Goback.bind(this)}>返回上一页</button> */}
        <TodoApp />
        <DidMount />
        <ComponentMount />
    </div>
)

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            {/* <Route exact path='/' component={Home}/>
            <Route path='/array' component={ArrayItem}/>
            <Route path='/tick' component={Tick}/>
            <Route path='/refdom' component={RefDOM}/>
            <Route path='/likebutton' component={LikeButton}/>
            <Route path='/input' component={Input}/>
            <Route path='/didmount' render={() => <DidMount title="OPACITY CHANGE" /> } />
            <Route path='/notelist' render={() =>
            <NoteList>
            <span>Hello</span>
            <span>World</span>
            </NoteList> } />
            <Route path='/proptype' render={() => <PropType title={data} />} />
            <Route path='/ajax' render={() => <Ajax source="https://api.github.com/users/octocat/gists" ></Ajax> } />
            <Route path='/axios' render={() => <Axios subreddit="reactjs"></Axios> } />
            <Route path='/counter' render={() => <Counter
            value={store.getState()}
            // 改变内部state状态的唯一方法就是dispatch一个action,通过用户行为来触发,
            // 给store.dispatch()传递一个对象(里面至少有type),type的值就是reducer函数里
            // 定义不同case状态
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })} /> } />
            <Route path='/reduxstate' /> */}
        </Switch>
    </main>
)

const Header = () => (
    <header>
        {/* <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/array'>ArrayItem</Link></li>
                <li><Link to='/tick'>Tick</Link></li>
                <li><Link to='/refdom'>RefDOM</Link></li>
                <li><Link to='/likebutton'>LikeButton</Link></li>
                <li><Link to='/input'>Input</Link></li>
                <li><Link to='/didmount'>DidMount</Link></li>
                <li><Link to='/notelist'>NoteList</Link></li>
                <li><Link to='/proptype'>PropType</Link></li>
                <li><Link to='/ajax'>AJAX</Link></li>
                <li><Link to='/axios'>Axios</Link></li>
                <li><Link to='/counter'>Counter</Link></li>
            </ul>
        </nav> */}
        {/* <Link onClick={setTimeout(window.history.go(0),5000)}></Link> */}
        <HomeHeader cityName = "深圳" />
    </header>

)

// Failed prop type: Invalid prop `title` of type `string` supplied to `PropType`, expected `number`.
// var data = '300'
// const store = createStore(counter,10)
// console.log(store.getState()) // 为什么初始是 0 ? 上一行代码传入第二个参数就是默认值,不传为0

const render = () =>ReactDOM.render((
    <BrowserRouter>
    <App />
    </BrowserRouter>
),document.getElementById('root')
);

render()
// store.subscribe(render) // 监听视图变化
registerServiceWorker();
