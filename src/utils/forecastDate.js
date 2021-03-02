/** Date NOW with momentJS */
import moment from 'moment-timezone';
import 'moment/locale/fr';

/**
 * 
 * @param {number} number = day of week (from 0 to 6, the resulting date will be within the current (Sunday-to-Saturday) week.)
 * @param {string} lang = language (FR DEFAULT)
 */
export const foreCastDay = (number, lang) => {
  moment.locale(lang);
  let dayNow = moment().day();
  let forecastDate = moment().isoWeekday(dayNow + number);
  let forecastDAY = moment(forecastDate).format('ddd');
  return forecastDAY;
}
/**
 * 
 * @param {number} number = TZ(shift in seconds) / 60 = TZ(shift in mins)
 */
export const cityTime = (number) => {
  return moment().utcOffset(number).format('llll');
}
