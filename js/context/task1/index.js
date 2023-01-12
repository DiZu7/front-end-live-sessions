// console.log(this); // undefined

function sayHi() {
  console.log(`Hello ${this.userName}`); // undefined
}

const user = {
  userName: 'Diana',
};

// task 1
const sayHiBinded = sayHi.bind(user);
sayHiBinded();

// timer

export const timer = {
  minsPassed: 0,
  secondsPassed: 0,
  startTimer() {
    // input: callback, ms
    // output: number (ID)
    // const intervalId = setInterval(
    //   function () {
    //     console.log(this);
    //     // this.secondsPassed += 1
    //     console.log(this.secondsPassed);
    //   }.bind(this),
    //   1000,
    // );
    this.intervalId = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
      console.log(this);
    }, 1000);
  },
  getTime() {
    return `${this.minsPassed}:${this.secondsPassed.toString().padStart(2, 0)}`;
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

timer.startTimer();

setTimeout(() => {
  timer.stopTimer();
  console.log(timer.getTime());
}, 5000);

setTimeout(() => {
  timer.resetTimer();
  timer.startTimer();
}, 7000);
