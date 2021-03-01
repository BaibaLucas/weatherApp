// Package import
import { connect } from 'react-redux';

// local import
import Weather from '../components/Weather';
import { changeCityField, changeMeasureField } from '../store/action';

const mapStateToProps = (state) => ({

  cityValue: state.weather.searchCity,
  weather: state.weather.weatherData,
  isLoaded: state.weather.isLoaded,
  lang: state.weather.lang,
  measure: state.weather.measure,
});

const mapDispatchToProps = (dispatch) => ({

  handleChange: (value) => {
    dispatch(changeCityField(value));
  },

  getWeather: () => {
    dispatch({type: 'GET_WEATHER'});
    dispatch({type: 'CHANGE_LOADER'});
  },

  getLocation: () => {
    dispatch({type: 'GET_LOCATION'});
  },

  changeMeasure: (value) => {
    dispatch(changeMeasureField(value));
    dispatch({type: 'GET_WEATHER'});
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);