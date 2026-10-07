const weatherCard = document.getElementById('weatherCard');

const town = document.createElement('h2');
const graphic = document.createElement('img');
const temperature = document.createElement('h3');
const description = document.createElement('h4');

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
    town.id = 'town';
    
    graphic.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    graphic.alt = data.list[0].weather[0].description;
    graphic.id = 'graphic';
    
    const roundedTemp = Math.round(data.list[0].main.temp);
    temperature.innerHTML = `${roundedTemp}&deg;C`;
    temperature.id = 'temperature';
    
    description.innerHTML = data.list[0].weather[0].description;
    description.id = 'description';
   
    weatherCard.appendChild(town);
    weatherCard.appendChild(graphic);
    weatherCard.appendChild(temperature);
    weatherCard.appendChild(description);
}

apiFetch();
