import React, { useState } from 'react';
import axios from 'axios';
import './WeatherForecast.css';
import ForecastHours from './ForecastHours';
import Loader from 'react-loader-spinner';

export default function WeatherForecast(props){
     const [loaded, setLoaded] = useState(false);
     const [forecast, setForecast] = useState(null);

     if (loaded && props.city === forecast.city.name) {
         return (
             <div className="WeatherForecast row">
                 <ForecastHours data={forecast.list[0]} />
                 <ForecastHours data={forecast.list[1]} />
                 <ForecastHours data={forecast.list[2]} />
                 <ForecastHours data={forecast.list[3]} />
                 <ForecastHours data={forecast.list[4]} />
                 <ForecastHours data={forecast.list[5]} />
             </div>
         )
     } else {
         let apiKey = "01ccbdb64fbdc91284e6a914f1479c4a";
         let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
         axios.get(url).then(displayForecastResponse);
         return (
            <Loader
            type="ThreeDots"
            color="#f8f1f1"
            height={100}
            width={100}
            timeout={5000} //3 secs
         />
         )
     }

    function displayForecastResponse(response){
        setForecast(response.data);
        setLoaded(true);
    }
}

