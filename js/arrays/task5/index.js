// input: arr, callback
// output: arr

// callback
// input: el, index, arr
// output: bool

// algo
// create result aa
// iterate arr - loop
// call callback for each el
// if callback - true => push el
// after iteration return result

const filterArrayElements = (arr, callback) => {
  const resultArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    if (callback(el, index, arr)) {
      resultArr.push(el);
    }
  }

  return resultArr;
};

// test data
const isEvenNumber = num => num % 2 == 0;
console.log(isEvenNumber(10));
console.log(filterArrayElements([1, 2, 3, 4, 5, 6], isEvenNumber));
console.log(filterArrayElements([2, 10, 1, 33, 44], isEvenNumber));

// test data

const arr = [1, 222, 5, 10, 77, 4, -1, 7];
const func = (el, index, arr) => index > 2 && el > 5;
console.log(filterArrayElements(arr, func));
console.log(
  filterArrayElements(['Andrew', 'Ivan', 'Jack', 'Jane', 'Mortal'], el =>
    el.toLowerCase().includes('an'),
  ),
);
console.log(
  filterArrayElements([1, 222, 5, 10, 77, 4, -1, 7], (el, index, arr) => index > 2 && el > 5),
);
