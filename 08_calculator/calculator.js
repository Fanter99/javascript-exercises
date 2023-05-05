const add = function(a,b) {
  return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(a) {
  let sum = 0;
  for (let b of a){
    sum += b
  }
  return sum
};

const multiply = function(a) {
  let mult = 1;
  for (let b of a){
    mult *= b
  }
  return mult
};

const power = function(a,b) {
  let mult = 1
	for (let i = 0; i<b; i++){
    mult *= a
  }
  return mult
};

const factorial = function(a) {
  mult = 1;
  for (let i = 1; i<= a; i++){
    mult*=i
  }
  return mult
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
