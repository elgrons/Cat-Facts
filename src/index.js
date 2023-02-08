import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CatFacts from './js/catfacts.js';

//Business Logic

async function getFacts(number) {
  const response = await CatFacts.getFacts(number);
  if (response.data) {
    printFacts(response, number);
  } else {
    printError(response, number);
  }
}

//UI Logic

