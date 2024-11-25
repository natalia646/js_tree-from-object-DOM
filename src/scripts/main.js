'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  for (const item in data) {
    const li = document.createElement('li');

    li.textContent = item;

    if (Object.values(data[item]).length > 0) {
      element.append(li);

      const ul = document.createElement('ul');

      li.append(ul);
      createTree(ul, data[item]);
    }
    element.append(li);
  }
}

createTree(tree, food);
