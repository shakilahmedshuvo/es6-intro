// ------------------> 1.function declartion <------------------
function add(first, second) {
    const total = first + second;
    return total;
}

// ------------------> 2.function expression <------------------
//  function 2 
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}

// ------------------> 3.function expression with anonymous function <------------------
// function 3 
const add2 = function (first, second) {
    const total = first + second;
    return total;
}

// ------------------> 4.function expression with direct return <------------------
function (first, second) {
    //ei khane 
    return first + second;
}

//  5. normal function
const add5 = function (first, second) {
    return first + second;
}
// ------------------> 6.arrow function  <------------------
const add6 = (first, second) => first + second;

// call the function
const result = add(10, 12);
console.log(result);