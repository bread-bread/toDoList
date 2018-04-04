import React from 'react';
import './item.css';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Item extends React.Component {

    render() {
        return (
            <div className="wrap">
                <input type="checkbox" onChange={(e) => (e.target.checked) ? this.props.setStatus(this.props.id) : this.props.removeStatus(this.props.id)}/>
                <span className={(this.props.todo.status) ? "done" : "inProgress"}>{this.props.todo.todo}</span>
                <button className="btn removeBtn" onClick={()=> this.props.removeTodo(this.props.id)}>Удалить</button>
            </div>
        )
    }
}

export default connect(() => {return {};})(Item);