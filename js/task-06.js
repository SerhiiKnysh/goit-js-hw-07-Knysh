const inputEl = document.querySelector("#validation-input");
 
const onInputBlur = event => {
    const inputLength = inputEl.getAttribute("data-length");
    
    event.currentTarget.value.length === Number(inputLength) ?
        inputEl.classList.add('valid') : inputEl.classList.add('invalid');
};

const onInputFocus = () => {
    inputEl.classList.remove('valid', 'invalid');
}

inputEl.addEventListener("blur", onInputBlur);
inputEl.addEventListener("focus", onInputFocus);
