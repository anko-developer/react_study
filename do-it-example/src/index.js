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
