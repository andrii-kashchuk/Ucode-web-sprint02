// Number
const numberVar = 100;

// BigInt
const bigIntVar = 1234567890123456789012345678901234567890n;

// String
const stringVar = 'String text';

// Boolean
const booleanVar = true;

// Null
const nullVar = null;

// Undefined
const undefinedVar = undefined;

// Object
const objectVar = {
    Var1: 1, 
    Var2: 2};

// Symbol
const symbolVar = Symbol('id')

// Function
function myFunctionVar() {
}

alert('numberVar is ' + typeof(numberVar) + 
    '\nbigIntVar is ' + typeof(bigIntVar) + 
    '\nstringVar is ' + typeof(stringVar) + 
    '\nbooleanVar is ' + typeof(booleanVar) + 
    '\nnullVar is ' + typeof(nullVar) + 
    '\nundefinedVar is ' + typeof(undefinedVar) + 
    '\nobjectVar is ' + typeof(objectVar) + 
    '\nsymbolVar is ' + typeof(symbolVar) + 
    '\nmyfunctionVar is ' + typeof(myFunctionVar));
