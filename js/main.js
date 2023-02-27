'use strict';

const imgs = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
const container = document.querySelector('.ms_container');

let items = '';

// Posizione di partenza
let active = 0;

for( let i = 0; i < imgs.length; i++){
    // Creazione struttura in html
    items += `<img class="ms_img" src="img/${imgs[i]}">` 

}

container.innerHTML += items;
document.querySelector('.ms_img').classList.add('show');

// Frecce
const up = document.querySelector('.fa-circle-chevron-up');
const down = document.querySelector('.fa-circle-chevron-down');
const item = document.querySelectorAll('.ms_img');

// Evento su frecce
up.addEventListener('click', 
function(){

    if (active < item.length - 1){
        item[active].classList.remove('show');
        active++;
        item[active].classList.add('show');
    }
})
down.addEventListener('click', 
function(){
    if (active > 0){
        item[active].classList.remove('show');
        active--;
        item[active].classList.add('show');
    }
})