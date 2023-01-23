# Name

DrinkSelector

## Introduction

If you're an indecisive person or someone who loves to try new drinks, DrinkSelector takes and random initial of you're favorite spirit (Rum, Vodka, Tequila, etc.) and generates a list of different drinks. When you click on the name of the drinks the ingredients are shown.

## Learning Goals

- User should be able to create an alert on page loa
- Set up "submit" event listeners on both forms that take callback functions
- Also, when buttons on forms are pressed, use "fetch()" to make a GET request to cocktaildb API and render the returned data to the DOM
- create an "click" event listener that takes a callback function that displays recipe of drinks when cocktail name is clicked

## Usage

Throughout this project, three diffrenent event listeners were used:

```javascript
.addEventListenter("DOMContentLoaded", () => {})
.addEventListenter("submit", () => {})
.addEventListenter("click", () => {})
```

To simplify my code, I created separate functions to use as a callback functions for the event listener. For example, when the event listener DOMContentLoaded is triggered, the callback function pageLoadALert is also called and an alert is triggered when the page loads.

```javascript
document.addEventListener("DOMContentLoaded", pageLoadAlert());

function pageLoadAlert() {
  alert(`Welcome! By clicking "OK", you confirm you are over the age of 21.`);
}
```

I used "fetch()" to make a GET request to thecocktaildb's API and appened the data needed to the DOM by using the forEach() array method. I created a h2, ul, li, and img, to append to the #drinkContainer div:

```javascript
fetch(
  `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${e.target[0].value}`
)
  .then((response) => response.json())
  .then((response) =>
    response.drinks.forEach((drink) => {
      const li = document.createElement("li");

      const h2 = document.createElement("h2");
      h2.textContent = drink.strDrink;
      h2.addEventListener("click", (e) => showInstructions(drink.strDrink, e));

      const img = document.createElement("img");
      img.src = drink.strDrinkThumb;

      li.append(h2, img);
      ul.append(li);
    })
  );
```

By using and repeating those steps, I was able to create a single page application that loads drink options based off of an initial or a specific spirit. I was also able to show ingredients of the drinks by clicking the drink name.

## Acknowledgments

The API, images, and ingredients used used in this project come from https://thecocktaildb.com/.

### Specfic APIs Used

List all cocktails by first letter
www.thecocktaildb.com/api/json/v1/1/search.php?f=a

Search ingredient by name
www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

Search by ingredient
www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
