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
      if (response.data.main.temp < 16) {
        props.setTemperatureClass("cool");
      } else {
        props.setTemperatureClass("");
      }
      
       setOutput({
           ready: true,
           date: new Date(response.data.dt * 1000),
           description: response.data.weather[0].description,
           feelsLike: response.data.main.feels_like,
           temperature: response.data.main.temp,
           city: response.data.name,
           country: response.data.sys.country,
           icon: response.data.weather[0].icon,  
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
                  <input     
                     type="search" 
                     placeholder="Search..." 
                     className="search-bar" 
                     onChange={handleRequest} /> 
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