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
      .then((response) =>
        response.drinks.map((drink) => {
          // const initialList = document.getElementById("more-drinks");
          const ul = document.createElement("ul");
          ul.id = "drinks";
          const drinkDiv = document.getElementById("drinkContainer");
          const li = document.createElement("li");
          li.id = "different-drinks";
          const h2 = document.createElement("h2");
          const img = document.createElement("img");
          const div = document.createElement("div");
          div.id = "hover";
          div.textContent = "drink responsibily";
          img.src = drink.strDrinkThumb;
          h2.textContent = drink.strDrink;
          li.append(h2, img);
          ul.append(li);
          drinkDiv.append(ul);
        })
      );
    e.target[0].value = "";
  }
}

function alcoholDrink(e) {
  // const drinkList = document.getElementById("drinks");

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
        const img = document.createElement("img");
        img.addEventListener("click", () => {
          console.log("hey!");
        });
        img.src = drink.strDrinkThumb;
        h2.textContent = drink.strDrink;
        li.append(h2, img);
        ul.append(li);
      });
      drinkDiv.append(ul);
      e.target[0].value = "";
    });
}

// function refreshOnSubmit() {
//   const cheersButton = document.getElementById("drink-up");
// }
