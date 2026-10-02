const url = 'https://j4z3-83.github.io/wdd231/project/data/attackontitan.json';

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
        let modalCard = document.createElement("div")
        let mangaTitle = document.createElement("h1");
        let writer = document.createElement("p");
        let illustrator = document.createElement("p");
        let volumeNumber = document.createElement("h2");
        let volumeTitle = document.createElement("h3");
        let volumePicture = document.createElement("img");

        mangaTitle.textContent = `${volume.mangatitle}`;
        writer.textContent = `${volume.writer}`;
        illustrator.textContent = `${volume.illustrator}`;
        volumeNumber.textContent = `${volume.volumenumber}`;
        volumeTitle.textContent = `${volume.volumetitle}`;
        volumePicture.setAttribute('src', `${volume.volumecover}`);
        volumePicture.setAttribute('alt', `cover of ${volume.volumenumber}`)
        volumePicture.setAttribute('loading', 'lazy')
        volumePicture.setAttribute('width', '150');
        volumePicture.setAttribute('height', '200');

        modalCard.appendChild(volumePicture);
        modalCard.appendChild(mangaTitle);
        modalCard.appendChild(writer);
        modalCard.appendChild(illustrator);
        modalCard.appendChild(volumeNumber);
        modalCard.appendChild(volumeTitle);

        card.appendChild(volumePicture);

        cards.appendChild(card);

        card.addEventListener("click", () => {
            modalTitle.textContent = `${volume.mangatitle}`;

            modalBody.innerHTML = `
            <p><strong>Written by:</strong> ${writer}</p>
            <p><strong>Illustrated by:</strong> ${illustrator}</p>
            <p><strong>Volume number:</strong> ${volumeNumber}</p>
            <p><strong>Volume title:</strong> ${volumeTitle}</p>
            <img src=${volume.volumecover} alt="volume ${volumeNumber} cover" width="250" height="400">
            `;

            modal.classList.add('show');
        });
    });
}

closeBtn.addEventListener("click", () => {
    modal.classList.remove('show');
});

getVolumeData();