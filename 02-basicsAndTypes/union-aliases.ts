type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable, resultConversion: string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
