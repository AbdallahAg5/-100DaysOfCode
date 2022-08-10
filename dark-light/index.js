const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const span = document.getElementsByClassName('span');
const h1 = document.querySelector('h3');
const img = document.querySelector('.hi')
const back = document.querySelector('.mee')
body.style.background = 'white';
body.style.color = 'black';
h1.style.color = 'black';
body.style.transition = '1s';
nav.style.background = 'grey';
img.src = './WHITE.png'
back.src = './me.png'

for (let i = 0; i < span.length; i++) {
    span[i].style.color = ' aqua';

}

toggle.addEventListener('click', function() {
    toggle.classList.toggle('bi-moon');

    if (toggle.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        h1.style.color = 'black';
        body.style.transition = '1s';
        nav.style.background = 'grey';
        img.src = './WHITE.png'
        back.src = './me.png'
        for (let i = 0; i < span.length; i++) {
            span[i].style.color = ' aqua';

        }



    } else {



        body.style.background = 'black';
        nav.style.background = '#5c5cc7';
        h1.style.color = 'white';
        body.style.color = 'white';
        body.style.transition = '1s';
        img.src = './wave-(4).png'
        back.src = './me1.png'
        for (let i = 0; i < span.length; i++) {
            span[i].style.color = 'aqua;';



        }

    }
});