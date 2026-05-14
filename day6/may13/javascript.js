
// 1. SLICE

const fruits = ["apple", "banana", "mango", "grapes", "orange"];

console.log(fruits.slice(1, 3));   
console.log(fruits.slice(2));      
console.log(fruits.slice(-2));     
console.log(fruits.slice());       

const products = ["p1", "p2", "p3", "p4", "p5", "p6"];
const page1 = products.slice(0, 3);  
const page2 = products.slice(3, 6);  


const nums = [40, 3, 100, 1];
const sortedCopy = nums.slice().sort((a, b) => a - b);
console.log(nums);       
console.log(sortedCopy);  


// 2. SPLICE

const colors = ["red", "green", "blue", "yellow"];
const removed = colors.splice(1, 2);
console.log(removed);  
console.log(colors);  

const animals = ["cat", "dog", "fish"];
animals.splice(1, 0, "rabbit", "parrot");
console.log(animals);

const langs = ["html", "css", "python", "react"];
langs.splice(2, 1, "javascript");
console.log(langs);



// 3. SORT

const wrongSort = [10, 9, 2, 1, 100];
wrongSort.sort();
console.log(wrongSort);// WRONG

const nums2 = [40, 3, 100, 1, 25];
nums2.sort((a, b) => a - b);
console.log(nums2);  

const nums3 = [40, 3, 100, 1, 25];
nums3.sort((a, b) => b - a);
console.log(nums3);  

const names = ["ram", "adithya", "arun", "sadik"];
names.sort();
console.log(names);  

const people = [
    { name: "ram",     age: 22 },
    { name: "arun",    age: 24 },
    { name: "sadik",   age: 20 },
    { name: "adithya", age: 23 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);


// 4. FOR EACH

const userNames = ["ram", "arun", "sadik", "adithya"];

userNames.forEach(name => {
    console.log(name);
});

// forEach always returns undefined
const result = userNames.forEach(name => name.toUpperCase());
console.log(result);  // undefined 

// Real use case — push into another array
const upperNames = [];
userNames.forEach(name => {
    upperNames.push(name.toUpperCase());
});
console.log(upperNames);  


// 5. MAP

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
console.log(doubled);  
console.log(numbers);   

const upper = userNames.map(name => name.toUpperCase());
console.log(upper);  

const userData = [
    { name: "ram",     age: 22 },
    { name: "arun",    age: 24 },
    { name: "sadik",   age: 20 },
    { name: "adithya", age: 23 }
];

const justNames = userData.map(u => u.name);
console.log(justNames);  

const justAges = userData.map(u => u.age);
console.log(justAges);   

const withGreeting = userData.map(u => ({
    ...u,
    greeting: `Hello, I am ${u.name} and I am ${u.age} years old`
}));
console.log(withGreeting);


const prices = [100, 200, 300, 400];
const labels = prices.map(p => `₹${p}`);
console.log(labels);  


// 6. FILTER


const nums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = nums4.filter(n => n % 2 === 0);
console.log(evens);  

const odds = nums4.filter(n => n % 2 !== 0);
console.log(odds); 

const big = nums4.filter(n => n > 5);
console.log(big);   



// 7. REDUCE


const nums5 = [1, 2, 3, 4, 5];

const sum = nums5.reduce((acc, n) => acc + n, 0);
console.log(sum);  

const product = nums5.reduce((acc, n) => acc * n, 1);
console.log(product); 

const max = nums5.reduce((acc, n) => n > acc ? n : acc, -Infinity);
console.log(max); 

const min = nums5.reduce((acc, n) => n < acc ? n : acc, Infinity);
console.log(min); 

const fruitsArr = ["apple", "banana", "apple", "mango", "banana", "apple"];
const count = fruitsArr.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count);

const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat);

