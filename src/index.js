import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CatFactsService from './js/CatFactsService';

//Business Logic

function getFacts(number) {
  CatFactsService.getFacts(number)
    .then(function(response) {
      if(response.data) {
        printElements(response, number);
      } else {
        printError();
      }
    });
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
  document.getElementById("inputError").setAttribute("class", "hidden");
  const number = document.querySelector('#number-input').value;

  if (!number) {
    document.getElementById("inputError").removeAttribute("class");
  } else {
    document.querySelector('#number-input').value = null;
    document.getElementById("inputError").setAttribute("class", "hidden");
    getFacts(number);
  }
}

window.addEventListener("load", function() {
  document.querySelector("#cat-facts-form").addEventListener("submit", handleFormSubmission);
});