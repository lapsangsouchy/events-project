/* Get References */
let aquaBtn = document.getElementById('aqua');
let tealBtn = document.getElementById('teal');
let pinkBtn = document.getElementById('pink');
let purpleBtn = document.getElementById('purple');
let colorlessBtn = document.getElementById('colorless');

let colorDisplay = document.getElementById('color-display');

/* Event Listeners */
aquaBtn.onclick = function () {
  colorDisplay.style.backgroundColor = 'aqua';
  colorDisplay.innerHTML = 'aqua';
};

tealBtn.onclick = function () {
  colorDisplay.style.backgroundColor = 'teal';
  colorDisplay.innerHTML = 'teal';
};

pinkBtn.onclick = function () {
  colorDisplay.style.backgroundColor = 'pink';
  colorDisplay.innerHTML = 'pink';
};

purpleBtn.onclick = function () {
  colorDisplay.style.backgroundColor = 'purple';
  colorDisplay.innerHTML = 'purple';
};

colorlessBtn.onclick = function () {
  // You could also use 'white' as the background color here
  colorDisplay.style.backgroundColor = 'transparent';
  colorDisplay.innerHTML = 'colorless';
};

/*~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Extra Credit #1 */
let hideBtn = document.getElementById('hide');

hideBtn.onclick = function () {
  if (colorDisplay.style.display !== 'none') {
    colorDisplay.style.display = 'none';
    hideBtn.innerHTML = 'show';
  } else {
    // Using display: 'flex' instead of display: 'block'
    // will center the text again
    colorDisplay.style.display = 'flex';
    hideBtn.innerHTML = 'hide';
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Extra Credit #2 */
let colors = ['aqua', 'teal', 'pink', 'purple', 'transparent'];

let randomBtn = document.getElementById('random');

randomBtn.onclick = function () {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  if (randomColor === 'transparent') {
    colorDisplay.innerHTML = 'colorless';
    colorDisplay.style.backgroundColor = randomColor;
  } else {
    colorDisplay.innerHTML = randomColor;
    colorDisplay.style.backgroundColor = randomColor;
  }
};
