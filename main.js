// task 1

localStorage.setItem('myString', 'Hello, World!');

let retrievedString = localStorage.getItem('myString');
console.log(retrievedString); 

// task 2


localStorage.setItem('myNumber', 123);


let retrievedNumber =(localStorage.getItem('myNumber'));
console.log(retrievedNumber); 

// task 3


localStorage.setItem('myBoolean', true);


let retrievedBoolean =(localStorage.getItem('myBoolean'));
console.log(retrievedBoolean);  

// task 4 


localStorage.setItem('toBeRemoved', 'Item to be removed');


localStorage.removeItem('toBeRemoved');

let removedItem = localStorage.getItem('toBeRemoved');


console.log(removedItem);  

// task 5


localStorage.setItem('item1');

localStorage.setItem('item2');



localStorage.clear();

// task 6 


let myArray = [1, 2, 3];
localStorage.setItem('myArray', JSON.stringify(myArray));


let retrievedArray = JSON.parse(localStorage.getItem('myArray'));
console.log(retrievedArray);  

// task 7 


let myObject = { name: 'John', age: 30 };


localStorage.setItem('myObject', JSON.stringify(myObject));


let retrievedObject = JSON.parse(localStorage.getItem('myObject'));

console.log(retrievedObject);  








