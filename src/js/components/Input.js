import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Input extends React.Component {

  render() {
    return (
      <div className="input-wrap">
        <input type="text" ref="todo" placeholder="Введите задание" />
        <button
          onClick={() => {
            this.props.addTodo(this.refs.todo.value);
            this.refs.todo.value = "";
          }}
          className="btn"
        >
          Добавить
        </button>
      </div>
    );
  }
}

export default connect(() => {
  return {};
})(Input);
