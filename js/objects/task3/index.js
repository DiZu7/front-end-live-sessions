// input: obj
// output: obj[]

// algo
// 1. create result arr
// 2. get keys/values (.entries)
// 3. add new id key to value => new obj
// 4. new obj push to the array
// 5. sort object by age

// // Draft solution
// const getCustomersList = obj => {
//   const resArr = [];
//   const entries = Object.entries(obj);

//   for (let index = 0; index < entries.length; index += 1) {
//     // 1. get key. value
//     // 2. add new id to
//     // 3. push obj to arr
//     // const entry = entries[index];
//     // const key = entry[0];
//     // const value = entry[1];
//     // const resObj = { ...value, id: key };
//     // resArr.push(resObj);

//     resArr.push({ ...entries[index][1], id: entries[index][0] });
//   }
//   return resArr.sort((a, b) => a.age - b.age);
// };

// Final solution
const getCustomersList = obj =>
  Object.entries(obj)
    .map(([key, value]) => ({ ...value, id: key }))
    .sort((a, b) => a.age - b.age);

// const getCustomersList = obj => {
//   const keys = Object.keys(obj);

//   return Object.values(obj)
//     .map((customer, index) => ({ ...customer, ['id']: keys[index] }))
//     .sort((a, b) => a.age - b.age);
// };

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 20,
  },
  'customer-id-3': {
    name: 'Bob',
    age: 17,
  },
  'customer-id-4': {
    name: 'John',
    age: '22',
  },
};

console.log(getCustomersList(customers)); // [ { name: 'Tom', age: 17, id: 'customer-id-2'}];
