const person1 = 'Adam Sand';
const person2 = "Ben White";
const person3 = `Donald Trump`;

// for write maltiline
const multiLine = 'First Line text \n' +
    'second line of code \n' +
    'Third line of text \n' +
    'Fourth line of string \n';
// console.log(multiLine);

// new multi line by carrot
const newMultiLine = `First line of text
second line of text 
third line of string
fourth line of code`;
// console.log(newMultiLine);

// 
const a = 20;
const b = 30;
const summery = 'sum of:' + a + " " + b + " " + 'is:' + " " + (a + b);
// console.log(summery);

//new summery 
const newSummery = `sum of ${a} and ${b} is:${a + b}`;
console.log(newSummery);