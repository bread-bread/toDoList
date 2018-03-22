import React, { Component } from 'react';
//import './item.css';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.todoText
        };

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    addTodo(todo) {
        if (todo.length > 0) {
            this.props.addTodo(todo);
            this.setState({
                value: ''
            });
        }
    }

    render() {
        return (
            <div className="input-wrap">
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={() => this.addTodo(this.state.value)} className="btn">Добавить</button> 
            </div>
        )
    }
}