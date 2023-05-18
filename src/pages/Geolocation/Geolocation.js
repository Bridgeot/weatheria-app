import { useState } from 'react';
import axios from 'axios';

import "./Geolocation.css";

function Geolocation(props) {
    const [ condition, setCondition ] = useState({});
    const [ city, setCity ] = useState('');

    const handleClick = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=fa0c49e26635d4780fb49a638b2ada3c&units=imperial`;
            const response = await axios.get(url);
            setCondition({
                city: response.data.city.name, 
            })
        } catch (error) {

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
            <div className='forecast-5day'>
                <div className='forecast-condition'>
                    <h2 className='forecast-day'>Mon.</h2>
                    <p className='forecast-number'></p>
                </div>
                <div className='forecast-condition'>
                    <h2 className='forecast-day'>Tues.</h2>
                    <p className='forecast-number'></p>
                </div>
                <div className='forecast-condition'>
                    <h2 className='forecast-day'>Wed.</h2>
                    <p className='forecast-number'></p>
                </div>
                <div className='forecast-condition'>
                    <h2 className='forecast-day'>Thur.</h2>
                    <p className='forecast-number'></p>
                </div>
                <div className='forecast-condition'>
                    <h2 className='forecast-day'>Fri.</h2>
                    <p className='forecast-number'></p>
                </div>
            </div>
        </section>
    );
}

export default Geolocation;