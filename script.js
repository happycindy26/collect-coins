const coin = document.getElementById('coin');
const score = document.getElementById('score');
let count = 0;
let countList = [20, 40, 60, 80, 100];
let time = null;
let delay = 2000;



const movingCoin = () => {
    coin.style.marginLeft = Math.random() * (innerWidth - 3 * coin.offsetWidth) + 'px';
    coin.style.marginTop = Math.random() * (innerHeight - 3 * coin.offsetHeight) + 'px';
    //moveCoinIn2sec();
}
//movingCoin();

//coin.onclick(movingCoin(), 'click');

coin.onclick = () => {
    movingCoin();
    count += 1; 
    if (countList.includes(count)) {
        delay -= 200;
    }
    score.innerHTML = `${count}`;
    clearTimeout(time);
    moveCoinIn2sec();
}

const moveCoinOnTime = () => {
    movingCoin();
    moveCoinIn2sec();
}

const moveCoinIn2sec= () => {
    time = setTimeout(moveCoinOnTime, delay);
}
moveCoinIn2sec();
