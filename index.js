document.addEventListener("DOMContentLoaded", pageLoadAlert());

function pageLoadAlert() {
  alert(`Welcome! By clicking "OK", you confirm you are over the age of 21.`);
}

const firstForm = document
  .getElementById("letter")
  .addEventListener("submit", initialShot);

const secondForm = document
  .getElementById("alcohol")
  .addEventListener("submit", alcoholType);

function initialShot(e) {
  e.preventDefault();
  // console.log("working", e);
  const ul = document.createElement("ul");
  ul.id = "drinks";
  const drinkDiv = document.getElementById("drinkContainer");
  drinkDiv.innerHTML = "";
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e.target[0].value}`
  )
    .then((response) => response.json())
    .then((response) => {
      response.drinks.forEach((drink) => {
        const h2 = document.createElement("h2");
        h2.textContent = drink.strDrink;
        h2.addEventListener("click", (e) =>
          showInstructions(drink.strDrink, e)
        );
        const img = document.createElement("img");
        img.src = drink.strDrinkThumb;
        const li = document.createElement("li");

        li.append(h2, img);
        ul.append(li);
      });
      console.log(response);
    });

  drinkDiv.append(ul);
}

function alcoholType(e) {
  e.preventDefault();
  // console.log("working", e);
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${e.target[0].value}`
  )
    .then((response) => response.json())
    .then((response) => console.log(response));
}

function showInstructions(drinkName, e) {
  console.log("yes", e);
  const drinkDiv = document.getElementById("drinkInstructions");
  drinkDiv.innerHTML = "";
  const ul = document.createElement("ul");
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
    .then((response) => response.json())
    .then((response) =>
      response.drinks.forEach((drink) => {
        // const li = document.createElement("li");
        // li.id = "instructions";
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
