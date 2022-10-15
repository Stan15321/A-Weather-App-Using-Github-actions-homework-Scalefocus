const api = {
    key: "9af92e5facdeb886939d8e57e4d246d2",
    baseurl: "https://api.openweathermap.org/data/2.5/"

}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery)

function setQuery(evt){
    if(evt.keyCode == 13)
    {
        getResults(searchbox.value);
    }
    
}

function getResults(query) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api.key}&units=metric`)
    .then(weather=> {
        return weather.json();
    }).then(displayResult);
}
function displayResult(weather){
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector(`.location .date`);
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c/${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder (d) 
{
    let months = ["Jannuary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursady", "Friday", "Saturday"];
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}