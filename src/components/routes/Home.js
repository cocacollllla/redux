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

const mapStateToProps = (state, ownProps) => { // redux store 로부터 state를 가져와 props에 넣어준다. 받아오는 2개의 인자 중 state는 store로부터 받아올 state, ownProps는 컴포넌트가 가지고있는 props.
  return {toDos : state}
}

const mapDispatchToProps = (dispatch, ownProps) => { // 컴포넌트가 dispatch를 사용할 수 있게 해준다. 첫번째 인자는 redux의 dispatch
  console.log(ownProps);
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (Home);
// connect 는 컴포넌트를 store에 연결해준다. mapStateToProps, mapDispatchToProps 2개의 인자를 가짐. 