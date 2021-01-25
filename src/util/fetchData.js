//chnage functin to async

import { useSelector, useDispatch } from 'react-redux';


export default async function getUserDataByIP(ip, setErrorMsg) {
  // const dispatch = useDispatch();
  try {
    const res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_API}&ip=${ip}`)
    const data = await res.json();
    console.log(data.ip)
    if (data.ip) {
      const { latitude,
        longitude,
        ip,
        time_zone,
        isp,
        district,
        city,
        country_name } = data;

      const { offset } = time_zone;
      const locationData = {
        longitude, latitude, ip, isp, district, city, country_name, offset
      }

      // setLocation([data.latitude, data.longitude])
      // setFetchError(false);
      console.log(ip, locationData, data)
      return locationData 

    } else {
      // setFetchError(true);
      // setErrorMessage(['404', 'IP Not Found'])
      // return //eror dispatch
      return null
    }


  } catch (error) {
    // setFetchError(true);
    setErrorMsg(['Network', 'error'])
    console.log(error)
    return null;
  }

}


