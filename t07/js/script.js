const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];   // заданый массив

arr.sort(function(a, b) {                              // more about sorting here: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 
    return a % 2 - b % 2
    });

console.log(arr);


// EXAMPLE
// const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
// arr.sortEvenOdd(arr);
// console.log(arr);


// function sortArr(arr) {                            // this variant not work!!! just for information
    
//     let evenList = [];                              //array that hold even numbers
//     let oddList = [];                               //array that hold odd numbers
//                                                 //loop through the nums array
//     for (var i = 0; i < arr.length; i++) {      //begin for loop. If the array index value has a remainder of 0 when 
//         if (arr[i] % 2 === 0) {                 //divided by 2 then the number will be even
//             evenList.push(arr[i]);                 //add the even index value to the "even" array
//         } else {
//             oddList.push(arr[i]);                   //add the odd index value to the "odd" array
//         }                                          
//     }
//     console.log(evenList + " <-- even || odd --> " + oddList); // что не так? почему не выводит массив?
// }