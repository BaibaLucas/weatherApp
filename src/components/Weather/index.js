// Package import
import React, { useEffect, useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import { FaSearchLocation } from 'react-icons/fa';

// Local import
import prettyIcons from '../../utils/prettyIcons';
import Loader from '../Loader';
import { today, foreCastDay, cityTime } from '../../utils/forecastDate';



const Weather = ({ cityValue, handleChange, getWeather, weather, isLoaded, getLocation }) => {

  // console.log(cityTime());


  useEffect(() => {
    getLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const [isOpen, setIsOpen] = useState(false);

  const onChange = (event) => {
    handleChange(event.target.value);
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
    getWeather();
  }

  return (
    <div className='weather'>

      <div className={isOpen ? 'weather_search weather_search_open' : 'weather_search'}>
        <FaSearchLocation size={30}
        onClick={() => setIsOpen(!isOpen)}
        />  
        <form
          className='weather_search_form'
          onSubmit={onSubmitForm}
          autoComplete='off'
          >
            <input
              autoComplete='off'
              className='weather_search_form_input'
              name='city'
              type='search'
              placeholder= 'Ville'
              value={cityValue}
              onChange={onChange}
            />
            <IoIosSend size={20} onClick={onSubmitForm}/>
        </form>
      </div>
      {!isLoaded && (
        <Loader />
      )}

      {isLoaded && (
        <>
        <div className='weather_container'>
          <div className='weather_container_city'>{weather.city.name} / {weather.city.country}</div>
          <div className='weather_container_date'>{cityTime(weather.city.timezone / 60)}</div>
          <div className='weather_container_logo'>{prettyIcons(weather.list[0].weather[0].icon, 250)}</div>
          <div className='weather_container_temp'>
            <div className='weather_container_temp_moy'>
            {Math.round(weather.list[0].main.temp)} °C
            </div>
            <div className='weather_container_temp_box'>
              <div className='weather_container_temp_box_min'>min {Math.round(weather.list[0].main.temp_min)} °C</div>
              <div className='weather_container_temp_box_max'>max {Math.round(weather.list[0].main.temp_max)} °C</div>
              </div>
          </div>
          <div className='weather_container_description'>{weather.list[0].weather[0].description}</div>
        
        <div className='weather_container_forecast'>
          <div className='weather_container_forecast_container'>
            <div className='weather_container_forecast_container_title'>{foreCastDay(1)}</div>
            <div className='weather_container_forecast_container_logo'>{prettyIcons(weather.list[8].weather[0].icon, 40)}</div>
            <div className='weather_container_forecast_container_temp'>{Math.round(weather.list[8].main.temp)} °C</div>
          </div>
          <div className='weather_container_forecast_container'>
            <div className='weather_container_forecast_container_title'>{foreCastDay(2)}</div>
            <div className='weather_container_forecast_container_logo'>{prettyIcons(weather.list[16].weather[0].icon, 40)}</div>
            <div className='weather_container_forecast_container_temp'>{Math.round(weather.list[16].main.temp)} °C</div>
          </div>
          <div className='weather_container_forecast_container'>
            <div className='weather_container_forecast_container_title'>{foreCastDay(3)}</div>
            <div className='weather_container_forecast_container_logo'>{prettyIcons(weather.list[24].weather[0].icon, 40)}</div>
            <div className='weather_container_forecast_container_temp'>{Math.round(weather.list[24].main.temp)} °C</div>
          </div>
          <div className='weather_container_forecast_container'>
            <div className='weather_container_forecast_container_title'>{foreCastDay(4)}</div>
            <div className='weather_container_forecast_container_logo'>{prettyIcons(weather.list[32].weather[0].icon, 40)}</div>
            <div className='weather_container_forecast_container_temp'>{Math.round(weather.list[32].main.temp)} °C</div>
          </div>
          <div className='weather_container_forecast_container'>
            <div className='weather_container_forecast_container_title'>{foreCastDay(5)}</div>
            <div className='weather_container_forecast_container_logo'>{prettyIcons(weather.list[32].weather[0].icon, 40)}</div>
            <div className='weather_container_forecast_container_temp'>{Math.round(weather.list[32].main.temp)} °C</div>
          </div>
        </div>

        </div>
      </>
      )}
    </div>
  );
}

export default Weather;