// class Counter {
//     constructor() {
//         this.count = 0;
//         console.log('count initiated: 0');
//     }

//     increment() {
//         this.count++;
//         console.log('current count:', this.count);
//     }
// }

// const myCount = new Counter();
// myCount.increment();
// myCount.increment();
// myCount.increment();

let count = 0;
function countUp() {
    count++;
    console.log('count:', count);
}

countUp();
countUp();
countUp();

// props are key-value pairs passed on from the parent
// state is data managed and owned by THIS component