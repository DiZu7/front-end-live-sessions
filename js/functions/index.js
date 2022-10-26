// func 1
function getSenseOfLife() {
  return 42;
}

// option 1
const res = getSenseOfLife();
console.log(res);

// option 2
console.log(getSenseOfLife());

// func 2
function getSquared(num) {
  return num * num;
}

// test data
console.log(getSquared(2));
console.log(getSquared(0));
console.log(getSquared(-2));
console.log(getSquared('2'));
console.log(getSquared(undefined));
console.log(getSquared(true));

// func 3
function sum(a, b) {
  return a + b;
}

// test data
console.log(sum(5, -5));
console.log(sum(5, '5'));
console.log(sum('5', '-5'));
console.log(sum(5, null));
console.log(sum(undefined, -5));

// func 4
function getMessage(age) {
  if (age < 0 || typeof age !== 'number') {
    return null;
  }

  console.log(`I am ${age} years old`);
}

// test data
console.log(getMessage(-9));
console.log(getMessage(11));
console.log(getMessage(undefined));
console.log(getMessage(null));
// getMessage(25);
// getMessage('25');
// getMessage('test');

// func 5
const mult = (a, b) => a * b;

// test data
console.log(mult(2, 1));
console.log(mult('2', 1));
console.log(mult(null, 1));
console.log(mult('test', 1));

// func 6
const getMagicNumber = () => 17;

// test data
console.log(getMagicNumber());
console.log(getMagicNumber(5));
console.log(getMagicNumber('test'));
