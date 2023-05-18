import { useState } from 'react';
import axios from 'axios';
// parse and display time for unix data
import moment from 'moment';

import './Dashboard.css';

import icon1 from '../../assets/thermometer.svg';
import icon2 from '../../assets/water.svg';
import icon3 from '../../assets/wind.svg';
import icon4 from '../../assets/meter.svg';
import icon5 from '../../assets/eye.svg';
import icon6 from '../../assets/sunrise.svg';
import icon7 from '../../assets/sunset.svg';
import icon8 from '../../assets/cloud.svg';

function Dashboard() {
    const [ condition, setCondition ] = useState({
        city: 'Current Weather',
        description: undefined,
        temp: 0,
        maxTemp: 0,
        minTemp: 0,
        feelsLike: 0,
        humidity: 0,
        pressure: 0,
        wind: 0,
        cloudiness: 0,
        visibility: 0,
        sunrise: '--:--',
        sunset: '--:--',
    });
    const [ city, setCity ] = useState('');

    const handleClick = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa0c49e26635d4780fb49a638b2ada3c&units=imperial`;
            const response = await axios.get(url);
            setCondition({...condition,
                city: response.data.name, 
                description: response.data.weather[0].description, 
                temp: Math.round(response.data.main.temp), 
                maxTemp: Math.round(response.data.main.temp_max), 
                minTemp: Math.round(response.data.main.temp_min), 
                feelsLike: Math.round(response.data.main.feels_like), 
                humidity: response.data.main.humidity, 
                pressure: response.data.main.pressure, 
                wind: Math.round(response.data.wind.speed), 
                cloudiness: response.data.clouds.all, 
                visibility: Math.floor(response.data.visibility / 1000), 
                sunrise: moment.unix(response.data.sys.sunrise).format('hh:mm a'),
                sunset: moment.unix(response.data.sys.sunset).format('hh:mm a'),
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className='search-section'>
            <div className='search-container'>
                <div className='search-align'>
                    <input id='search-input' type='text' placeholder='Search city' onChange={e => setCity(e.target.value)}/>
                    <button id='search-btn' type='submit' onClick={handleClick}>Search</button>
                </div>
            </div>
            <div className='weather'>
                <div className='weather-main'>
                    <h1 className='weather-city'>{condition.city}</h1>
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
                    <img class='condition-icon' src={icon1} alt='thermometer svg icon'/>
                </div>
                <div className='condition'>
                    <h2 className='condition-name'>Humidity</h2>
                    <p className='condition-number'>{condition.humidity}&#37;</p>
                    <img class='condition-icon' src={icon2} alt='water svg icon'/>
                </div>
                <div className='condition'>
                    <h2 className='condition-name'>Wind</h2>
                    <p className='condition-number'>{condition.wind} mph</p>
                    <img class='condition-icon' src={icon3} alt='wind svg icon'/>
                </div>
                <div className='condition'>
                    <h2 className='condition-name'>Pressure</h2>
                    <p className='condition-number'>{condition.pressure} hPa</p>
                    <img class='condition-icon' src={icon4} alt='meter svg icon'/>
                </div>
            </div>
            <div className='weather-conditions2'>
                <div className='condition'>
                    <h2 className='condition-name'>Visibility</h2>
                    <p className='condition-number'>{condition.visibility} km</p>
                    <img class='condition-icon' src={icon5} alt='eye svg icon'/>
                </div>
                <div className='condition'>
                    <h2 className='condition-name'>Sunrise</h2>
                    <p className='condition-number'>{condition.sunrise}</p>
                    <img class='condition-icon' src={icon6} alt='sunrise svg icon'/>
                </div>
                <div className='condition'>
                    <h2 className='condition-name'>Sunset</h2>
                    <p className='condition-number'>{condition.sunset}</p>
                    <img class='condition-icon' src={icon7} alt='sunset svg icon'/>
                </div>
                <div className='condition'>
                    <h2 className='condition-name'>Cloudiness</h2>
                    <p className='condition-number'>{condition.cloudiness}&#37;</p>
                    <img class='condition-icon' src={icon8} alt='cloud svg icon'/>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;