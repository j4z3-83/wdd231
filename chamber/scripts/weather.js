const townName = document.querySelector('#town-name')

//day 1
const day1 = document.querySelector('#day1');
const date1 = document.querySelector('#date1');
const temp1 = document.querySelector('#temperature1');
const icon1 = document.querySelector('#icon1');
const caption1 = document.querySelector('#description1');
//day 2
const day2 = document.querySelector('#day2');
const date2 = document.querySelector('#date2');
const temp2 = document.querySelector('#temperature2');
const icon2 = document.querySelector('#icon2');
const caption2 = document.querySelector('#description2');
//day 3
const day3 = document.querySelector('#day3');
const date3 = document.querySelector('#date3');
const temp3 = document.querySelector('#temperature3');
const icon3 = document.querySelector('#icon3');
const caption3 = document.querySelector('#description3');

//api variables
const myKey = "3c3db5b38137dae929fdc15df313876c";
const myLat = "49.72";
const myLong = "-112.62";
const myURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&units=metric&appid=${myKey}`;

//fetch request
async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayResults(data) {
    townName.innerHTML = `${data.city.name}`;

    const dailyForecasts = data.list.filter(item => item.dt_txt.includes("21:00:00")).slice(0, 3);

    const formatDate = (dateTxt) => {
        const dateObject = new Date(dateTxt);
        return dateObject;
    };

    if (dailyForecasts.length >= 3) {
        day1.innerHTML = formatDate(dailyForecasts[0].dt_txt).toLocaleDateString('en-US', { weekday: 'long' });
        date1.innerHTML = formatDate(dailyForecasts[0].dt_txt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
        temp1.innerHTML = `${dailyForecasts[0].main.temp}&deg;C`;
        icon1.setAttribute('src', `https://openweathermap.org/img/wn/${dailyForecasts[0].weather[0].icon}@2x.png`);
        icon1.setAttribute('alt', dailyForecasts[0].weather[0].description);
        caption1.innerHTML = dailyForecasts[0].weather[0].description;

        day2.innerHTML = formatDate(dailyForecasts[1].dt_txt).toLocaleDateString('en-US', { weekday: 'long' });
        date2.innerHTML = formatDate(dailyForecasts[1].dt_txt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
        temp2.innerHTML = `${dailyForecasts[1].main.temp}&deg;C`;
        icon2.setAttribute('src', `https://openweathermap.org/img/wn/${dailyForecasts[1].weather[0].icon}@2x.png`);
        icon2.setAttribute('alt', dailyForecasts[1].weather[0].description);
        caption2.innerHTML = dailyForecasts[1].weather[0].description;

        day3.innerHTML = formatDate(dailyForecasts[2].dt_txt).toLocaleDateString('en-US', { weekday: 'long' });
        date3.innerHTML = formatDate(dailyForecasts[2].dt_txt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
        temp3.innerHTML = `${dailyForecasts[2].main.temp}&deg;C`;
        icon3.setAttribute('src', `https://openweathermap.org/img/wn/${dailyForecasts[2].weather[0].icon}@2x.png`);
        icon3.setAttribute('alt', dailyForecasts[2].weather[0].description);
        caption3.innerHTML = dailyForecasts[2].weather[0].description;
    }
}

apiFetch();