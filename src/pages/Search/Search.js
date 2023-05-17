import { useEffect, useState } from 'react';
import axios from 'axios';

import './Search.css';

function Search(props) {
    const [ condition, setCondition ] = useState({
        name: 'London',
        description: 'clear',
        temp: 80,
        maxTemp: 91,
        minTemp: 70,
    }); 

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
                    <h2 className='weather-degree'>{condition.temp}&deg;</h2>
                    <h3>{condition.description}</h3>
                    <div className='weather-sub'>
                        <p>H: {condition.maxTemp}&deg;</p>
                        <p>L: {condition.minTemp}&deg;</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Search;