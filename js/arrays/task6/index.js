// input: arr, callback
// output: arr (new arr)

// callback
// input: elem, index, arr
// output: elem (new elem)

// algo
// create empty result arr
// iterate arr
// call callback for each element of arr
// push changed element to result arr
// return result arr

const mapArrayElements = (arr, callback) => {
  const resultArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    resultArr.push(callback(arr[index], index, arr));
  }

  return resultArr;
};

// test data
console.log(mapArrayElements([1, 2, 3, 4, 5, 6], num => num ** 2));
console.log(mapArrayElements(['Bob', 'Tom', 'Michael', 'Sam', 'Brad'], el => `Hi, ${el}!`));
console.log(
  mapArrayElements(
    ['Bob', 'Tom', 'Michael', 'Sam', 'Brad'],
    (el, index) => `${el}: number in the list ${index + 1}`,
  ),
);
