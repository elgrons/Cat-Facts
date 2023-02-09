import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CatFactsService from './js/CatFactsService';

//Business Logic

function getFacts(number, language) {
  CatFactsService.getFacts(number, language)
    .then(function(response) {
      if(response.data) {
        printElements(response);
      } else {
        printError();
      }
    });
}

// UI Logic

function printElements(response) {
  let div = document.querySelector('#show-cat-facts');
  let ul = document.createElement("ul");
  const kitty = `${response.data}`;
  const kittyArray = Array.from(kitty);
  kittyArray.forEach(function() {
    let li = document.createElement("li");
    li.append(kitty);
    ul.append(li);
    console.log(ul);
  });
  div.append(ul);
}

function printError() {
  document.querySelector('#showResponse').innerText = `hiss hiss! There was an error accessing your cat facts`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  document.getElementById("inputError").setAttribute("class", "hidden");
  const number = document.querySelector('#number-input').value;
  const language = document.getElementById("language-input").value;

  if (!number) {
    document.getElementById("inputError").removeAttribute("class");
  } else {
    document.querySelector('#number-input').value = null;
    document.getElementById("inputError").setAttribute("class", "hidden");
    getFacts(number, language);
  }
}

window.addEventListener("load", function() {
  document.querySelector("#cat-facts-form").addEventListener("submit", handleFormSubmission);
});