document.addEventListener("DOMContentLoaded", pageLoadAlert());

const firstForm = document
  .getElementById("letter") // grabs the first form box
  .addEventListener("submit", initialDrink); // adds an event listener to the 'Take a shot!' button, when button is clicked, initialDrink call back function grabs data matching user-entered information in 'Pick any inital' form and appends the information on the page.

const secondForm = document
  .getElementById("alcohol")
  .addEventListener("submit", alcoholDrink);

function pageLoadAlert() {
  alert("Welcome! Please drink responisibly!");
}

function initialDrink(e) {
  // creates intial drink function
  {
    e.preventDefault(); // prevents page from reloading when 'Take a shot!' button is pressed
    console.log("working", e);
    fetch(
      `https://thecocktaildb.com/api/json/v1/1/search.php?f=${e.target[0].value}` // fetches API based on what the user enters
    )
      .then((response) => response.json()) // first .then() retrieves API data and returns it in JSON
      .then((response) => {
        // second .then() takes a call back function with the data to apppend to DOM
        const ul = document.createElement("ul"); // creates unordered list
        ul.id = "drinks"; // gives unordered list the id of "drinks"
        const drinkDiv = document.getElementById("drinkContainer"); // grabs the div elements with the id of "drinkContainer"
        drinkDiv.innerHTML = ""; //
        response.drinks.forEach((drink) => {
          // specifies to grab the array inside of the resonse, and apply the forEach() method to each of the array's elements
          const li = document.createElement("li"); // creates li element for each piece of data returned
          li.className = "different-drinks"; // give each li element the class name of "different-drinks"
          const h2 = document.createElement("h2"); // creates a h2 element for each piece of data returned
          h2.textContent = drink.strDrink; // the h2 name the drink that matches the name in the "drinks" array

          h2.addEventListener("click", (e) => nameResults(drink.strDrink, e)); // adds an event listener that

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
      const dt = document.createElement("dt");
      dt.id = "drinks";
      const drinkDiv = document.getElementById("drinkContainer");
      drinkDiv.innerHTML = "";
      resp.drinks.forEach((drink) => {
        const dl = document.createElement("dl");
        dl.className = "different-drinks";
        const h2 = document.createElement("h2");
        h2.textContent = drink.strDrink;
        const img = document.createElement("img");
        img.src = drink.strDrinkThumb;

        h2.addEventListener("click", (e) => nameResults(drink.strDrink, e));
        dl.append(h2, img);
        dt.append(dl);
      });
      drinkDiv.append(dt);
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
