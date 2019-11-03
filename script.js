let button = document.getElementById('coin');
let scoreCount = document.getElementById('score');
let count = 0;

button.onclick = () => {
    button.style.left = (Math.random() * 500) + 'px';
    button.style.top = Math.random() * 500 + 'px';
    count += 1;
    scoreCount.innerHTML = `${count}`;
}