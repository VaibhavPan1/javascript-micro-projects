// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function display(result){
//     console.log(`Running display function`)
//     console.log(result);
// }

// sum(display, 2, 3);

let fruits = ["apple", "mango", "banana", "peach"]

fruits.forEach(uppercCase)
fruits.forEach(display);

function uppercCase(element, index, array){
    array[index] = element.toUpperCase();
}

function display(element){
    console.log(element)
}