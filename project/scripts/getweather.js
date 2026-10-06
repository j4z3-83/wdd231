const town = document.getElementById('town');
const graphic = document.querySelector('#graphic');
const description = document.querySelector('#description');
const temperature = document.querySelector('#temperature');

const myKey = "3c3db5b38137dae929fdc15df313876c";
const myLat = "49.72";
const myLong = "-112.62";

const myURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&units=metric&appid=${myKey}`;

async function apiFetch() {
    try {
        const response = await fetch(myURL);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    town.innerHTML = data.city.name;
    description.innerHTML = data.list[0].weather[0].description;
    const roundedTemp = Math.round(data.list[0].main.temp);
    temperature.innerHTML = `${roundedTemp}&deg;C`;
    graphic.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    graphic.alt = data.list[0].weather[0].description;
}

apiFetch();
