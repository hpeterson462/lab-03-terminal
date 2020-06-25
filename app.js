//button color change

const pinkButton = document.getElementById('pink');

pinkButton.addEventListener('click', () => {
  header.style.backgroundColor = 'pink';
  footer.style.backgroundColor = 'pink';
})

const greenButton = document.getElementById('lightGreen');

greenButton.addEventListener('click', () => {
  header.style.backgroundColor = 'lightGreen';
  footer.style.backgroundColor = 'lightGreen';
})

const blueButton = document.getElementById('lightBlue');

blueButton.addEventListener('click', () => {
  header.style.backgroundColor = 'lightBlue';
  footer.style.backgroundColor = 'lightBlue';
})

//user input name

const userInput = document.getElementById('input');

submitButton.addEventListener('click', () => {
  document.getElementById('name').textContent = input.value;
})

//counter

const userCounter = document.getElementById('counter');

let i = 0;

submitButton.addEventListener('click', () => {
  document.getElementById('counter').textContent = i++;
})

pinkButton.addEventListener('click', () => {
  document.getElementById('counter').textContent = i++;
})

greenButton.addEventListener('click', () => {
  document.getElementById('counter').textContent = i++;
})

blueButton.addEventListener('click', () => {
  document.getElementById('counter').textContent = i++;
})

