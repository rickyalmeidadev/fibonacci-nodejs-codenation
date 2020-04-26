'use strict';

const fibonacci = () => {
  const array = [0];
  for (let index = 0, number = 1; number <= 350; index++) {
    array.push(number);
    number += array[index];
  }
  return array;
};

const isFibonnaci = num => fibonacci().includes(num);

module.exports = {
  fibonacci,
  isFibonnaci
};
