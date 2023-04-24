/* Напиши скрипт створення і очищення колекції елементів. 
- Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. 
- Натисненням на кнопку Очистити, колекція елементів очищається.
- Створи функцію createBoxes(amount), яка приймає один параметр - число. 
Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
- Розміри першого <div> - 30px на 30px.
- Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
- Всі елементи повинні мати випадковий колір фону у форматі HEX. 
- Використовуй готову функцію getRandomHexColor для отримання кольору.
- Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const input = document.querySelector('input');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = parseInt(input.value);
  let boxSize = 30;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    boxSize += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}