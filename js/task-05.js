const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

const onInputChange = event => {
  refs.output.textContent =
    event.currentTarget.value !== ''
      ? event.currentTarget.value
      : 'незнайомець';
};

refs.input.addEventListener('input', onInputChange);

// 2 спосіб

// const refs = {
//   input: document.querySelector('#name-input'),
//   output: document.querySelector('#name-output'),
// };

// const onInputChange = event => {
//   event.currentTarget.value !== ''
//     ? (refs.output.textContent = event.currentTarget.value)
//     : (refs.output.textContent = 'незнайомець');
// };

// refs.input.addEventListener('input', onInputChange);

// 3 спосіб

// const refs = {
//   input: document.querySelector('#name-input'),
//   output: document.querySelector('#name-output'),
// };

// const onInputChange = event => {
//   refs.output.textContent = event.currentTarget.value;

//   if (event.currentTarget.value === '') {
//     refs.output.textContent = 'незнайомець';
//   }
// };

// refs.input.addEventListener('input', onInputChange);
