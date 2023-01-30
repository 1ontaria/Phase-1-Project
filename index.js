document.addEventListener("DOMContentLoaded", pageLoadAlert);

function pageLoadAlert() {
  alert(`Welcome! By clicking "OK", you confirm you are over the age of 21.`);
}

const firstForm = document
  .getElementById("letter")
  .addEventListener("submit", initialShot);
const secondForm = document
  .getElementById("alcohol")
  .addEventListener("submit", alcoholType);

const drinkDiv = document.getElementById("drinkContainer");

function initialShot(e) {
  e.preventDefault();
  drinkDiv.innerHTML = "";
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e.target[0].value}`
  )
    .then((response) => response.json())
    .then((response) => {
      response.drinks.forEach(appendDrinks);
    });
}

function alcoholType(e) {
  e.preventDefault();
  drinkDiv.innerHTML = "";
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${e.target[0].value}`
  )
    .then((response) => response.json())
    .then((response) => response.drinks.forEach(appendDrinks));
}

function appendDrinks(drink) {
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  h2.textContent = drink.strDrink;
  h2.addEventListener("click", () => {
    showInstructions(drink.strDrink);
  });

  const img = document.createElement("img");
  img.src = drink.strDrinkThumb;

  li.append(h2, img);
  ul.append(li);
  drinkDiv.append(ul);
}

function showInstructions(drinkName) {
  const drinkDiv = document.getElementById("drinkInstructions");
  drinkDiv.innerHTML = "";

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      response.drinks.forEach((drink) => {
        const drinkInstructions = [
          drink.strIngredient1,
          drink.strIngredient2,
          drink.strIngredient3,
          drink.strIngredient4,
          drink.strIngredient5,
        ];

        const p = document.createElement("p");
        p.textContent = drinkInstructions
          .filter((element) => element != null)
          .join(", ");
        p.id = "instructions";

        drinkDiv.append(p);
      });
    });
}
