/** Date NOW with momentJS */
import moment from 'moment';
import 'moment/locale/fr';


export const today = () => {
  moment.locale('fr');
  return moment().format('llll');
}

export const foreCastDay = (number) => {
  moment.locale('fr');
  let dayNow = moment().day();
  let forecastDate = moment().isoWeekday(dayNow + number);
  let forecastDAY = moment(forecastDate).format('ddd');
  return forecastDAY;
}