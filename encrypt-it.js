/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    let eButton = document.querySelector("#encrypt-it");
    eButton.addEventListener("click", shift);
    let rButton = document.querySelector("#reset");
    rButton.addEventListener("click", reset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function shift() {
    let text = document.getElementById("input-text");
    text = text.value.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    document.getElementById("result").innerHTML = result;
  }

  function reset() {
    document.getElementById("input-text").value = "";
  }

})();

function changeFont() {
  let text = document.getElementById("input-text");
  let textSizeL = document.getElementById("text-size-large").checked;
  let largeFont = document.getElementById("text-size-large").value;
  let textSizeS = document.getElementById("text-size-small").checked;
  let smallFont = document.getElementById("text-size-small").value;

  if(textSizeL) {
    text.style.fontSize = largeFont;
  }

  if(textSizeS) {
    text.style.fontSize = smallFont;
  }
}
