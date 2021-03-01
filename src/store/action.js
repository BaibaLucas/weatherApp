//TYPES
export const CHANGE_CITY_FIELD = 'CHANGE_CITY_FIELD';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const CHANGE_MEASURE_FIELD = 'CHANGE_MEASURE_FIELD';

// ACTIONS
export const changeCityField = (value) => ({
  type: CHANGE_CITY_FIELD,
  value,
});

export const getWeatherSuccess = (weather) => ({
  type: GET_WEATHER_SUCCESS,
  weather,
});

export const getLocationSuccess = (location) => ({
  type: GET_LOCATION_SUCCESS,
  location,
});

export const changeMeasureField = (value) => ({
  type: CHANGE_MEASURE_FIELD,
  value,
});