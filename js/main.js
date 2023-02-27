'use strict';

const imgs = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
const container = document.querySelector('.ms_container');

let items = '';

for( let i = 0; i < imgs.length; i++){
    console.log(imgs[i]);

    items += '<img class="ms_img" src="img/01.webp">'

}

container.innerHTML += items;
document.querySelector('.ms_img').classList.add('show');

const up = document.querySelector('.fa-circle-chevron-up');
const down = document.querySelector('.fa-circle-chevron-down');
