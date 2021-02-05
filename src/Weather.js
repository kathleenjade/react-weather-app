import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';

export default function Weather(props){
    const [output, setOutput] = useState({ ready : false });
    const [city, setCity] = useState(props.defaultCity);

    function displayResults(response) {   
       setOutput({
           ready: true,
           icon: response.data.weather[0].icon,
           temperature: response.data.main.temp,
           description: response.data.weather[0].description,
           city: response.data.name,
           date: new Date(response.data.dt * 1000),
           feelsLike: response.data.main.feels_like,
           humidity: response.data.main.humidity,
           pressure: response.data.main.pressure,
           wind: response.data.wind.speed,
       })
    }

    function search(){
        const apiKey = "01ccbdb64fbdc91284e6a914f1479c4a";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(displayResults);  
    }

    function handleSubmit(event){
          event.preventDefault();
          search();
    }
    function handleRequest(event){
          setCity(event.target.value);
    }
    
  if (output.ready) {
    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-9">
                  <input 
                     type="search" 
                     placeholder="Type a city name.." 
                     className="search-bar" 
                     onFocus="false"
                     onChange={handleRequest} /> 
                </div>
                <div className="col-3">
                  <input 
                     type="submit" 
                     value="Search" 
                     />
                </div>
                </div>
            </form>
            <WeatherInfo data={output} />
            <WeatherForecast city={output.city} />
        </div>
    )
  } else {
      search();
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
}