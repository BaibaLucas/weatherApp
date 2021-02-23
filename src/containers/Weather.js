// Package import
import { connect } from 'react-redux';

// local import
import Weather from '../components/Weather';
import { changeCityField } from '../store/action';

const mapStateToProps = (state) => ({

  cityValue: state.weather.city,
  weather: state.weather.weatherData,
  isLoaded: state.weather.isLoaded,

});

const mapDispatchToProps = (dispatch) => ({

  handleChange: (value) => {
    dispatch(changeCityField(value));
  },

  getWeather: () => {
    dispatch({type: 'GET_WEATHER'});
  },

  getLocation: () => {
    dispatch({type: 'GET_LOCATION'});
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);