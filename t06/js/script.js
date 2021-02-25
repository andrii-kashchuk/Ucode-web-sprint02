let fName = prompt("Please, enter your first name.");
let lName = prompt("Please, enter your last name.");

    if (fName.match(/^\b[a-zA-Z]+\b$/i) && lName.match(/^\b[a-zA-Z]+\b$/i)) {       /* Если ^ (начало ввода) является \b (отдельным словом) состоящим из [a-zA-Z] (прописных или заглавных букв) и следующее отдельное слово \b соответствует $ (концу ввода) то */
        let capFirstName = fName[0].toUpperCase() + fName.slice(1).toLowerCase();   /* создаем переменную capFirstName в которой берем первую букву [0] из переменной fName и делаем ее заглавной .toUpperCase() и добавляем к этой уже заглавной первой букве остаток слова в нижнем регистре fName.slice(1).toLowerCase() */
        let capLastName = lName[0].toUpperCase() + lName.slice(1).toLowerCase();
        
        alert('Greetings to ' + capFirstName + ' ' + capLastName + '!' + ' It is a good day to learn something :) !');
    
    } else {
        alert("Wrong input!");
    }
