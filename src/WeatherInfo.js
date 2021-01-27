import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <WeatherIcon code={props.data.icon} />
            <div className="temperature"> {Math.round(props.data.temperature)}° </div>
            <div className="description text-capitalize"> {props.data.description} </div>
           <ul>
               <li className="city"> {props.data.city} </li>
               <li className="date"> <FormattedDate date={props.data.date} /> </li>
           </ul>
           <ul>
               <li className="feels like"> Feels like: {Math.round(props.data.feelsLike)}° </li>
               <li className="humidity"> Humidity: {props.data.humidity}% </li>
               <li className="pressure"> Pressure: {props.data.pressure}hPa </li>
               <li className="wind">  Wind: {props.data.wind} m/s </li>
           </ul>
        </div>
    )
}