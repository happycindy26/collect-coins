let coin = document.getElementById('coin');
let scoreCount = document.getElementById('score');
let count = 0;

const buttonClickHandler = () => {
    coin.style.left = Math.random() * 500 + 'px';
    coin.style.top = Math.random() * 500 + 'px';
    count += 1;
    scoreCount.innerHTML = `${count}`;
}
coin.onclick = buttonClickHandler;
/*
button.onclick = () => {
    button.style.left = Math.random() * 500 + 'px';
    button.style.top = Math.random() * 500 + 'px';
    count += 1;
    scoreCount.innerHTML = `${count}`;
}
*/
const moveCoinOnTime = () => {
    coin.style.left = Math.random() * 500 + 'px';
    coin.style.top = Math.random() * 500 + 'px';
    moveCoinIn2Sec();
}

const moveCoinIn2Sec = () => {
    setTimeout(moveCoinOnTime, 2000);
}

moveCoinIn2Sec();