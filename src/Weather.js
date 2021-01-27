import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import WeatherInfo from './WeatherInfo';

export default function Weather(props){
    const [output, setOutput] = useState({ ready : false });
    const [city, setCity] = useState(props.defaultCity);

    function displayResults(response) {   
       setOutput({
           ready: true,
           iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
                     autoFocus="on" 
                     onChange={handleRequest}/> 
                </div>
                <div className="col-3">
                  <input 
                     type="submit" 
                     value="Search" 
                     className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <WeatherInfo data={output} />
        </div>
    )
  } else {
      search();
    return (
        <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={5000} //3 secs
     />
    )
  }    
}