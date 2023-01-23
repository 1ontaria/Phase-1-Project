# Name

DrinkSelector

## Introduction

If you're an indecisive person or someone who loves to try new drinks, DrinkSelector takes and random initial of you're favorite spirit (RUm, Vodka, Tequila, etc.) and generates a list of different drinks. When you click on the name of the drinks the ingredients are shown.

## Learning Goals

- User should be able to create an alert on page load
- Set up "submit" event listeners on both forms
- Use "fetch()" to make a GET request to cocktaildb API and render the returned data to the DOM
- create an event listener that displays recipe of drinks when cocktail name is clicked

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

## Acknowledgments

The API, images, and ingredients used used in this project come from https://thecocktaildb.com/.

### Specfic APIs Used

List all cocktails by first letter
www.thecocktaildb.com/api/json/v1/1/search.php?f=a

Search ingredient by name
www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

Search by ingredient
www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
