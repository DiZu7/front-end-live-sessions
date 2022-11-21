// input: object, string, any data
// output: object

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// put your code here

// put your code here

// put your code here

// test data 1
const user1 = {
  name: 'Tom',
  age: 25,
};

console.log(addPropertyV1(user1, 'city', 'Kyiv'));
console.log(addPropertyV1(user1, 'city', 'Odessa'));
console.log('after', user1);

// V2
// input: target object, sourceObj... sourceObjN
// output: object

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

// test data

const user2 = {
  name: 'Tom',
  age: 25,
};

console.log(addPropertyV2(user2, 'city', 'Dnipro'));
console.log(addPropertyV2(user2, 'married', true));
console.log('after', user2);

// V3
// input: target object, sourceObj... sourceObjN
// output: object

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

// test data

const user3 = {
  name: 'Tom',
  age: 25,
};

console.log('before', user3);
console.log(addPropertyV3(user3, 'city', 'Dnipro'));
console.log(addPropertyV3(user3, 'married', true));
console.log('after', user3);

// V4
// input: object, string, any type
// output: object

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

// test data

const user4 = {
  name: 'Tom',
  age: 25,
};

console.log('before', user4);
console.log(addPropertyV4(user4, 'city', 'Dnipro'));
console.log(addPropertyV4(user4, 'married', true));
console.log('after', user4);
