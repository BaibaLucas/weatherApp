import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiDayShowers,
  WiDayRain,
  WiDayThunderstorm,
  WiSnow,
  WiFog,
  WiNightClear,
  WiNightCloudy,
  WiNightShowers,
  WiNightRain,
  WiNightThunderstorm
} from "react-icons/wi";

/**
 * Pretty icons
 * use custom icons for weather instead of those from the weather API
 * @param {string} ref - icon ref on the weather API
 * @param {number} size - icon size
 */
const prettyIcons = (ref, size) => {
  if (ref === '01d') {
    return <WiDaySunny size={size}/>
  } else if (ref === '02d') {
    return <WiDayCloudy size={size}/>
  } else if (ref === '03d' || ref === '03n') {
    return <WiCloud size={size}/>
  } else if (ref === '04d' || ref === '04n') {
    return <WiCloudy size={size}/>
  } else if (ref === '09d') {
    return <WiDayShowers size={size}/>
  } else if (ref === '10d') {
    return <WiDayRain size={size}/>
  } else if (ref === '11d') {
    return <WiDayThunderstorm size={size}/>
  } else if (ref === '13d' || ref === '13n') {
    return <WiSnow size={size}/>
  } else if (ref === '50d' || ref === '50n') {
    return <WiFog size={size}/>
  } else if (ref === '01n') {
    return <WiNightClear size={size}/>
  } else if (ref === '02n') {
    return <WiNightCloudy size={size}/>
  } else if (ref === '09n') {
    return <WiNightShowers size={size}/>
  } else if (ref === '10n') {
    return <WiNightRain size={size}/>
  } else if (ref === '11n') {
    return <WiNightThunderstorm size={size}/>
  }
};

export default prettyIcons;