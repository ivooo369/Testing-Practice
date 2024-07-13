export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// ______________________________________________________________________________

export function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

// ______________________________________________________________________________

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Division by zero is not allowed!");
    }
    return a / b;
  },
  multiply: (a, b) => a * b,
};

// ______________________________________________________________________________

function shiftChar(char, shift) {
  const codeA =
    char.toUpperCase() === char ? "A".charCodeAt(0) : "a".charCodeAt(0);
  const alphabetSize = 26;
  let shiftedCode =
    codeA + ((char.charCodeAt(0) - codeA + shift) % alphabetSize);

  if (shiftedCode < codeA) {
    shiftedCode += alphabetSize;
  }

  return String.fromCharCode(shiftedCode);
}

export function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        return shiftChar(char, shift);
      } else {
        return char;
      }
    })
    .join("");
}

// ______________________________________________________________________________

function findAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return +(sum / array.length).toFixed(2);
}

function findMinimum(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min >= array[i]) {
      min = array[i];
    }
  }
  return min;
}

function findMaximum(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max <= array[i]) {
      max = array[i];
    }
  }
  return max;
}

function findLength(array) {
  return array.length;
}

export function analyzeArray(array) {
  return {
    average: findAverage(array),
    min: findMinimum(array),
    max: findMaximum(array),
    length: findLength(array),
  };
}
