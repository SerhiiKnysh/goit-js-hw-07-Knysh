const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

// function

const ingredientsEl = document.querySelector('#ingredients');

const makeIngredientsItems = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;

    return itemEl;
  });
};

const items = makeIngredientsItems(ingredients);
ingredientsEl.append(...items);
console.log(ingredientsEl);

// oldSchool

// const ingredientsEl = document.querySelector("#ingredients");

// const items = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//     const itemEl = document.createElement("li");
//     itemEl.textContent = ingredients[i];

//     items.push(itemEl);
// };

// ingredientsEl.append(...items);
// console.log(ingredientsEl);

// newSchool

// const ingredientsEl = document.querySelector("#ingredients");

// const items = ingredients.map(ingredient => {
//     const itemEl = document.createElement("li");
//     itemEl.textContent = ingredient;
//     return itemEl;
// });

// ingredientsEl.append(...items);
// console.log(ingredientsEl);
