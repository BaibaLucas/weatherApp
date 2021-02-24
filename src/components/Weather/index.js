// Package import
import React, { useEffect, useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import { FaSearchLocation } from 'react-icons/fa';

// Local import
import prettyIcons from '../../utils/prettyIcons';
import Loader from '../Loader';


const Weather = ({ cityValue, handleChange, getWeather, weather, isLoaded, getLocation }) => {


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
        <div className='weather_container_city'>{weather.name} / {weather.sys.country}</div>
        <div className='weather_container_logo'>{prettyIcons(weather.weather[0].icon, 350)}</div>
        <div className='weather_container_temp'>{Math.round(weather.main.temp)} °C</div>
        <div className='weather_container_description'>{weather.weather[0].description}</div>
        </div>
      </>
      )}
    </div>
  );
}

export default Weather;