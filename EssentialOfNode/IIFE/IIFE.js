// IIFE --> Immediately Invoked Function Expression

var num = 10;
num = 20;
// console.log(num);
let num2 = 10;
num2 = 30;
// console.log(num2);

(() => {
  let num2 = 100;
  console.log(num2);
})();

(() => {
  let num2 = 1000;
  console.log(num2);
})();
