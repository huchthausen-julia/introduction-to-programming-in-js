
/*
01) removeItem function
Implement a removeItem function.

 - The first parameter is an array.
 - The second parameter is a number. It's the non-zero-based index of the item that should get deleted.
 - Remove the item and return an array.
 - Ensure that the original array was not mutated.
// TODO: Implement the removeItem function
*/


function removeItem(arr, nonZeroBasedIndex) {
    const newArray = arr.slice(); // macht eine Kopie vom urspr. Array 
    const index = nonZeroBasedIndex -1; //wandelt einen non-zero-based index in einen zero-based Index
    newArray.splice(index, 1);// splice akzeptiert 2 Parameter: den Index, an dem Elemente hinzugefügt oder entfernt werden sollen und die Anzahl der Elemente, die entfernt oder ersetzt werden sollen.
    return newArray;
};

const animals = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]

console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

/*
sumOfCharacters function
Implement a sumOfCharacters function.

 - The function has one parameter, which is an array.
 - Check the type of each array entry. If it's a string then store the count of characters.
 - The function returns the total sum of all characters.
 */
function sumOfCharacters(arr) {             // der Paramater 'arr' dient als Eingabe-Array
    let sum = 0;                            // die Variable 'sum' wird mit 0 initialisiert

    arr.forEach(function(element) {         // die forEachSchleife durchläuft jedes Element des Eingabe-Arrays
      if (typeof element === 'string') {    //für jedes Element prüft die if Condition, ob das Element ein String ist
        sum += element.length;              // wenn das Element ein String ist, wird die Länge des Strings zur Variablen 'sum' addiert
      }
    });
  
    return sum;                             // die gesamte Summe der Anzahl an Zeichen wird zurückgegeben.
};


const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55