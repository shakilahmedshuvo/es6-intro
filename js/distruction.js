const fish = {
    name: 'King Hilsa',
    adders: "Chandpur",
    color: "Silver",
    phone: "017176588899",
    price: 4000
}


// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;


// const { phone } = fish
// 
// console.log(color);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// 
// const { name } = fish;
// console.log(name);

const { age, name } = { name: 'Almas', age: 56, profession: 'Makeup artist' }
console.log(age);


const { adders } = fish;
console.log(adders);



// Array destructuring
const [first, another] = [44, 99]
console.log(first, another);

function getNames() {
    return ['Alim', 'Halim',];
}

const [baba, chacha] = getNames();
console.log(chacha, baba);