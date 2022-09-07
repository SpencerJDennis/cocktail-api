import { RandomCocktail } from './js/cocktail-service.js'

function getRandomCocktail() {
  let promise = RandomCocktail.getRandomCocktail();
  promise.then(function(cocktail) {
    printElements(cocktail);
  }, function(error) {
    printError(error);
  });
}

function printElements(cocktail) {
  console.log(cocktail)
  document.getElementById('answer').innerText = `Your random cocktail is called ${cocktail[0].drinks[0].strDrink}`;
}

function printError(error) {
  document.getElementById('showResponse').innerText = `There was an error accessing the cocktail data: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

function handleFormSubmission() {
  getRandomCocktail();
}

document.querySelector('form').addEventListener("click", handleFormSubmission);