const numberList1 = [1, 2, 3, 4, 5];


console.log('ARRAY BEFORE POP', numberList1);
const popRes = numberList1.pop();
console.log(popRes);
console.log('AFTER POP', numberList1);



const numberList2 = [1, 2, 3, 4, 5];
console.log('ARRAY BEFORE PUSH', numberList2);
const pushRes = numberList2.push(100);
console.log(pushRes);
console.log('ARRAY AFTER PUSH', numberList2);


const numberList3 = [1, 2, 3, 4, 5];
console.log('ARRAY BEFORE UNSHIFT', numberList3);
const pushUnshift = numberList3.unshift(777);
console.log(pushUnshift);
console.log('ARRAY AFTER UNSHIFT', numberList3);

