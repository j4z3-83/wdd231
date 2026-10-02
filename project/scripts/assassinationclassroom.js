const url = 'https://j4z3-83.github.io/wdd231/project/data/assassinationclassroom.json';

const cards = document.getElementById('volumeCards');
const modal = document.getElementById('infoModal');
const closeBtn = document.querySelector('.close-btn');

const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

async function getVolumeData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.volumes); // temporary testing of data response

    displayVolumes(data.volumes);
}

function displayVolumes(volumes) {
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
            modalTitle.textContent = `${volume.mangatitle}`;

            modalBody.innerHTML = `
            <p><strong>Written by:</strong> ${volume.writer}</p>
            <p><strong>Illustrated by:</strong> ${volume.illustrator}</p>
            <p><strong>Volume number:</strong> ${volume.volumenumber}</p>
            <img src=${volume.volumecover} alt="volume ${volume.volumenumber} cover" width="250" height="400">
            <p><strong>Volume title:</strong> ${volume.volumetitle}</p>
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