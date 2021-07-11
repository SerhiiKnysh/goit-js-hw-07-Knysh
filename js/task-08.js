const refs = {
  boxes: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  container: document.querySelector('#controls'),
  renderButton: document.querySelector('button[data-action="render"]'),
  destroyButton: document.querySelector('button[data-action="destroy"]'),
};

const createBoxes = amount => {
  onDestroyButtonClick();
  refs.input.value = amount;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.width = 30 + i * 10 + 'px';
    boxEl.style.height = 30 + i * 10 + 'px';
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    const bgColor = `rgb(${r}, ${g}, ${b})`;
    boxEl.style.backgroundColor = bgColor;
    boxEl.classList.add('box');

    boxes.push(boxEl);
    console.log(boxEl);
  }
  return refs.boxes.append(...boxes);
};

const onRenderButtonClick = () => {
  createBoxes(refs.input.value);
};

const onDestroyButtonClick = () => {
  refs.boxes.innerHTML = '';
  refs.input.value = 0;
  return;
};

// const onDestroyButtonClick = () => {
//     const destroyElements = refs.boxes.childNodes;
//     Array.from(destroyElements).forEach(node => node.remove());
//     refs.input.value = 0;
//     return;
// };

refs.renderButton.addEventListener('click', onRenderButtonClick);
refs.destroyButton.addEventListener('click', onDestroyButtonClick);
