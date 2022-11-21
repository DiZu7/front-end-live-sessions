const getCustomersList = obj => {
  const copiedObj = { ...obj };
  const keys = Object.keys(copiedObj);

  return Object.values(copiedObj)
    .map((customer, index) => ({ ...customer, ['id']: keys[index] }))
    .sort((a, b) => a.age - b.age);
};

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Jane',
    age: 18,
  },
  'customer-id-4': {
    name: 'Odel',
    age: 77,
  },
};

console.log(getCustomersList(customers)); // [ { name: 'Tom', age: 17, id: 'customer-id-2'}];
