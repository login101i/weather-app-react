import React, { useState } from 'react';
const api = {
  key: "6009c7d12254fd04f68d0e4e5c375777",
  base: "https://api.openweathermap.org/data/2.5/"

}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({})
  // codeGame

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result)
        });
    }
  }



  const dateBuilder = (d) => {
    let months = [
      "Styczeń",
      "Luty",
      "Marzec",
      "Kiecień",
      "Kwiecień",
      "Maj",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Listopad",
      "Grudzień"

    ];
    let days = [
      "Niedziela",
      "Poniedziałek",
      "Wtorek",
      "Środa",
      "Czwartek",
      "Piątek",
      "Sobota"
    ];
    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()



    return `${day}, ${date} ${month} ${year}`
  }

  return (

    <div className=
  {
        (typeof weather.main != "undefined") ? ((weather.main.temp > 17) ? 'app warm' : 'app') : 'app'}
    >
      <main>
      
        <div className="search-box">
          <input type="text"
            className="search-bar"
            placeholder="Podaj miasto/kraj
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          // kodeGame
          />
        </div>

        {(typeof weather.main != "undefined") ? (
          // codeGame
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{parseFloat((weather.main.temp).toFixed(0
              ))}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}

      </main>
    </div>

  );
}

export default App;
