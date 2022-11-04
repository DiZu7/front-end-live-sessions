const anotherNumberList = [5, 0, 8, 10, -4, 50, 220];

// input: callback
// output: array

// callback
// input: el, index, arr
// output: boolean

function filterCallback(num) {
  return num > 100;
}

// const filterResult = anotherNumberList.filter(function filterCallback(el){
//   return el > 100;
// });
// console.log(filterResult);

const filterResult = anotherNumberList.filter(el => el > 100);
console.log(filterResult);

