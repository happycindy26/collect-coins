let coin = document.getElementById('coin');
let scoreCount = document.getElementById('score');
let count = 0;
let time = null;
let delay = 2000;
let scoresToChangeDelay = [10, 20, 40, 80, 160, 320, 640, 1280];

const moveCoin = () => {
    coin.style.left = Math.random() * (innerWidth - coin.offsetWidth) + 'px';
    coin.style.top = Math.random() * (innerHeight - coin.offsetHeight) + 'px';
}

const buttonClickHandler = () => {
    moveCoin();
    count += 1;
    if (scoresToChangeDelay.includes(count)) {
        delay -= 100;
    }
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

let moveCoinIn2Sec = () => {
    time = setTimeout(moveCoinOnTime, delay);

}

moveCoinIn2Sec();



