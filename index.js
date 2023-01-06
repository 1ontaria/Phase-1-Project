document.addEventListener("DOMContentLoaded", pageLoadAlert());

function pageLoadAlert() {
  alert(`Welcome! By clicking "OK", you confirm you are over the age of 21.`);
}

const firstForm = document
  .getElementById("letter")
  .addEventListener("submit", initialShot);

function initialShot(e) {
  e.preventDefault();
  console.log("working", e);
  fetch(
    `http://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e.target[0].value}`
  )
    .then((response) => response.json())
    .then((response) => {
      response.drinks.forEach((drink) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
      });
      console.log(response);
    });
}
