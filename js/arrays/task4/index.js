// map
const numbersList = [-4, 500, -1, 10, 11, 2];

// input: callback, context
// output: array

// input: el, index (optional), array (optional)
// output: new elem

const mapRes = numbersList.map(el => (el > 0 ? el ** 2 : el));
console.log(mapRes);

// const mapRes = numberList.map(el =>)

// if (el > 0) {
//   return el * el;
// } else {
//   return el;
// }
// );

// find
// input: callback
// output: elem | undefined

// input: el, index, array
// output: boolean

const findRes = numbersList.find(el => el > 100);
console.log(findRes);
// 2 ітерації

// forEach
// input: callback
// output: undefined
// console.log, DOM

// input: el, index (optional), array (optional)
// output: undefined

const numbersList1 = [-4, 500, -1, 2];
const forEachRes = numbersList1.forEach(el => {
  if (el > 0) {
    console.log(el);
  }

  // wrong using
  // el > 0 ? console.log(el) : console.log('Error');
  // correct using
  // console.log(el > 0 ? el : 'Error');
});

// ternary
// condition? valueA : valueB

console.log(forEachRes);

// reduce - масив даних згрупувати в 1 ціле (число, обʼєкт, новий масив, стрінга)

// input: callback, accInitValue(opt)
// output: result (any type)

// input: acc, el, index (opt), array (opt)
// output: result(any type)
const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, -556, 41];
// const reduceRes = transactions.reduce((acc, el) => {
//   if (el < 0) {
//     acc += el;
//   }
//   return acc;
// }, 0);

const reduceRes = transactions.reduce((acc, el) => (el < 0 ? (acc += el) : acc), 0);
console.log(reduceRes);
