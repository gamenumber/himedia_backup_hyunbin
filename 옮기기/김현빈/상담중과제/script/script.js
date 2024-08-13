document.addEventListener('DOMContentLoaded', (event) => {
    const moreonElements = document.querySelectorAll('.moreon');

    moreonElements.forEach(moreon => {
        moreon.addEventListener('mouseover', () => {
            moreon.querySelector('img').src = 'img/more_on.gif';
        });
        moreon.addEventListener('mouseout', () => {
            moreon.querySelector('img').src = 'img/more.gif';
        });
    });
});
