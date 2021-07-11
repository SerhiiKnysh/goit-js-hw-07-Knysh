const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const onMoveInput = event => {
    const eventValue = event.currentTarget.value;
    textEl.style.fontSize = `${eventValue / 3}px`;
}

inputRangeEl.addEventListener("input", onMoveInput);

