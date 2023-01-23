//User should be able to create an alert on page load

document.addEventListener("DOMContentLoaded", pageLoadAlert());

function pageLoadAlert() {
  alert(`Welcome! By clicking "OK", you confirm you are over the age of 21.`);
}

// User should be able to set up "submit" event listeners on both forms that take callback functions

const firstForm = document
  .getElementById("letter")
  .addEventListener("submit", initialShot);
const secondForm = document
  .getElementById("alcohol")
  .addEventListener("submit", alcoholType);

// User should create a callback function for each "submit" event listener

function initialShot(e) {
  e.preventDefault(); // prevents page from reloading on submit)
  const ul = document.createElement("ul");
  ul.id = "drinks";
  const drinkDiv = document.getElementById("drinkContainer");
  drinkDiv.innerHTML = "";

  // use "fetch()" to make an asynchronous GET request to cocktaildb API

  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e.target[0].value}`
  )
    .then((response) => response.json())
    .then((response) => {
      //render the returned data to the DOM for each element

      response.drinks.forEach((drink) => {
        const h2 = document.createElement("h2");
        h2.textContent = drink.strDrink;

        // user should "click" event listener that takes a callback function that displays recipe of drinks when cocktail name is clicked

        h2.addEventListener("click", (e) =>
          showInstructions(drink.strDrink, e)
        );

        const img = document.createElement("img");
        img.src = drink.strDrinkThumb;

        const li = document.createElement("li");

        li.append(h2, img);
        ul.append(li);
      });
    });

  drinkDiv.append(ul);
}

// User should repeat the same steps used in the initialShot function to create the function alcoholType

function alcoholType(e) {
  e.preventDefault();
  // console.log("working", e);
  const ul = document.createElement("ul");
  const drinkDiv = document.getElementById("drinkContainer");
  drinkDiv.innerHTML = "";
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${e.target[0].value}`
  )
    .then((response) => response.json())
    .then((response) =>
      response.drinks.forEach((drink) => {
        const li = document.createElement("li");

        const h2 = document.createElement("h2");
        h2.textContent = drink.strDrink;
        h2.addEventListener("click", (e) =>
          showInstructions(drink.strDrink, e)
        );

        const img = document.createElement("img");
        img.src = drink.strDrinkThumb;

        li.append(h2, img);
        ul.append(li);
      })
    );
  drinkDiv.append(ul);
}

// User should create a function called showInstructions that will create a GET request using fetch() and paste each drink instruction on the DOM when a drink name is clicked.

function showInstructions(drinkName) {
  const drinkDiv = document.getElementById("drinkInstructions");
  drinkDiv.innerHTML = "";

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
    .then((response) => response.json())
    .then((response) =>
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
      })
    );
}
