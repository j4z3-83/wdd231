const url = 'https://j4z3-83.github.io/wdd231/project/data/assassin.json';

const cards = document.querySelector("#volumecards");

async function getVolumeData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.volumes); // temporary testing of data response

    displayVolumes(data.volumes);
}

function displayVolumes(volumes) {
    volumes.forEach((volume) => {
        let card = document.createElement("div");
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
        volumePicture.setAttribute('src', "");
        volumePicture.setAttribute('alt', `cover of ${volume.volumenumber}`)
        volumePicture.setAttribute('loading', 'lazy')
        volumePicture.setAttribute('width', '300');
        volumePicture.setAttribute('height', '200');

        card.appendChild(volumePicture);
        card.appendChild(mangaTitle);
        card.appendChild(writer);
        card.appendChild(illustrator);
        card.appendChild(volumeNumber);
        card.appendChild(volumeTitle);

        cards.appendChild(card);
    });
}

getVolumeData();