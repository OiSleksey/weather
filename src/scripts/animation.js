//Плавное скроллирование страницы до нужного места. Это можно сделать с помощью метода scrollTo() объекта window. Например:
function smoothScroll(target) {
  const targetPosition = target.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000; // время анимации в миллисекундах
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percentage = Math.min(progress / duration, 1);
    window.scrollTo(0, startPosition + distance * percentage);
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

const target = document.querySelector('#section2');
smoothScroll(target);

//Создание эффекта параллакса. Это можно сделать, изменяя позицию фонового изображения при прокручивании страницы. Например:

const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});

//Создание эффекта, который изменяет свойства элемента по мере его перемещения на странице. Например, вы можете изменять цвет текста или размер шрифта в зависимости от того, как пользователь перемещает мышь. Например:

const text = document.querySelector('.text');

document.addEventListener('mousemove', function (e) {
  const x = e.clientX;
  const y = e.clientY;
  text.style.color = `rgb(${x}, ${y}, 100)`;
  text.style.fontSize = `${x / 10}px`;
});
