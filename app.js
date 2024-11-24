const button = document.getElementById('no');

button.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - button.clientWidth);
    const y = Math.random() * (window.innerHeight - button.clientHeight);
    
    button.style.position = 'absolute';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
});

const yesButton = document.getElementById('yes');
yesButton.addEventListener('click', () => {
    window.location.href = 'success.html';
});

const noButton = document.getElementById('no');
noButton.addEventListener('click', () => {
    window.location.href = 'failed.html';
});