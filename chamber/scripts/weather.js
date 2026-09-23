const weatherCards = document.querySelector('#weather-cards')
const townName = document.querySelector('#town-name')

//api variables
const myKey = "3c3db5b38137dae929fdc15df313876c";
const myLat = "49.72";
const myLong = "-112.62";
const myURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&units=metric&appid=${myKey}`;

const weatherDays = 3;

//fetch request
async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            display3DayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function display3DayResults(data) {
    townName.innerHTML = `${data.city.name} three day forecast`;
    
    const dailyForecasts = data.list.filter(item => item.dt_txt.includes("18:00:00")).slice(0, 39);
    
    const formatDate = (dateTxt) => {
        const dateObject = new Date(dateTxt);
        return dateObject;
    };

    for (let i = 0; i < weatherDays; i++) {
        let dayCard = document.createElement("section");
        let day = document.createElement("h3");
        let date = document.createElement("h4");
        let temp = document.createElement("h5");
        let icon = document.createElement("img");
        let caption = document.createElement("p")

        day.textContent = formatDate(dailyForecasts[i].dt_txt).toLocaleDateString('en-US', { weekday: 'long' });
        date.textContent = formatDate(dailyForecasts[i].dt_txt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
        temp.textContent = `${dailyForecasts[i].main.temp_max}°C`;

        icon.setAttribute('src', `https://openweathermap.org/img/wn/${dailyForecasts[i].weather[0].icon}@2x.png`);
        icon.setAttribute('alt', dailyForecasts[i].weather[0].description);

        caption.textContent = dailyForecasts[i].weather[0].description;

        dayCard.appendChild(day);
        dayCard.appendChild(date);
        dayCard.appendChild(temp);
        dayCard.appendChild(icon);
        dayCard.appendChild(caption);

        weatherCards.appendChild(dayCard);
    }
}

apiFetch();