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
  let answer = document.getElementById('answer');
  const displayImage = document.createElement("img");
  displayImage.setAttribute("src", `${cocktail[0].drinks[0].strDrinkThumb}`);
  displayImage.setAttribute("height", "100px");
  answer.append(`Your random cocktail is called ${cocktail[0].drinks[0].strDrink}.`);
  answer.append(displayImage);

  const ingredientsArray = [cocktail[0].drinks[0].strIngredient1, cocktail[0].drinks[0].strIngredient2, cocktail[0].drinks[0].strIngredient3,cocktail[0].drinks[0].strIngredient4, cocktail[0].drinks[0].strIngredient5,cocktail[0].drinks[0].strIngredient6, cocktail[0].drinks[0].strIngredient7,cocktail[0].drinks[0].strIngredient8, cocktail[0].drinks[0].strIngredient9, cocktail[0].drinks[0].strIngredient10, cocktail[0].drinks[0].strIngredient11, cocktail[0].drinks[0].strIngredient12,cocktail[0].drinks[0].strIngredient13, cocktail[0].drinks[0].strIngredient14,cocktail[0].drinks[0].strIngredient15];

  const measureArray = [cocktail[0].drinks[0].strMeasure1, cocktail[0].drinks[0].strMeasure2, cocktail[0].drinks[0].strMeasure3,cocktail[0].drinks[0].strMeasure4, cocktail[0].drinks[0].strMeasure5,cocktail[0].drinks[0].strMeasure6, cocktail[0].drinks[0].strMeasure7,cocktail[0].drinks[0].strMeasure8, cocktail[0].drinks[0].strMeasure9, cocktail[0].drinks[0].strMeasure10, cocktail[0].drinks[0].strMeasure11, cocktail[0].drinks[0].strMeasure12,cocktail[0].drinks[0].strMeasure13, cocktail[0].drinks[0].strMeasure14,cocktail[0].drinks[0].strMeasure15];


  for (let i = 0; i < 15; i++) {
    if(ingredientsArray[i] === null){
      ingredientsArray.splice(i, 15);
      measureArray.splice(i, 15); //might need to separate out later
    }
  }
  console.log(ingredientsArray + "ingredients");
  console.log(measureArray + "measure");

}

function printError(error) {
  document.getElementById('showResponse').innerText = `There was an error accessing the cocktail data: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

function handleFormSubmission() {
  let answer = document.getElementById('answer');
  answer.innerHTML = "";
  getRandomCocktail();
}

document.querySelector('form').addEventListener("click", handleFormSubmission);