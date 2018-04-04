import React, {Component} from 'react';
import '../css/main.css';
import Input from './components/Input';
import Item from './components/Item';
import {connect} from 'react-redux';

import * as actions from './actions/';
import { bindActionCreators } from 'redux';

class App extends Component {

    render() { 
        let boundActions = bindActionCreators(actions, this.props.dispatch);

        return <div className="box">
            <div className="header">To do list</div>
            <Input {...boundActions}/>
            <ul>
              {this.props.todos.map((todo, index) => {
                return <Item todo={todo} key={todo.id} id={todo.id} {...boundActions} />;
              })}
            </ul>
          </div>;
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todosInfo
    }
}

export default connect(mapStateToProps)(App);