import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
import { WiStrongWind } from 'react-icons/wi';
import { WiBarometer } from 'react-icons/wi';
import { WiHumidity } from 'react-icons/wi';
import './WeatherInfo.css'

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <div className="row header-info">
                <div className="col-4 date"> <FormattedDate date={props.data.date} /> </div>
                <div className="col-4 description"> {props.data.description} </div>
                <div className="col-4 feelsLike">Feels like: {Math.round(props.data.feelsLike)}°</div>
            </div>
            <h1 className="weather-box">
                <WeatherTemperature celsius={props.data.temperature} className="temperature"/> 
                <div className="city"> {props.data.city}, {props.data.country}</div>
                <div className="main-icon">
                <WeatherIcon code={props.data.icon} />
                </div>
            </h1>
            <div className="row bottom-info">
               <div className="col-4"> <WiHumidity className="weather-humidity"/>  {props.data.humidity}% </div>
               <div className="col-4"> <WiBarometer className="weather-pressure"/> {props.data.pressure}hPa </div>
               <div className="col-4">  <WiStrongWind className="weather-wind"/>  {props.data.wind} m/s </div>
            </div>
        </div>
    )
}