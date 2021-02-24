let addCount;
let addPrice;
let currentTotal;

let total = (addCount, addPrice, currentTotal = 0) => {
    let result = (addCount * addPrice) + currentTotal;
    return result.toFixed(2)
}

// test
let sum = total(1, 0.1);
sum = total(1, 0.2, sum);
sum = total(1, 0.78, sum);
console.log(sum); // will return 1.08