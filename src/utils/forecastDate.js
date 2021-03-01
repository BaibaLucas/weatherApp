/** Date NOW with momentJS */
import moment from 'moment-timezone';
import 'moment/locale/fr';


// export const today = () => {
//   moment.locale('fr');
//   return moment().format('llll');
// }

export const foreCastDay = (number, lang) => {
  moment.locale(lang);
  let dayNow = moment().day();
  let forecastDate = moment().isoWeekday(dayNow + number);
  let forecastDAY = moment(forecastDate).format('ddd');
  return forecastDAY;
}

export const cityTime = (number) => {
  return moment().utcOffset(number).format('llll');
}

// 
