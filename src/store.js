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
      return [{text:action.text, id:Date.now()}, ...state]; // state를 수정할 때엔 반드시 원본 state를 수정하면 안됨. 복사하여 사용하거나 새로운 데이터를 리턴해야한다.
    case "delete":
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
}
// reducer는 데이터를 수정하는 함수. reducer가 리턴하는데이터가 곧 application에 있는 데이터가 된다.

const store = createStore(reducer);
// store 는 데이터를 저장하는 장소

export const actionCreators = {
  addToDo,
  deleteToDo
}


export default store;