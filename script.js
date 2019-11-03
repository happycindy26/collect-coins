let button = document.getElementById('coin');

button.onclick = () => {
    button.style.left = (Math.random() * 500) + 'px';
    button.style.top = Math.random() * 500 + 'px'
    console.log('hello Surgey!')
}
