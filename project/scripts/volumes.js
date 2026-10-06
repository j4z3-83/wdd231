
const urlParams = new URLSearchParams(window.location.search);
const mangaId = urlParams.get('id');
const url = `./data/${mangaId}.json`;

const background = document.getElementById('background');
const cards = document.getElementById('volumeCards');
const modal = document.getElementById('infoModal');
const closeBtn = document.querySelector('.close-btn');
const mangaTitle = document.querySelector('.manga-title');
const creator = document.querySelector('.manga-name');
const description = document.querySelector('.des');

const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
let title;
let writer;
let illustrator;


async function getVolumeData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.volumes); // temporary testing of data response

    background.style.backgroundImage = `url(${data.background})`
    mangaTitle.innerHTML = `${data.mangatitle}`;
    if (data.illustrator === "") {
        creator.innerHTML = `${data.writer}`;
    } else {
        creator.innerHTML = `${data.writer}, ${data.illustrator}`;
    }
    description.innerHTML = `${data.mangadsc}`
    title = data.mangaTitle
    writer = data.writer;
    illustrator = data.illustrator
    
    displayVolumes(data.volumes);
}

function displayVolumes(volumes) {
    if(illustrator === "") {
        illustrator = writer;
    }
    volumes.forEach((volume) => {
        let card = document.createElement("div");
        let volumePicture = document.createElement("img");

        volumePicture.setAttribute('src', `${volume.volumecover}`);
        volumePicture.setAttribute('alt', `cover of ${volume.volumenumber}`)
        volumePicture.setAttribute('loading', 'lazy')
        volumePicture.setAttribute('width', '150');
        volumePicture.setAttribute('height', '200');

        card.appendChild(volumePicture);

        cards.appendChild(card);

        card.addEventListener("click", () => {
            modalTitle.textContent = `${volume.volumetitle}`;

            modalBody.innerHTML = `
            <p><strong>Written by:</strong> ${writer}</p>
            <p><strong>Illustrated by:</strong> ${illustrator}</p>
            <p><strong>Volume number:</strong> ${volume.volumenumber}</p>
            <img src=${volume.volumecover} alt="volume ${volume.volumenumber} cover" width="250" height="400">
            <p>${volume.volumedsc}</p>
            `;

            modal.classList.add('show');
        });
    });
}

closeBtn.addEventListener("click", () => {
    modal.classList.remove('show');
});

getVolumeData();