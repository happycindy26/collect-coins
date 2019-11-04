let coin = document.getElementById('coin');
let scoreCount = document.getElementById('score');
let count = 0;
let time = null;

const moveCoin = () => {
    coin.style.left = Math.random() * (innerWidth - coin.offsetWidth) + 'px';
    coin.style.top = Math.random() * (innerHeight - coin.offsetHeight) + 'px';
}

const buttonClickHandler = () => {
    moveCoin();
    count += 1;
    scoreCount.innerHTML = `${count}`;
    clearTimeout(time);
    moveCoinIn2Sec();

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
    moveCoin();
    moveCoinIn2Sec();
}

const moveCoinIn2Sec = () => {
    time = setTimeout(moveCoinOnTime, 2000);
}

moveCoinIn2Sec();

