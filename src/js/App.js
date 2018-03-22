import React, {Component} from 'react';
import '../css/main.css';
import Input from './components/Input';
import Item from './components/Item';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id:0, todo: "Сделать хоть что-нибудь", status: ""},
                {id:1, todo: "Ничего не делать", status: ""}
            ],
            idNext: 2
        };

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.setStatus = this.setStatus.bind(this); 
        this.removeStatus = this.removeStatus.bind(this); 
    }

    addTodo(todoText) {
        let todos = this.state.todos.slice();
        todos.push({id: this.state.idNext, todo: todoText, status: ""});
        this.setState({
            todos: todos,
            idNext: ++this.state.idNext
        });
    }
    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
        });
    }
    setStatus(id) {
        this.setState({
            todos: this.state.todos.map(
                (todo, index) => {
                    if (todo.id === id) {
                        todo.status = "checked"
                        return todo;
                    } else {
                        return todo;
                    }
                }
            )
        });
    }
    removeStatus(id) {
        this.setState({
            todos: this.state.todos.map(
                (todo, index) => {
                    if (todo.id === id) {
                        todo.status = ""
                        return todo;
                    } else {
                        return todo;
                    }
                }
            )
        });
    }

    render() {
        return (
            <div className="box">
                <div className="header">To do list</div>
                <Input todoText="" addTodo={this.addTodo} />
                <ul>
                    {
                        this.state.todos.map((todo) => {
                            return <Item todo={todo} key={todo.id} 
                                    id={todo.id} removeTodo={this.removeTodo}
                                    setStatus={this.setStatus}
                                    removeStatus={this.removeStatus} />
                        })
                    }
                </ul>
            </div>
        );
    }
}