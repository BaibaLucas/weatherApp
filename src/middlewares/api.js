// Package import
import axios from 'axios';

// Local import
import { weatherKey, locationURL } from './keys';
import { getLocationSuccess, getWeatherSuccess } from '../store/action';


// Request
const api = (store) => (next) => (action) => {
  switch (action.type) {

    case 'GET_WEATHER': {
      const { weather : { actualCity } } = store.getState();
      const { weather : { measure } } = store.getState();
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${actualCity}&units=${measure}&lang=FR&appid=${weatherKey}`)
      .then((response) => {
        if (response.status !== 200) {
          throw response.error;
        } else {
          store.dispatch(getWeatherSuccess(response.data));
        }
      }).catch((error) => {
        console.log('Oups !', error);
      });
      break;
    }

    case 'GET_LOCATION': {
      const { weather : { measure } } = store.getState();
      axios.get(`${locationURL}`)
      .then((response) => {
        if (response.status !== 200) {
          throw response.error;
        } else {
          store.dispatch(getLocationSuccess(response.data));
            axios({
              method: 'get',
              url: `https://api.openweathermap.org/data/2.5/forecast?q=${response.data.city}&units=${measure}&lang=FR&appid=${weatherKey}`,
              headers: {
                'Content-Type': 'application/json',
              }
            }).then((response) => {
              if (response.status !== 200) {
                throw response.error;
              } else {
                store.dispatch(getWeatherSuccess(response.data));
              }
            });
          }
      }).catch((error) => {
        console.log('Oups !', error);
      });
      break;
    }

    default:
      next(action);
  }
};

export default api;

