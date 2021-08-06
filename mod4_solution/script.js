// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.

// STEP 1: (NOTHING TO DO. ALREADY DONE FOR YOU)
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// (Note, Step 2 will be done in the SpeakHello.js file.)

// STEP 10: (NOTHING TO DO. ALREADY DONE FOR YOU)
for (var i = 0; i < names.length; i++) {
 
 // STEP 11: (NOTHING TO DO. ALREADY DONE FOR YOU) 

  var firstLetter = names[i].charAt(0).toLowerCase();
  
// STEP 12: (NOTHING TO DO. ALREADY DONE FOR YOU)
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();