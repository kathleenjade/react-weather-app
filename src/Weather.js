import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';
import Loader from 'react-loader-spinner';

export default function Weather(){
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);

    function displayResults(response) {    
       setTemperature(response.data.main.temp);
       setReady(true);
    }
    
  if (ready) {
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
            <div className="temperature"> {Math.round(temperature)}° </div>
            <div className="description text-capitalize"> rainy </div>
           <ul>
               <li className="city"> London </li>
               <li className="date"> January 20, 2021 </li>
           </ul>
           <ul>
               <li className="feels like"> Feels like: 3° </li>
               <li className="humidity"> Humidity: 87% </li>
               <li className="pressure"> Pressure: 987hPa </li>
               <li className="wind">  Wind: 8.23 m/s </li>
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