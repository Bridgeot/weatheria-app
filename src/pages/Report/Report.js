import { useState } from 'react';
import axios from 'axios';
// parse and display time for unix data
import moment from 'moment';

import './Report.css';

function Report() {
    const [ condition, setCondition ] = useState({
        city: '5-Day Forecast',

        day1: 'Day 1',
        day1Temp: 0,

        day2: 'Day 2',
        day2Temp: 0,

        day3: 'Day 3',
        day3Temp: 0,

        day4: 'Day 4',
        day4Temp: 0,

        day5: 'Day 5',
        day5Temp: 0,
    });
    const [ city, setCity ] = useState('');

    const handleClick = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=fa0c49e26635d4780fb49a638b2ada3c&units=imperial`;
            const response = await axios.get(url);
            setCondition({...condition,
                city: response.data.city.name, 

                day1: moment.unix(response.data.list[0].dt).format('MMMM Do'), 
                day1Temp: Math.floor(response.data.list[0].main.temp), 
                day1Description: response.data.list[0].weather[0].description, 

                day2: moment.unix(response.data.list[8].dt).format('MMMM Do'), 
                day2Temp: Math.floor(response.data.list[8].main.temp), 
                day2Description: response.data.list[8].weather[0].description, 

                day3: moment.unix(response.data.list[16].dt).format('MMMM Do'),
                day3Temp: Math.floor(response.data.list[16].main.temp),
                day3Description: response.data.list[16].weather[0].description, 

                day4: moment.unix(response.data.list[24].dt).format('MMMM Do'),
                day4Temp: Math.floor(response.data.list[24].main.temp), 
                day4Description: response.data.list[24].weather[0].description, 
                
                day5: moment.unix(response.data.list[32].dt).format('MMMM Do'),
                day5Temp: Math.floor(response.data.list[32].main.temp),
                day5Description: response.data.list[32].weather[0].description,    
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className='geolocation-section'>
            <div className='search-container'>
                <div className='search-align'>
                    <input id='search-input' type='text' placeholder='Search city' onChange={e => setCity(e.target.value)}/>
                    <button id='search-btn' type='submit' onClick={handleClick}>Search</button>
                </div>
            </div>
            <div className='forecast-city'>
                <h1>{condition.city}</h1>
            </div>
            <div className='forecast-5day1'>
                <div className='forecast-condition'>
                    <h2 className='forecast-day'>{condition.day1}</h2>
                    <p className='forecast-number1'>{condition.day1Temp}&deg;</p>
                    <p className='forecast-number2'>{condition.day1Description}</p>
                </div>
                <div className='forecast-condition'>
                    <h2 className='forecast-day'>{condition.day3}</h2>
                    <p className='forecast-number1'>{condition.day3Temp}&deg;</p>
                    <p className='forecast-number2'>{condition.day3Description}</p>
                </div>
                <div className='forecast-condition'>
                    <h2 className='forecast-day'>{condition.day5}</h2>
                    <p className='forecast-number1'>{condition.day5Temp}&deg;</p>
                    <p className='forecast-number2'>{condition.day5Description}</p>
                </div>
            </div>
            <div className='forecast-5day2'>
                <div className='forecast-condition'>
                    <h2 className='forecast-day'>{condition.day2}</h2>
                    <p className='forecast-number1'>{condition.day2Temp}&deg;</p>
                    <p className='forecast-number2'>{condition.day2Description}</p>
                </div>
                <div className='forecast-condition'>
                    <h2 className='forecast-day'>{condition.day4}</h2>
                    <p className='forecast-number1'>{condition.day4Temp}&deg;</p>
                    <p className='forecast-number2'>{condition.day4Description}</p>
                </div>
            </div>
        </section>
    );
}

export default Report;