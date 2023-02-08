import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CatFacts from './js/catfacts.js';

//Business Logic

async function getFacts(number) {
  const response = await CatFacts.getFacts(number);
  if (response.data[0]) {
    printFacts(response, number);
  } else {
    // printError(response, number);
  }
}

//UI Logic
function printFacts(response, number) {
  document.getElementById("show-cat-facts").innerText = `meow meow meow. Here's ${number} facts:
  ${response}`;
}

// function printError(error, number) {

// }

function handleFormSubmission() {
  const number = document.getElementById("number-input").value;
  getFacts(number);
}

window.addEventListener("load", function() {
document.getElementById("cat-facts-button").addEventListener("click", handleFormSubmission);
});