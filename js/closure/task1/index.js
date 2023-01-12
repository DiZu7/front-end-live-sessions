// 'use strict';

// /**
//  * @return {object}
//  */
// export const createLogger = () => {
//   const memory = [];

//   const addLog = (message, type) => {
//     memory.unshift({ message, dateTime: new Date(), type });
//   };

//   const log = message => {
//     addLog(message, 'log');
//   };
//   const warn = message => {
//     addLog(message, 'warn');
//   };
//   const error = message => {
//     addLog(message, 'error');
//   };

//   const getRecords = type => {
//     return type ? memory.filter(log => log.type === type) : memory;
//   };

//   return {
//     log,
//     warn,
//     error,
//     getRecords,
//   };
// };

// // examples
// const logger1 = createLogger();
// logger1.log('User logged in');
// logger1.warn('User is tring to ented restricted page');
// logger1.log('User logged out');
// logger1.error('Unexpected error on the site');

// console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// console.log(logger1.getRecords('log')); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// console.log(logger1.getRecords('error')); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
// console.log(logger1.getRecords('warn')); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

// const logger2 = createLogger();
// logger2.warn('Opps, something is happenning');
// logger2.getRecords('error'); // ===> []
// logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
// logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

// const logger3 = createLogger();
// logger3.getRecords('error'); // ===> []
// logger3.getRecords(); // ===> []

// const createLogger = () => {
//   const records = [];

//   return {
//     warn(message) {
//       records.push({
//         message,
//         dateTime: new Date(),
//         type: 'warn',
//       });
//     },
//     error(message) {
//       records.push({
//         message,
//         dateTime: new Date(),
//         type: 'error',
//       });
//     },
//     log(message) {
//       records.push({
//         message,
//         dateTime: new Date(),
//         type: 'log',
//       });
//     },
//     getRecords(type) {
//       return (type ? records.filter(el => el.type === type) : records).sort(
//         (a, b) => b.dateTime - a.dateTime,
//       );
//     },
//   };
// };

// // examples
// const logger1 = createLogger();
// logger1.log('User logged in');
// logger1.warn('User is tring to ented restricted page');
// logger1.log('User logged out');
// logger1.error('Unexpected error on the site');

// console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// console.log(logger1.getRecords('yyyyy')); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]

// const logger2 = createLogger();
// logger2.log('sdsdsdsd');

// console.log(logger2.getRecords());

// solution 1

export const createLogger = () => {
  const memory = [];

  const addLog = (message, type) => {
    memory.unshift({ message, dateTime: new Date(), type });
  };

  const log = message => {
    addLog(message, 'log');
  };
  const warn = message => {
    addLog(message, 'warn');
  };
  const error = message => {
    addLog(message, 'error');
  };

  const getRecords = type => {
    return type ? memory.filter(log => log.type === type) : memory;
  };

  return {
    log,
    warn,
    error,
    getRecords,
  };
};
