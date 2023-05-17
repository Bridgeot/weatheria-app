import { useEffect, useState } from 'react';
import axios from 'axios';

import './Search.css';

function Search(props) {
    const [ condition, setCondition ] = useState({});

    useEffect(() => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=North+Lauderdale&appid=fa0c49e26635d4780fb49a638b2ada3c&units=imperial';
        // Axios implementation info obtained from Postman 'Generating Client Code' document
        axios.get(url)
        .then((response) => {
            setCondition({...condition, 
            name: response.data.name, 
            description: response.data.weather[0].description, 
            temp: Math.round(response.data.main.temp), 
            maxTemp: Math.round(response.data.main.temp_max), 
            minTemp: Math.round(response.data.main.temp_min), 
            feelsLike: Math.round(response.data.main.feels_like), 
            humidity: response.data.main.humidity, 
            pressure: response.data.main.pressure, 
            wind: Math.round(response.data.wind.speed), 
            clouds: response.data.clouds.all, 
            visibility: Math.floor(response.data.visibility / 1000), 
            sunrise: response.data.sys.sunrise, 
            sunset: response.data.sys.sunset,
            })
          })
          .catch((error) => {
            console.log(error);
          });
    }, []);

    return (
        <section className='search-section'>
            <div className='search-container'>
                <form className='search-align'>
                    <input id='search-input' type='text' placeholder='Search city'/>
                    <button id='search-btn'>Search</button>
                </form>
            </div>
            <div className='weather'>
                <div className='weather-main'>
                    <h1 className='weather-city'>{condition.name}</h1>
                    <h2 className='weather-number'>{condition.temp}&deg;</h2>
                    <h3>{condition.description}</h3>
                    <div className='weather-sub'>
                        <p>H: {condition.maxTemp}&deg;</p>
                        <p>L: {condition.minTemp}&deg;</p>
                    </div>
                </div>
            </div>
            <div className='weather-conditions1'>
                <div className='condition'>
                    <h2 className='condition-name'>Feels Like</h2>
                    <p className='condition-number'>{condition.feelsLike}&deg;</p>
                </div>
                <div className='condition'>
                    <h2 className='condition-name'>Humidity</h2>
                    <p className='condition-number'>{condition.humidity}&#37;</p>
                </div>
                <div className='condition'>
                    <h2 className='condition-name'>Wind</h2>
                    <p className='condition-number'>{condition.wind} mph</p>
                </div>
                <div className='condition'>
                    <h2 className='condition-name'>Pressure</h2>
                    <p className='condition-number'>{condition.pressure}</p>
                </div>
            </div>
            <div className='weather-conditions2'>
                <div className='condition'>
                    <h2 className='condition-name'>Visibility</h2>
                    <p className='condition-number'>{condition.visibility} km</p>
                </div>
                <div className='condition'>
                    <h2 className='condition-name'>Sunrise</h2>
                    <p className='condition-number'>{condition.sunrise}</p>
                </div>
                <div className='condition'>
                    <h2 className='condition-name'>Sunset</h2>
                    <p className='condition-number'>{condition.sunset}</p>
                </div>
                <div className='condition'>
                    <h2 className='condition-name'>Clouds</h2>
                    <p className='condition-number'>{condition.clouds}&#37;</p>
                </div>
            </div>
        </section>
    );
}

export default Search;