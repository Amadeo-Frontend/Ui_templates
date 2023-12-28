let starsEnabled = true;
let lastX = -1;
let lastY = -1;
const moveThreshold = 5;
const maxStars = 50;

document.getElementById('toggle-stars').addEventListener('click', function () {
  starsEnabled = !starsEnabled;
  this.textContent = starsEnabled
    ? 'Desabilitar Estrelas'
    : 'Habilitar Estrelas';
});

document.addEventListener('mousemove', function (e) {
  if (!starsEnabled) return;

  const x = e.clientX;
  const y = e.clientY;

  if (
    Math.abs(x - lastX) > moveThreshold ||
    Math.abs(y - lastY) > moveThreshold
  ) {
    if (document.querySelectorAll('.star').length < maxStars) {
      createStarAt(x, y);
    }
  }

  lastX = x;
  lastY = y;
});

document.addEventListener('click', function (e) {
  if (!starsEnabled) return;

  for (let i = 0; i < 5; i++) {
    createStarAt(e.clientX, e.clientY);
  }
});

function createStarAt(x, y) {
  const body = document.body;
  const star = document.createElement('span');
  star.classList.add('star');

  star.style.left = x + 'px';
  star.style.top = y + 'px';
  star.style.color = getRandomColor();

  const size = Math.random() * 10;
  star.style.width = size + 'px';
  star.style.height = size + 'px';

  const transformValue = Math.random() * 360;
  star.style.transform = 'rotate(' + transformValue + 'deg)';

  setTimeout(() => {
    star.style.opacity = 1;
  }, 10);

  body.appendChild(star);

  const lifeTime = Math.random() * 1000 + 500;
  const moveX = Math.random() * 20 - 10;
  const moveY = Math.random() * 20 - 10;

  setTimeout(() => {
    star.style.transform += ` translate(${moveX}px, ${moveY}px)`;
  }, lifeTime / 2);

  setTimeout(() => {
    star.style.opacity = 0;
    star.addEventListener('transitionend', () => {
      star.remove();
    });
  }, lifeTime);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
