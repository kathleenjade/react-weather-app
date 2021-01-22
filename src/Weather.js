import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';
import Loader from 'react-loader-spinner';

export default function Weather(){
    const [output, setOutput] = useState({ ready : false });

    function displayResults(response) {   
        console.log(response.data);
       setOutput({
           ready: true,
           temperature: response.data.main.temp,
           description: response.data.weather[0].description,
           city: response.data.name,
           feelsLike: response.data.main.feels_like,
           humidity: response.data.main.humidity,
           pressure: response.data.main.pressure,
           wind: response.data.wind.speed,
       })


    }
    
  if (output.ready) {
    return(
        <div className="Weather">
            <form>
                <div className="row">
                <div className="col-9">
                  <input 
                     type="search" 
                     placeholder="Type a city name.." 
                     className="search-bar" 
                     autoFocus="on" /> 
                </div>
                <div className="col-3">
                  <input 
                     type="submit" 
                     value="Search" 
                     className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <div className="icon"> ☁️ </div>
            <div className="temperature"> {Math.round(output.temperature)}° </div>
            <div className="description text-capitalize"> {output.description} </div>
           <ul>
               <li className="city"> {output.city} </li>
               <li className="date"> January 20, 2021 </li>
           </ul>
           <ul>
               <li className="feels like"> Feels like: {Math.round(output.feelsLike)}° </li>
               <li className="humidity"> Humidity: {output.humidity}% </li>
               <li className="pressure"> Pressure: {output.pressure}hPa </li>
               <li className="wind">  Wind: {output.wind} m/s </li>
           </ul>
        </div>
    )
  } else {
    const city = "London";
    const apiKey = "01ccbdb64fbdc91284e6a914f1479c4a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(displayResults);  

    return (
        <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs

     />
    )
  }    
}