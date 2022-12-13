'use strict';

/**
 * @param {object} firstObj
 * @param {object} secondObj
 * @return {boolean}
 */

// algo
// 1. get keys obj1
// 2. get keys obj2
// 3. compare keys length and return false if length is not equal
// 4. iterate keys obj1 and check if the value of obj1key === value of obj2key

// option-1 GOOD
// function compareObjects(firstObj, secondObj) {
//   return Object.keys({ ...firstObj, ...secondObj }).every(key => firstObj[key] === secondObj[key]);
// }

// option-2 NORM
// function compareObjects(firstObj, secondObj) {
//   return !Object.keys({ ...firstObj, ...secondObj }).some(key => firstObj[key] !== secondObj[key]);
// }

// option-3 BAD
// function compareObjects(firstObj, secondObj) {
//   const biggerObj =
//     JSON.stringify(firstObj).length > JSON.stringify(secondObj).length ? firstObj : secondObj;
//   return !Object.keys(biggerObj).some(key => firstObj[key] !== secondObj[key]);
// }

// option-4
// NORM
// const compareObjects = (firstObj, secondObj) => {
//   const firstArr = Object.keys(firstObj);
//   const secondArr = Object.keys(secondObj);
//   if (firstArr.length !== secondArr.length) {
//     return false;
//   }
//   return !firstArr.some(key => firstObj[key] !== secondObj[key]);
// };

// option-4 refactored
// const compareObjects = (firstObj, secondObj) => {
//   const firstObjKeys = Object.keys(firstObj);
//   if (firstObjKeys.length !== Object.keys(secondObj).length) {
//     return false;
//   }
//   return firstObjKeys.every(key => firstObj[key] !== secondObj[key]);
// };

// option-5 BAD
// const compareObjects2 = (firstObj, secondObj) =>
//   JSON.stringify(Object.entries(firstObj).sort()) ===
//   JSON.stringify(Object.entries(secondObj).sort());

// option-6 BAD
// function compareObjects(firstObj, secondObj) {
//   const firstArray = Object.keys(firstObj);
//   if (firstArray.length !== Object.keys(secondObj).length) {
//     return false;
//   }
//   return firstArray.reduce((acc, element) => {
//     if (firstObj[element] !== secondObj[element]) {
//       acc = false;
//     };
//     return acc;
//   }, true);
// };

// option-7
// BAD
// const compareObjects = (firstObj, secondObj) =>
//   Object.keys(firstObj).reduce(
//     (acc, key, index) => (firstObj[key] === secondObj[key] && index === acc ? acc + 1 : -1),
//     0,
//   ) === Object.keys(secondObj).length;

// option-9 BAD
// function compareObjects(firstObj, secondObj) {
//   const ordered = obj =>
//     Object.keys(obj)
//       .sort()
//       .reduce((acc, el) => {
//         acc[el] = obj[el];
//         console.log(acc);
//         return acc;
//       }, {});
//   const sortFirstObj = ordered(firstObj);
//   const sortSecondObj = ordered(secondObj);
//   return JSON.stringify(sortFirstObj) === JSON.stringify(sortSecondObj);
// }

function compareObjects(firstObj, secondObj) {
  const firstObjKeys = Object.keys(firstObj);

  if (firstObjKeys.length !== Object.keys(secondObj).length) {
    return false;
  }

  return firstObjKeys.every(key => firstObj[key] === secondObj[key]);
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Tom',
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
console.log(compareObjects(obj4, obj5)); // ==> true
