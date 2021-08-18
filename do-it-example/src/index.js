import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// React에서 사용할 ES6 문법
// template string
const cart = {
  name: '도서',
  price: 1500,
};

const getTotal = function (cart) {
  return `${cart.price}원`;
};

let myCart = `장바구니에 ${cart.name}가 있습니다. 총 금액은 ${getTotal(cart)}입니다`;
console.log(myCart);

// spread oprator
// var array1 = ['one', 'two'];
// var array2 = ['three', 'four'];
// const combined = [...array1, ...array2];
// // var first = array1[0];
// // var second = array1[1];
// // var three = array1[2] || 'empty';

// const [first, second, three = 'empty', ...others] = array1;
// console.log(array1);

// function func(...args) {
//   var [first, ...others] = args;

//   return console.log(first);
// }

// func('가', '나', '다');
// console.log(combined);

var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined1 = {
  ...objectOne,
  ...objectTwo,
};
// combined1 = { one: 1, two: 2, three: 3, four: 4, other: -1}

// var combined1 = {
//   ...objectTwo,
//   ...objectOne,
// };
// combined1 = { one: 1, two: 2, three: 3, four: 4, other: 0}

var { other, ...others } = combined1;
// others1 = { one: 1, two: 2, three: 3, four: 4}
console.log(others);

const arr3 = [];
const arr4 = arr3.concat(1); // 배열에 새로운 값을 추가할 때는 push() 함수 대신 concat() 함수를
const arr5 = [...arr4, 2, 3];
const arr6 = arr5.slice(0, 1); // 배열의 값을 삭제할 때는 pop(), shift() 함수 대신 slice(), conat() 함수에 전개 연산자를 조합하여 사용

// 값을 추가할 때는 push() 함수 대신 concat() 함수를
// 값을 삭제할 때는 pop(), shift() 함수 대신 slice(), conat() 함수에 전개 연산자를 조합하여 사용
// 이렇게 하면 새값을 할당하는 것이 아니라 기존의 값을 이용(추출)하여 새 불변 변수에 할당하는 것이므로 괜찮다.
console.log('arr4', arr4);
console.log('arr5', arr5);
console.log('arr6', arr6);

const [first, ...arr7] = arr5;
console.log('first', first);
console.log('arr7', arr7);

const add = (first, second) => {
  return console.log(first + second);
};

add(10, 100);

const list = [0, 1];
let [item11, item22, item33 = -1] = list;
[item22, item11] = [item11, item22];

console.log(item11);
console.log(item22);
