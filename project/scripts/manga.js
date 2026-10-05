const url = 'https://j4z3-83.github.io/wdd231/project/data/manga.json';

const carouselItems = document.querySelector('.item');

const mangaCard = document.querySelector('.content');
const mangaTitle = document.querySelector('.title');
const mangaCreator = document.querySelector('.name');

async function getManagaData() {
    const response = await fetch(url);
    const mangaData = await response.json();
    console.table(mangaData.mangalist);

}ca0c725

getManagaData();