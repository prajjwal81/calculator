console.log('Welcome to my World')
let screen = document.getElementById('screen')
let btn = document.querySelectorAll('button')
screenText = "";
for (let item of btn) {
    // console.log(item)
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText
        console.log(buttonText);
        if (buttonText == 'X') {
            buttonText = '*'
            screenText += buttonText;
            screen.value = screenText
        } else if (buttonText == 'AC') {
            screenText = "";
            screen.value = screenText;
        } else if (buttonText == '=') {
            screen.value = eval(screenText)
        }
        else {
            screenText += buttonText;
            screen.value = screenText
        }
    })


}