document.addEventListener("DOMContentLoaded", pageLoadAlert());

function pageLoadAlert() {
  alert(`Welcome! By clicking "OK", you confirm you are over the age of 21.`);
}

const firstForm = document
  .getElementById("letter")
  .addEventListener("submit", initialShot);

const ul = document.createElement("ul");
ul.id = "drinks";
const drinkDiv = document.getElementById("drinkContainer");
drinkDiv.innerHTML = "";

function initialShot(e) {
  e.preventDefault();
  console.log("working", e);
  fetch(
    `http://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e.target[0].value}`
  )
    .then((response) => response.json())
    .then((response) => {
      response.drinks.forEach((drink) => {
        const h2 = document.createElement("h2");
        h2.textContent = drink.strDrink;

        h2.addEventListener("click", (e) => showIngredients(drink.strDrink, e));

        const li = document.createElement("li");
        li.id = "DrinkList";
        const img = document.createElement("img");
        img.src = drink.strDrinkThumb;

        li.append(h2, img);
        ul.append(li);
      });
      console.log(response);
    });

  drinkDiv.append(ul);
}

function showIngredients(drinkName, e) {
  console.log(e);
  fetch(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
    .then((response) => response.json())
    .then((response) => {
      response.drinks.forEach((drink) => {
        const drinkInstructions = [
          drink.strIngredient1,
          drink.strIngredient2,
          drink.strIngredient3,
          drink.strIngredient4,
          drink.strIngredient5,
        ];
      });
    });
}
