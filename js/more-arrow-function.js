const add = (first, second) => first + second;
const getFullName = (first, last) => first + " " + last;
const multiply = (a, b) => a * b;

const result = multiply(7, 8);
console.log(result);

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

// no parameter
const getPie = () => 3.14;

// one parameter
const doubleIt = (num) => num * 2;

// one parameter simple version ---------> [this is better]
const fiveTimes = num => num * 5;

// multi line arrow function

const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
    // if the function is multiple line then you wil must to write the (return {var name});
}