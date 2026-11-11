const { a: x, b: y } = require("./file2");

console.log(x, y);

const add = require("./utils/add");

console.log("addition", add(2000, 5));
console.log(add(x, y));
