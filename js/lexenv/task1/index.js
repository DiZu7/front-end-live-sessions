/* eslint-disable */
// lex env
// global lex env
// {
//   "enviromentRecord": {
//        "run": func,
//        message: 'test',
//        weight: 55,
//        "sum": a+ b => a+b
//         .....
//     },
//   outherEnv: null
// }

// run lex en
// {
//   "enviromentRecord": {
//
//     },
//   outherEnv: global lex env
// }

// createMessage lex env
// {
//   "enviromentRecord": {
//
//        message: 'test',
//        sender: 'Gromcode
//        setSender: func,
//        setMessage: func,
//        sendMessage: func
//     },
//   outherEnv: global lex env
// }

// const message = 'Test message';
const weight = 55;

// console.log(message);

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

if (weight) {
  console.log('My weight is ' + weight);
}

const messanger = createMessenger();
messanger.sendMessage('Jack');
run();

// closure 1 run
// closure 2 createMessanger

// ------
function counterFunc() {
  let count = 0;
  const counter = () => {
    count += 1;
    console.log(count);
  };
  return counter;
}

// counterFunc lex en
// {
//   "enviromentRecord": {
//       count: 0,
//       counter: func
//     },
//   outherEnv: global lex env
// }

const counter1 = counterFunc();
counter1();
counter1();

const counter2 = counterFunc();
counter2();
