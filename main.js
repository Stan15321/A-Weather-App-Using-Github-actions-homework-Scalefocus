const api = {
    key: "9af92e5facdeb886939d8e57e4d246d2",
    baseurl: "https://home.openweathermap.org/data/2.5/"

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
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather=> {
        return weather.json();
    }).then(displayResult);
}
function displayResult(weather){
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
}