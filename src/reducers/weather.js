// action
import { 
  CHANGE_CITY_FIELD,
  GET_LOCATION_SUCCESS,
  GET_WEATHER_SUCCESS } from '../store/action';


// InitialState informations about weather
const initialState = {
  city: '',
  locationData: {},
  weatherData: {},
  isLoaded: false,
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    
    case CHANGE_CITY_FIELD:
      return {
        ...oldState,
        city: action.value,
      }

    case GET_WEATHER_SUCCESS:
      return {
        ...oldState,
        city: '',
        weatherData: action.weather,
        isLoaded: true,
      }

    case GET_LOCATION_SUCCESS:
      return {
        ...oldState,
        locationData: action.location
      }
    
    default:
      return {
        ...oldState,
      };
  };
};

export default reducer;