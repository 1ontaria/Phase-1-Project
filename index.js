document.addEventListener("DOMContentLoaded", pageLoadAlert());

const firstForm = document
  .getElementById("letter")
  .addEventListener("submit", initialDrink);

const secondForm = document
  .getElementById("alcohol")
  .addEventListener("submit", alcoholDrink);

function pageLoadAlert() {
  alert("Welcome! Please drink responisibly!");
}

function initialDrink(e) {
  {
    e.preventDefault();
    console.log("working", e);
    fetch(
      `https://thecocktaildb.com/api/json/v1/1/search.php?f=${e.target[0].value}`
    )
      .then((response) => response.json())
      .then((response) => {
        const ul = document.createElement("ul");
        ul.id = "drinks";
        const drinkDiv = document.getElementById("drinkContainer");
        drinkDiv.innerHTML = "";
        response.drinks.forEach((drink) => {
          // const initialList = document.getElementById("more-drinks");
          const li = document.createElement("li");
          li.className = "different-drinks";
          const h2 = document.createElement("h2");
          h2.textContent = drink.strDrink;

          h2.addEventListener("click", (e) => nameResults(drink.strDrink, e));

          const img = document.createElement("img");
          img.src = drink.strDrinkThumb;

          li.append(h2, img);
          ul.append(li);
        });
        drinkDiv.append(ul);
        e.target[0].value = "";
      });
  }
}

function alcoholDrink(e) {
  e.preventDefault();
  //console.log("working", e);
  fetch(
    `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${e.target[0].value}`
  )
    .then((resp) => resp.json())
    .then((resp) => {
      const ul = document.createElement("ul");
      ul.id = "drinks";
      const drinkDiv = document.getElementById("drinkContainer");
      drinkDiv.innerHTML = "";
      resp.drinks.forEach((drink) => {
        const li = document.createElement("li");
        li.className = "different-drinks";
        const h2 = document.createElement("h2");
        h2.textContent = drink.strDrink;
        const img = document.createElement("img");
        img.src = drink.strDrinkThumb;

        h2.addEventListener("click", (e) => nameResults(drink.strDrink, e));

        li.append(h2, img);
        ul.append(li);
      });
      drinkDiv.append(ul);
      e.target[0].value = "";
    });
}

function nameResults(drinkName, e) {
  console.log("event", e);
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
  ).then((response) =>
    response.json().then((response) => {
      const ul = document.createElement("ul");
      ul.id = "instructions";
      const drinkInstructions = document.getElementById("drinkInstructions");
      drinkInstructions.innerHTML = "";
      response.drinks.forEach((drink) => {
        const li = document.createElement("li");
        li.className = "different-drinks";
        const drinkDirections = [
          drink.strIngredient1,
          drink.strIngredient2,
          drink.strIngredient3,
          drink.strIngredient4,
          drink.strIngredient5,
        ];
        const h2 = document.createElement("h2");
        h2.textContent = drinkDirections
          .filter((element) => element != null)
          .join(", ");
        li.append(h2);
        ul.append(li);
      });
      drinkInstructions.append(ul);
    })
  );
}
