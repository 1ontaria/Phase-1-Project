# Name

DrinkSelector

## Introduction

If you're an indecisive person or someone who loves to try new drinks, DrinkSelector takes and random initial of you're favorite spirit (RUm, Vodka, Tequila, etc.) and generates a list of different drinks. When you click on the name of the drinks the ingredients are shown.

## Learning Goals

- User should be able to create an alert on page load
- Set up "submit" event listeners on both forms
- Use "fetch()" to make a GET request to cocktaildb API and render the returned data to the DOM
- create an event listener that displays recipe of drinks when cocktail name is clicked

## Functionality

## Usage

Throughout this project, three diffrenent event listeners were used:

```javascript
.addEventListenter("DOMContentLoaded", () => {})
.addEventListenter("submit", () => {})
.addEventListenter("click", () => {})
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
