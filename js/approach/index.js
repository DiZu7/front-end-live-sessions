// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// algo
// 1. iterate 2 ...num
// 2. check if number is prime
//   2.0 create countert
//   2.1 iterate 1 ...number
//   2.2 if number % index === 0 -> count+=1
//   2.3. if counter >= 2 -> is not prime
// 3. if prime -> console.log

// input: number
// output: undefined
// function getPrimes(num) {

//   for (let number = 2; number <= num; number += 1) {
//     // console.log('CHECKING NUMBER IS PRIME ' + number)
//     let counter = 0;

//     for (let index = 1; index <= number; index += 1) {
//       // console.log('STEP ' + index)
//       if (number % index === 0) {
//         // console.log('COUNTER FOUND' + index);
//         counter += 1;
//       }
//     }
//     // console.log('FOR NUMBER ' + number + ' COUNTER FOUND' + counter);
//     if (counter === 2) {
//       console.log(number);
//     }
//   }
// }

// getPrimes(10);

// function getPrimes(num) {
//   for (let number = 2; number <= num; number++) {
//     let isSimple = true;

//     for (let index = 2; index < number; index++) {
//       if (number % index === 0) {
//         isSimple = false;
//         break;
//       }
//     }

//     if (isSimple) {
//       console.log(number);
//     }
//   }
// }
// getPrimes(10);

// 


// 10 ==> 2, 3, 5, 7;
// 15 ==> 2, 3, 5, 7, 9, 11, 13,

// 8 ==>
// 1 ... 8
// 2 ==> 8%2 === 0 - if

// refactoting
// input: number
// output: boolean

const isPrime = (number) => {
  let counter = 0;

  for (let index = 1; index <= number; index += 1) {
    if (number % index === 0) {
      counter += 1;
    }
  }
  return counter === 2;
};

// input: number
// output: undefined

function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    if (isPrime(number)) {
      console.log(number);
    }
  }
}

getPrimes(10);



// function isPrime(num) {
//   for (let index = 2; index < num; index++) {
//     if (num % index === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function getPrimes(num) {
//   const arrayOfNumbers = Array.from(Array(num - 1), (_, index) => index + 2);

//   arrayOfNumbers.forEach((number) => {
//     if (isPrime(number)) {
//       console.log(number);
//     }
//   });
// }
// getPrimes(15);
