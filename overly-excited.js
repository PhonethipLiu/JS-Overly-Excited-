console.log("JS Overly excited is working");

// ============== Stacking Words =================//
// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

let nextSentence = ["I", "am", "writing", "coding", "an", "array", "of", "words", "for", "a", "new", "sentence"];
/*
    The addExcitement function should be an impure function, and accept the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
let markedUpSentence = "";

// fat arrow time
let addExcitement = (array, punctuation) => {
    
    for (var i = 0; i < array.length; i++){ //loops thru an array
        markedUpSentence += " " + array[i]; //add to the markedUpSentence a space and index item from sentence array
        console.log(markedUpSentence); // this displays the looped words in sentence array
        document.getElementById("excited").innerHTML += `${markedUpSentence} <br>`;

        // ***** Even More puncs ****//
        if (i % 3 > 1) { // conditions for the loop; if the remainder of index item is greater than 1 
            let x = i / 3; // and the index is divisible by 3 
            for (var j = 0; j < x; j++) // loop for this condition
            markedUpSentence += punctuation; // then add an punctuation to the markedUpSentence
        } 
    }
     console.log(markedUpSentence); // this displays the looped words in sentence array with the added punctuation when the conditions are met
    document.getElementById("excited").innerHTML += `${markedUpSentence}<br><br>`;
};

// Invoke the function and pass in the array

//addExcitement(sentence,"?");

addExcitement(nextSentence,"&");







