
// 1) oddNumbers function
// Implement a oddNumbers function.

//  -> The function has two parameters, both are numbers.
//  -> Iterate over all numbers between first number and the second number.
//  -> Store all oddNumbers in string, seperated by a comma and return the string.
//  -> Allowed are only positive numbers, add a check.

function oddNumbers(num1, num2) {
    // Check if both numbers are positive
    if (num1 < 0 || num2 < 0) {
        return "Only positive numbers are allowed";
    }
    
    let result = "";
    for (let i = num1; i <= num2; i++) {
        if (i % 2 !== 0) {
            // if number is odd, add it to the result string
            result += i + ","; // --> just like: result = result + i + ",";
        }
    }
    // Remove last comma from result string and return
    return result.slice(0, -1);
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33


/* Wenn mindestens eine Zahl negativ ist, wird der Text "Only positive numbers are allowed" zurückgegeben.
Wenn beide Zahlen positiv sind, wird eine leere Zeichenfolge "result" initialisiert, in der alle ungeraden Zahlen zwischen den beiden 
eingegebenen Zahlen gespeichert werden.
Dann wird eine for-Schleife verwendet, um über alle Zahlen zwischen der ersten und der zweiten Zahl zu iterieren. 
Wenn eine Zahl ungerade ist (d.h. wenn der Rest bei der Division durch 2 ungleich 0 ist), wird sie der "result"-Zeichenfolge hinzugefügt, gefolgt von einem Komma.
Am Ende wird das letzte Komma aus der "result"-Zeichenfolge entfernt und die vollständige Zeichenfolge wird zurückgegeben.*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*02) charCount function

- Implement a charCount function.

- The function has a first parameter for a word which is a string.
- The function has a second parameter which contains the character to search for which is a string.
- Check if the second parameter consists of only one character, if not, quit the function.
- The function returns the number of times the character from the second parameter is present in the word.
- The function should be case insensitive.*/

function charCount(word, char) {
    //Check if the second parameter consists only of one character
    if (char.length !== 1) {
        console.log("the second parameter is no single character!");
        return;
    }

    let count = 0;

    for (let i = 0; i < word.length; i++) {
        const currentChar = word[i];
        if (currentChar.toLowerCase() === char.toLowerCase()) {
            count++;
        }

    }
    return count;
};

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3