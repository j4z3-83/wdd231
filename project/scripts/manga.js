const url = 'https://j4z3-83.github.io/wdd231/project/data/manga.json';

const carouselItems = document.querySelector('.item');

const mangaCard = document.querySelector('.content');
const mangaTitle = document.querySelector('.title');
const mangaCreator = document.querySelector('.name');

async function getManagaData() {
    const response = await fetch(url);
    const mangaData = await response.json();
    console.table(mangaData.mangas);

    displayMangas(mangaData.mangas);
}

function displayMangas(mangas){
    mangas.array.forEach(manga => {

        carouselItems.style.backgroundImage = `${manga.background-img}`;

        mangaTitle.innerHTML = `${manga.title}`;
        mangaCreator.innerHTML = `${manga.writer}, ${manga.illustrator}`;

        mangaCard.appendChild(mangaTitle);
        mangaCard.appendChild(mangaCreator);

        carouselItems.appendChild(mangaCard);

    });
}



getManagaData();