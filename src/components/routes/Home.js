import React, {useState} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../../store';
import ToDo from '../ToDo';

const Home = ({toDos, addToDo}) => {

  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    addToDo(text);
    setText('');
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(todos => (
          <ToDo {...todos} key={todos.id} />
        ))}
      </ul>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {toDos : state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (Home);