console.log("JS Overly excited is working");

// ============== Stacking Words =================//
// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
let wordArray =[];

function addExcitement () {
    
    for (var i = 0; i < sentence.length; i++){ //loops thru sentence array
        wordArray += " " + sentence[i]; //add the wordArray a space and index item from sentence array
        console.log(wordArray); // this displays the looped words in sentence array

        // ***** Even More Excited ****//
        if (i % 3 > 1) { // conditions for the loop; if the remainder of index item is greater than 1 
            let x = i / 3; // and the index is divisible by 3 
            for (var j = 0; j < x; j++) // loop for this condition
            wordArray += "!"; // then add an ! to the wordArray
        } 
    }
     console.log(wordArray); // this displays the looped words in sentence array with the added ! when the conditions are met
}


// Invoke the function and pass in the array
addExcitement(sentence);






// ============= Even More Excited =========//

// Add logic in the addExcitement function to the increase the number of exclamation points after every third word. The number of exclamation points (!) will be determined by how many times the counter variable can be divided by 3.

// Example output:

// The
// The walrus
// The walrus danced!
// The walrus danced! through
// The walrus danced! through the
// The walrus danced! through the trees!!
// The walrus danced! through the trees!! in
// The walrus danced! through the trees!! in the
// The walrus danced! through the trees!! in the light!!!
// The walrus danced! through the trees!! in the light!!! of
// The walrus danced! through the trees!! in the light!!! of the
// The walrus danced! through the trees!! in the light!!! of the moon!!!!






