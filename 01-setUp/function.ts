function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log('Result: ' + num);
}

printResult(add(5, 12));

let cobineValues: (a: number, b: number) => number;

cobineValues = add;
// cobineValues = 5;

console.log(cobineValues(8, 8));
