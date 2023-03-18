// Array Methods by Usenobong Usen(Jabulani)

//All arrays used

let names = [ 'Jabulani', 'Imoabasi', 'Sediong', 'Imikan', 'Sediong'];
let names2 = [ 'Precious', 'Kate', 'Bright', 'Spiff'];

let num = [4, 1, 3, 5, 2, 4]
let nums = [1, 2, 3, 4, [5, 4], 3 ]
let nums2 = [1, 2, 3, 4, [5, 4, [3, 4]], 3 ]

let posts = [
    { title: 'post 1', author: 'Jabu' },
    { title: 'post 2', author: 'Lani' },
    { title: 'post 3', author: 'Jabu' }
];

let stock = [
    { item: 'banana', quantity: 32 },
    { item: 'apple', quantity: 9 },
    { item: 'carrot', quantity: 12 }
]




// toString(): 
//This converts all elements in an array to strings
let stringNames = names.toString()
// console.log(stringNames);


//join():
//Joins all existing elements in an array using a custom agent e.g ','
let joinNames = names.join(' and ')
// console.log(joinNames);


// cancat(): 
//Add two arrays together
let joined = names.concat(names2)
// console.log(joined);


// splice(): 
//Used to remove elements from an array and delete

// To remove
// names.splice(1, 1)

//To add
// names.splice(1, 2, 'bill', 'bob')


// Slice(): 
//This is used to slice out parts of an array without affecting the main array

let slice = names.slice(1, 2)
// console.log(slice);


// indexOf():
//This is used to fine the index of a certain value in an array
let index = names.indexOf('Sediong')
// console.log(index);
// This method targets the first identical value in an array 
// even if there is another identical value, so to find the last index, use...
let lastIndex = names.lastIndexOf('Sediong')
// console.log(lastIndex);


// flat(): 
//To flatten down an array

let flat = nums.flat()
// console.log(flat);
//By default, flat() flattens down just one nested array, but what happens if we have more than one level of nested array?

let flat2 = nums2.flat(2)
// console.log(flat2);


//HIGHER OTHER ARRAY METHODS

//for/forEach: 
//Used in looping through an array 
let count = 0
names.forEach((n) => {
    // console.log(n);
})

for (let i = 0; i < names.length; i++) {
    // console.log(names[i]);
}


//map(): 
//It loops over each element in an array and executes a call back function
//where we have access to the current element and the element can be manipulated.
//Below we multiplied all values.

let doubled = num.map((n) => n * 2)
// console.log(doubled);


//filter():
//This filters out certain properties in an array


let jabuPosts = posts.filter(p => p.author === 'Jabu')
// console.log(jabuPosts);



//reduce():
//used to reduce numbs. in an array to one single number. It adds 'em up

let total = num.reduce((totalVal, currentVal) => totalVal + currentVal)
// console.log(total);
//once you loop through the array, totalVal = 1 and currentVal = 2
//After another loop, totalVal = 3 and currentVal = 3. It keeps looping till it is complete

//In order to specify the value to start from, we pass in a 3rd argument containing the value we want to start from
let totalSpecified = num.reduce((totalVal, currentVal) => totalVal + currentVal, 10)
// console.log(totalSpecified);


//some():
//Checks for some values in an array. Example below:

let isGreaterThan5 = num.some((n) => n > 2)
// console.log(isGreaterThan5);



//every():
//This is the opposite of some(). This checks if all every value of an array
let alLGreaterThan0 = num.every(n => n > 0)
// console.log(alLGreaterThan0);



//find():
//Used to find the value in an array that matches the argument

let fruits = stock.find((s) => s.item === 'banana')
// console.log(fruits.quantity);

//findIndex()

let fruits2 = stock.findIndex((s) => s.item === 'apple')
console.log(fruits2);



//sort()
//sorts a sting in alphabetical order
let alph = names.sort();
// console.log(alph);

//for number arrays, it arranges it in accending order
let sorted = num.sort();
// console.log(sorted);


//what if we have a number like 11 in an array? 
let numbers = [4, 1, 3, 5, 11, 2, 4]
let sort = numbers.sort((a,b) => a - b)
// console.log(sort);
