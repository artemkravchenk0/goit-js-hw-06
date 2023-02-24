const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')

const liIngridients = ingredients.map(element => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = element;
  return liEl;
});

ulEl.append(...liIngridients);
