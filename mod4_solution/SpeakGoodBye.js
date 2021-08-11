
// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function (window){

// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
var byeSpeaker = { };

var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}
// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
window.byeSpeaker = byeSpeaker;
})(window);

// (Note, Step 10, 11 and 12 done in the script.js file.)