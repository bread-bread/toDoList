import React, {Component} from 'react';
import './item.css';

export default class Item extends Component {
    constructor(props) {
        super(props);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }
    changeStatus(e, id) {
        if(e.target.checked) {
            this.props.setStatus(id);
        } else {
            this.props.removeStatus(id);
        }
    }
    spanStyle() {
        return (this.props.todo.status === "checked")?"line-throught": "none";
    } 

    render() {
        return (
            <div className="wrap">
                <input type="checkbox" onChange={(e)=> this.changeStatus(e, this.props.id)} />
                <span className={(this.props.todo.status === "checked") ? "done" : "inProgress"}>{this.props.todo.todo}</span>
                <button className="btn removeBtn" onClick={(e)=> this.removeTodo(this.props.id)}>Удалить</button>
            </div>
        )
    }
}