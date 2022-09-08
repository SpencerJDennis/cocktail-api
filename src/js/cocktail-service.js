export class RandomCocktail {
  static getRandomCocktail() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response]);
        } else {
          reject([this, response]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}

export class Search {
  static async byIngredient(ingredient) {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}
        ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
}

