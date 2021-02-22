
function checkDivision(beginRange, endRange) {
    if (
      beginRange === "" ||
      endRange === "" ||
      beginRange === 0 ||
      endRange === 0 ||
      beginRange >= endRange ||
      beginRange < 0 ||
      endRange > 100 ||
      beginRange > 100 ||
      endRange < 0
    ) {
      alert("The default range has to be the number from 1 to 100! Please, refresh your web-page and re-enter the numbers.");
      beginRange = 1;
      endRange = 100;
    } //Проверка вводимых чисел
  
    for (let i = beginRange; i <= endRange; i++) {
      let result = i;
  
      if (!(i % 2)) {
        result = result + " is even";
      }
  
      if (!(i % 3)) {
        result = result + " is a multiple of 3";
      }
  
      if (!(i % 10)) {
        result = result + " is a multiple of 10";
      }
  
      if (!(i % 2) && !(i % 3)) {
        result = i + " is even, a multiple of 3";
      }
  
      if (!(i % 3) && !(i % 10)) {
        result = i + "a multiple of 3, a multiple of 10";
      }
  
      if (!(i % 2) && !(i % 10)) {
        result = i + " is even, a multiple of 10";
      }
  
      if (!(i % 2) && !(i % 3) && !(i % 10)) {
        result = i + " is even, a multiple of 3, a multiple of 10";
      }
  
      console.log(String(result));
    }
  }

checkDivision(
    Number(prompt("Please, enter begining of the range:")),
    Number(prompt("Now, please enter the end of the range:"))
);




//If you want to output the result on screen

//   for (let i = beginRange; i <= endRange; i++) {
//     let result = i;

//     if (!(i % 2)) {
//       document.write(result = result + " is even");
//     }

//     if (!(i % 3)) {
//         document.write(result = result + " is a multiple of 3");
//     }

//     if (!(i % 10)) {
//         document.write(result = result + " is a multiple of 10");
//     }

//     if (!(i % 2) && !(i % 3)) {
//         document.write(result = i + " is even, a multiple of 3");
//     }

//     if (!(i % 3) && !(i % 10)) {
//         document.write(result = i + "a multiple of 3, a multiple of 10");
//     }

//     if (!(i % 2) && !(i % 10)) {
//         document.write(result = i + " is even, a multiple of 10");
//     }

//     if (!(i % 2) && !(i % 3) && !(i % 10)) {
//         document.write(result = i + " is even, a multiple of 3, a multiple of 10");
//     }

//     console.log(String(result));
//   }
// }

// checkDivision(
//   Number(prompt("Please, enter begining of the range:")),
//   Number(prompt("Now, please enter the end of the range:"))
// );