import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

// import {createStore} from 'redux';

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const ul = document.querySelector('ul');

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case 'add':
//       return [{text:action.text, id:Date.now()}, ...state];
//       // return state.push({text:action.text});
//       // 이렇게 state를 직접 수정하면 안됨. 반드시 깊은복사하여 사용하거나 새로운 데이터를 반환해야 한다. 직접 수정하거나 값을 할당할 경우 같은 값을 참조하기 때문에 가상DOM과 실제DOM이 비교했을 때 같다고 판단하여 렌더하지 않음. 
//     case 'delete':
//       return state.filter(todo => todo.id !== action.id);
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer);

// const deleteToDo = e => {
//   const id = parseInt(e.target.parentNode.id);
//   store.dispatch({type:'delete', id});
// }

// const paintTodo = () => {
//   const toDos = store.getState(); // getState(); 나에게 현재의 state를 전달해줌.
//   ul.innerHTML = "";
//   toDos.forEach(toDo => {
//     const li = document.createElement('li');
//     const btn = document.createElement('button');
//     btn.innerText = 'delete';
    
//     btn.addEventListener('click', deleteToDo);
//     li.id = toDo.id;
//     li.innerText = toDo.text;
//     ul.appendChild(li);
//     li.appendChild(btn);

//   })
// }

// store.subscribe(paintTodo);
// subscribe 함수는 store 안에 있는 변화들을 알 수 있게 해줌. state에 변화가 있을 때마다 감지해서 호출된다.

// const addTodo = text => {
//   store.dispatch({type:'add', text})
//  }
// dispatch 는 reducer에 메세지를 보내는 역할. 그 메세지는 action이 가지고 있다.
// action은 반드시 객체 형태여야 하며, type을 꼭 가져야 한다.
// state를 수정할 수 있는 유일한 방법은 dispatch를 통해 메세지를 보내는 방법 뿐이다.

// const onSubmit = e => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = '';
//   addTodo(toDo);
// };

// form.addEventListener('submit', onSubmit);






// vanilla js

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const ul = document.querySelector('ul');

// const createToDo = toDo => {
//   const li = document.createElement('li');
//   li.innerText = toDo;
//   ul.appendChild(li);
// };

// const onSubmit = e => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = '';
//   createToDo(toDo);
// };

// form.addEventListener('submit', onSubmit);


































// import {createStore} from "redux";

// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// number.innerText = 0;

// const countModifier = (count = 0, action) => { // data를 수정할 수 있는 함수. 리턴값이 application에 있는 데이터가 된다.
//   if(action.type === 'add'){
//     return count + 1;
//   } else if(action.type === 'minus'){
//     return count - 1;
//   }
//   return count;
// }
// const countStore = createStore(countModifier); // store  = data를 넣을 수 있는 장소

// const onChange = () => {
//   number.innerText = countStore.getState();
// }

// countStore.subscribe(onChange);

// plus.addEventListener('click', () => { countStore.dispatch({type : "add"})});
// minus.addEventListener('click', () => { countStore.dispatch({type : "minus"})});




// vanilla js

// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// let count = 0;

// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// }

// const handlePlus = () => {
//   count = count + 1;
//   updateText();
// }

// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// }

// plus.addEventListener('click', handlePlus);
// minus.addEventListener('click', handleMinus);