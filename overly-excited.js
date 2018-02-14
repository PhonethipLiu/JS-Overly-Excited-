console.log("JS Overly excited is working");

// ============== Stacking Words =================//
// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept the array as the sole argument. It should iterate over the array and output the words to the browser console.
*/
// function addExcitement (theWordArray) {
//     let wordArray = [];
//     for (var i = 0; i < sentence.length; i++){
//         console.log(wordArray += sentence[i] + " ");
//     }
// }

// Invoke the function and pass in the array
// addExcitement(sentence);


// ============= Adding Conditions to the Loop =========//

console.log("")
//this works
function addExcitement (theWordArray) {
    let wordArray = [];
    for (var i = 0; i < sentence.length; i++){
        if (i % 3 > 1) {
             sentence[i] += "!";    
        }
    console.log(wordArray += sentence[i] + " ");
    }
} 

// Invoke the function and pass in the array
addExcitement(sentence);




