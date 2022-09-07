export class RandomCocktail {
  static getRandomCocktail() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://www.thecocktaildb.com/api/json/v1/1/random.php`;

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