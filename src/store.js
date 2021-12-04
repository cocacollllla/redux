import {createStore} from 'redux';

const addToDo = text => {
  return {
    type: "add",
    text
  }
}

const deleteToDo = id => {
  return {
    type: "delete",
    id
  }
}

const reducer = (state = [], action) => {
  switch(action.type){
    case "add":
      return [{text:action.text, id:Date.now()}, ...state];
    case "delete":
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo
}


export default store;