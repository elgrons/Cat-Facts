import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import CatFacts from './js/catfacts.js';

//Business Logic

function getFacts(number) {
  let request = new XMLHttpRequest();
  const url = `https://meowfacts.herokuapp.com/?count=${number}`;
  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response, number);
    } else if (this.status === 404) {
      printError();
    }
  });
  request.open("GET", url, true);
  request.send();
}
// UI Logic

function printElements(response, number) {
  document.querySelector('#show-cat-facts').innerText = `meow meow meow! Here's ${number} facts: ${response.data}`;
}

function printError() {
  document.querySelector('#showResponse').innerText = `hiss hiss! There was an error accessing your cat facts`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const number = document.querySelector('#number-input').value;
  document.querySelector('#number-input').value = null;
  getFacts(number);
}

window.addEventListener("load", function() {
  document.querySelector("#cat-facts-form").addEventListener("submit", handleFormSubmission);
});


