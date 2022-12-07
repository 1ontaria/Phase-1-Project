document.addEventListener("DOMContentLoaded", () => {
  alert("Welcome! Please drink responisibly!");
});

const firstForm = document
  .getElementById("letter")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("working", e);
    fetch(
      `https://thecocktaildb.com/api/json/v1/1/search.php?f=${e.target[0].value}`
    )
      .then((response) => response.json())
      .then((response) =>
        response.drinks.map((drink) => {
          const initialList = document.getElementById("more-drinks");
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
          initialList.append(li);
        })
      );
    e.target[0].value = "";
  });

function alcoholDrink(e) {
  const drinkList = document.getElementById("drinks");
  drinkList.innerText = "";
  e.preventDefault();
  //console.log("working", e);
  fetch(
    `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${e.target[0].value}`
  )
    .then((resp) => resp.json())
    .then(
      (resp) =>
        resp.drinks.map((drink) => {
          const li = document.createElement("li");
          li.id = "different-drinks";
          const h2 = document.createElement("h2");
          const img = document.createElement("img");
          const div = document.createElement("div");
          div.id = "hover";
          div.textContent = "drink responsibily";
          img.addEventListener("click", () => {
            fetch(
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552"
            )
              .then((resp) => resp.json())
              .then((resp) =>
                resp.drinks.forEach(drink => {
                ((drink) => {
                  alert(drink.idDrink);
                })
              );
          });
          img.src = drink.strDrinkThumb;
          h2.textContent = drink.strDrink;
          li.append(h2, img);
          drinkList.append(li);
        }),
      (e.target[0].value = "")
    );
}

const secondForm = document
  .getElementById("alcohol")
  .addEventListener("submit", alcoholDrink);
