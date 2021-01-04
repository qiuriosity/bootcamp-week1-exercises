/**
 * Part 1:
 *    What will print and why? 1 will print because from line 26, 2 will print from line 21, undefined will print from line 16.
 *    What will change if we delete line 15? Why? 1, 2, 1 (deferring to global variable a since a hasn't been initialized in x())
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

x = () => {
  console.log(a);
}

y = () => {
  a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();
