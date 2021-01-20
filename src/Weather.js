import React from 'react';
import './Weather.css';

export default function Weather(){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                <div className="col-8">
                  <input type="search" placeholder="Type a city name.." className="search-bar" /> 
                </div>
                <div className="col-3">
                  <input type="submit" value="Search" className="btn btn-primary" />
                </div>
                </div>
            </form>
            <div className="icon"> ☁️ </div>
            <div className="temperature"> 10° </div>
            <div className="description"> Cloudy </div>
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
}