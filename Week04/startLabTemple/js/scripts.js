import {temples} from '../data/temples.js'
//console.log(temples)

import {url} from '../data/temples.js'
//console.log(url)

const showHere = document.querySelector('#showHere');

const myDialog = document.querySelector('#myDialog');
const myTitle = document.querySelector('#myDialog h2');
const myInfo = document.querySelector('#myDialog p');

const myClose = document.querySelector('#myDialog button');


function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x);
        const photo = document.createElement('img');
        photo.src = `${url}${x.path}`;
        photo.alt = x.name;
        
        photo.addEventListener("click", () => showStuff(x));
        showHere.appendChild(photo);
    });
}

displayItems(temples);

myClose.addEventListener("click", () => myDialog.close());
function showStuff(x){
    myTitle.innerHTML = x.name;
    myDialog.showModal();
}
