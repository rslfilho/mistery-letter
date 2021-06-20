const createdLetter = 'carta-gerada';

const styleGroup = {
  style: ['newspaper', 'magazine1', 'magazine2', 'newspaper', 'magazine1', 'magazine2'],
  size: ['medium', 'big', 'reallybig', 'medium', 'big', 'reallybig'],
  rotation: ['rotateleft', 'rotateright', 'rotateleft', 'rotateright', 'rotateleft', 'rotateright'],
  skew: ['skewleft', 'skewright', 'skewleft', 'skewright', 'skewleft', 'skewright'],
};

function createClassList(element) {
  const keys = ['style', 'size', 'rotation', 'skew'];

  for (let index = 0; index < keys.length; index += 1) {
    const randonStyle = Math.floor(Math.random() * 6);
    element.classList.add(styleGroup[keys[index]][randonStyle]);
  }
}

function removeLetter() {
  const parentElement = document.getElementById(createdLetter);
  const elementsToRemove = document.querySelectorAll('span');

  for (let index = 0; index < elementsToRemove.length; index += 1) {
    parentElement.removeChild(elementsToRemove[index]);
  }
}

function eventClickWord(element) {
  element.addEventListener('click', (event) => {
    const clickedSpan = event.target;
    clickedSpan.className = '';
    createClassList(event.target);
  });
}

function createLetter() {
  removeLetter();
  const inputText = document.getElementById('carta-texto').value;
  const splitedText = inputText.split(' ');
  const parentElement = document.getElementById(createdLetter);

  for (let index = 0; index < splitedText.length; index += 1) {
    const word = document.createElement('span');
    word.innerHTML = splitedText[index];
    createClassList(word);
    parentElement.appendChild(word);
    eventClickWord(word);
  }
}

function countWords() {
  const wordSpan = document.querySelectorAll('span');
  const counter = document.getElementById('carta-contador');

  counter.innerHTML = wordSpan.length;
}

function eventClickButton() {
  const createButton = document.getElementById('criar-carta');

  createButton.addEventListener('click', () => {
    const inputText = document.getElementById('carta-texto');

    if (inputText.value === '' || inputText.value === ' ') {
      const parentElement = document.getElementById(createdLetter);
      parentElement.innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
      createLetter();
      countWords();
    }
  });
}

eventClickButton();
