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
  const dl = document.createElement("dl");
  dl.id = "drinks";
  const drinkDiv = document.getElementById("drinkContainer");
  drinkDiv.innerHTML = "";
  fetch(
    `http://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e.target[0].value}`
  )
    .then((response) => response.json())
    .then((response) => {
      response.drinks.forEach((drink) => {
        const dt = document.createElement("dt");
        dt.textContent = drink.strDrink;
        const dd = document.createElement("dd");
        const img = document.createElement("img");
        img.src = drink.strDrinkThumb;

        dd.append(img);
        dt.append(dd);
        dl.append(dt);
      });
      console.log(response);
    });

  drinkDiv.append(dl);
}
