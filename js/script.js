'use strict';

const images = [
    { 'id': '0', 'url':'./img/cowandchicken.jpg' },
    { 'id': '1', 'url':'./img/johnnybravo.jpg' },
    { 'id': '2', 'url':'./img/weasel.jpg' },
    { 'id': '3', 'url':'./img/sheep.png' },
    { 'id': '4', 'url':'./img/dexterlaboratory.jpg' },
    { 'id': '5', 'url':'./img/courage.jpg' },
    { 'id': '6', 'url':'./img/ededdeddy.jpg' },
    { 'id': '7', 'url':'./img/knd.jpg' },
    { 'id': '8', 'url':'./img/ppg.jpg' },
    { 'id': '9', 'url':'./img/scoobydoo.jpg' },
    { 'id': '10', 'url':'./img/samuraijack.jpg' },
    { 'id': '11', 'url':'./img/dbz.jpg' },
    { 'id': '12', 'url':'./img/jackiechan.jpg' },
    { 'id': '13', 'url':'./img/pokemon.jpg' },
    { 'id': '14', 'url':'./img/billyemandy.png' },
    { 'id': '15', 'url':'./img/fostermansion.jpg' },
    { 'id': '16', 'url':'./img/flapkack.jpg' },
    { 'id': '17', 'url':'./img/adventuretime.png' },
    { 'id': '18', 'url':'./img/unclegrandpa.jpg' },
    { 'id': '19', 'url':'./img/stevenuniverse.png' },
    { 'id': '20', 'url':'./img/gumball.jpg' },
    { 'id': '21', 'url':'./img/regularshow.jpg' },
    { 'id': '22', 'url':'./img/clarence.jpg' },
    { 'id': '23', 'url':'./img/bears.jpg' },
    { 'id': '24', 'url':'./img/teentitansgo.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages (images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);