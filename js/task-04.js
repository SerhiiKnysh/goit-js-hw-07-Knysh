let counterValue = 0;

const increment = () => counterValue += 1;
const decrement = () => counterValue -= 1;

const incrementButtonEl = document.querySelector('[data-action="increment"]');
const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const countEl = document.querySelector("#value");

incrementButtonEl.addEventListener("click", () => {
    countEl.textContent = increment();
}
);

decrementButtonEl.addEventListener("click", () => {
    countEl.textContent = decrement();
}
);


