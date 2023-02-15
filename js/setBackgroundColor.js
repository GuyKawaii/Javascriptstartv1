const body = document.querySelector('body');
const inputColor = document.querySelector('.inputColor');
const setColor = document.querySelector('.setColor');
const colorPicker = document.querySelector('.colorPicker');

function setBackgroundColor(e) {
    body.style.backgroundColor = inputColor.value;
    console.log(e);
}

function setBackgroundColor2(e) {
    body.style.backgroundColor = colorPicker.value;
    console.log(e);
}

inputColor.addEventListener('keyup', setBackgroundColor);
colorPicker.addEventListener('input', setBackgroundColor2);
