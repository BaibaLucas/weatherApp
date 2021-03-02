// action
import { 
  CHANGE_CITY_FIELD,
  GET_LOCATION_SUCCESS,
  GET_WEATHER_SUCCESS,
  CHANGE_MEASURE_FIELD
 } from '../store/action';


// InitialState informations about weather
const initialState = {
  actualCity: '',
  searchCity: '',
  locationData: {},
  weatherData: {},
  measure: 'metric',
  isLoaded: false,
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    
    case CHANGE_CITY_FIELD:
      return {
        ...oldState,
        searchCity: action.value,
        actualCity: action.value,
      }

    case GET_WEATHER_SUCCESS:
      return {
        ...oldState,
        searchCity: '',
        weatherData: action.weather,
        isLoaded: true,
      }

    case GET_LOCATION_SUCCESS:
      return {
        ...oldState,
        locationData: action.location,
        actualCity: action.location.city,
      }
      
    case 'CHANGE_LOADER':
      return {
        ...oldState,
        isLoaded: false,
      }

    case CHANGE_MEASURE_FIELD:
      return {
        ...oldState,
        measure: action.value,
      }
      
    default:
      return {
        ...oldState,
      };
  };
};

export default reducer;