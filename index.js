const firstForm = document
  .getElementById("letter")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("working", e);
    fetch(
      `https://thecocktaildb.com/api/json/v1/1/search.php?f=${e.target[0].value}`
    ).then((response) =>
      response.json().then((response) => console.log("response", response))
    );
  });

const secondForm = document
  .getElementById("alcohol")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("working", e);
    fetch(
      `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${e.target[0].value}`
    )
      .then((resp) => resp.json())
      .then((resp) =>
        resp.drinks.map((drink) => {
          const drinkList = document.getElementById("drinks");
          const li = document.createElement("li");
          li.id = "different-drinks";
          const h2 = document.createElement("h2");
          const img = document.createElement("img");
          const div = document.createElement("div");
          div.id = "hover";
          div.textContent = "drink responsibily";
          img.addEventListener("click", () => {
            alert("drink responsibily");
          });
          img.src = drink.strDrinkThumb;
          h2.textContent = drink.strDrink;
          li.append(h2, img);
          drinkList.append(li);
        })
      );
  });
