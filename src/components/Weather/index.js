// Package import
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosSend } from 'react-icons/io';
import { FaSearchLocation } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { RiFahrenheitFill, RiCelsiusFill } from 'react-icons/ri';

// Local import
import prettyIcons from '../../utils/prettyIcons';
import Loader from '../Loader';
import { foreCastDay, cityTime } from '../../utils/forecastDate';



const Weather = ({ cityValue, handleChange, getWeather, weather, isLoaded, getLocation, changeMeasure }) => {

  useEffect(() => {
    getLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  /** useState
   * @param {boolean} searchOpen = SearchBar state
   * @param {boolean} settingsOpen = SettingsBar state
   * @param {string} units = Unit Measure of temperature
   */
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [units, setUnits] = useState('°C');
  /** useState
   * @function handleChange = set SearchBar Value (city)
  */
  const onChange = (event) => {
    handleChange(event.target.value);
  }
  /** useState
   * @function onSubmitForm = Submit
   * @function setSearchOpen = SearchBar State
   * @function getWeather = call API
  */
  const onSubmitForm = (event) => {
    event.preventDefault();
    setSearchOpen(!searchOpen);
    getWeather();
  }
  /** setUnits
   * @param {string} value = Units value
   * @function setUnitsOpen = Units State
   * @function changeMeasure() = reducers set value
  */
  const setCels = () => {
    const value = 'metric';
    setUnits('°C');
    changeMeasure(value);
  }
  const setFahr = () => {
    const value = 'imperial';
    setUnits('°F');
    changeMeasure(value);
  }
  /**
   * toggle
   * @function toggle = Close/Open SearchBar OR Settings
   * can't open these at the same time
   */
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (settingsOpen) {
      setSettingsOpen(false);
    }
  };
  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
    if (searchOpen) {
      setSearchOpen(false);
    }
  };
  
  return (
    <div className='weather'>
      <div className={searchOpen ? 'weather_search weather_search_open' : 'weather_search'}>
        <FaSearchLocation size={30}
        onClick={toggleSearch}
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
      <div className={settingsOpen ? 'weather_settings weather_settings_open' : 'weather_settings'}>
        <div className='weather_settings_options'>
          <button className='weather_settings_options_logo celsius' onClick={setCels}>
            <RiCelsiusFill size={20}/>
          </button>
          <button className='weather_settings_options_logo fahrenheit' onClick={setFahr}>
            <RiFahrenheitFill size={20}/>
          </button>
        </div>
        <MdSettings size={30} onClick={toggleSettings} />
      </div>

      {/**
       * @param {boolean} isLoaded
       * conditional display Loader
      */}
      {!isLoaded && (
        <Loader />
      )}
      {isLoaded && (
        <>
        {/* WEATHER CONTAINER */}
        <div className='weather_container'>
          <div className='weather_container_city'>{weather.city.name} / {weather.city.country}</div>
          <div className='weather_container_date'>{cityTime(weather.city.timezone / 60)}</div>
          <div className='weather_container_logo'>{prettyIcons(weather.list[0].weather[0].icon, 250)}</div>
          <div className='weather_container_temp'>
            <div className='weather_container_temp_moy'> {Math.round(weather.list[0].main.temp)} {units} </div>
            <div className='weather_container_temp_box'>
              <div className='weather_container_temp_box_min'>min {Math.round(weather.list[0].main.temp_min)} {units}</div>
              <div className='weather_container_temp_box_max'>max {Math.round(weather.list[0].main.temp_max)} {units}</div>
            </div>
          </div>
          <div className='weather_container_description'>{weather.list[0].weather[0].description}</div>
        {/* FORECAST CONTAINER */}
          <div className='weather_container_forecast'>
          <div className='weather_container_forecast_container'>
            <div className='weather_container_forecast_container_title'>{foreCastDay(1)}</div>
            <div className='weather_container_forecast_container_logo'>{prettyIcons(weather.list[8].weather[0].icon, 40)}</div>
            <div className='weather_container_forecast_container_temp'>{Math.round(weather.list[8].main.temp)} {units}</div>
          </div>
          <div className='weather_container_forecast_container'>
            <div className='weather_container_forecast_container_title'>{foreCastDay(2)}</div>
            <div className='weather_container_forecast_container_logo'>{prettyIcons(weather.list[16].weather[0].icon, 40)}</div>
            <div className='weather_container_forecast_container_temp'>{Math.round(weather.list[16].main.temp)} {units}</div>
          </div>
          <div className='weather_container_forecast_container'>
            <div className='weather_container_forecast_container_title'>{foreCastDay(3)}</div>
            <div className='weather_container_forecast_container_logo'>{prettyIcons(weather.list[24].weather[0].icon, 40)}</div>
            <div className='weather_container_forecast_container_temp'>{Math.round(weather.list[24].main.temp)} {units}</div>
          </div>
          <div className='weather_container_forecast_container'>
            <div className='weather_container_forecast_container_title'>{foreCastDay(4)}</div>
            <div className='weather_container_forecast_container_logo'>{prettyIcons(weather.list[32].weather[0].icon, 40)}</div>
            <div className='weather_container_forecast_container_temp'>{Math.round(weather.list[32].main.temp)} {units}</div>
          </div>
          <div className='weather_container_forecast_container'>
            <div className='weather_container_forecast_container_title'>{foreCastDay(5)}</div>
            <div className='weather_container_forecast_container_logo'>{prettyIcons(weather.list[32].weather[0].icon, 40)}</div>
            <div className='weather_container_forecast_container_temp'>{Math.round(weather.list[32].main.temp)} {units}</div>
          </div>
        </div>
        </div>
      </>
      )}
    </div>
  );
}

Weather.propTypes = {
  cityValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  getWeather: PropTypes.func.isRequired,
  getLocation: PropTypes.func.isRequired,
  changeMeasure: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  weather: PropTypes.shape({
    city: PropTypes.shape({
      coord: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired,
      }),
      country: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      population: PropTypes.number.isRequired,
      sunrise: PropTypes.number.isRequired,
      sunset: PropTypes.number.isRequired,
      timezone: PropTypes.number.isRequired,
    }),
    cnt: PropTypes.number,
    cod: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({
      dt: PropTypes.number.isRequired,
      dt_txt: PropTypes.string.isRequired,
      pop: PropTypes.number.isRequired,
      visibility: PropTypes.number.isRequired,
      clouds: PropTypes.shape({
        all: PropTypes.number.isRequired,
      }),
      main: PropTypes.shape({
        feels_like: PropTypes.number.isRequired,
        grnd_level: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        pressure: PropTypes.number.isRequired,
        sea_level: PropTypes.number.isRequired,
        temp: PropTypes.number.isRequired,
        temp_kf: PropTypes.number.isRequired,
        temp_max: PropTypes.number.isRequired,
        temp_min: PropTypes.number.isRequired,
      }),
      sys: PropTypes.shape({
        pod: PropTypes.string.isRequired,
      }),
      weather: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        main: PropTypes.string.isRequired,
      })),
      wind: PropTypes.shape({
        deg: PropTypes.number.isRequired,
        speed: PropTypes.number.isRequired,
      }),
    })
    )
  })
}
export default Weather;