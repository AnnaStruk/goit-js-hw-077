/* HTML містить порожній список ul#ingredients.
Напиши скрипт, який для кожного елемента масиву ingredients:
- Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
- Додасть назву інгредієнта як його текстовий вміст.
- Додасть елементу клас item.
- Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createIngredient = ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;
  ingredientRef.classList.add('item');

  return ingredientRef;
};

const ingredientsList = ingredients.map(ingredient =>
  createIngredient(ingredient),
);

const ingredientsListRef = document.querySelector('#ingredients');
ingredientsListRef.append(...ingredientsList);