import Head from 'next/head';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';


import Map from '../components/Map';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/footer';

import { StyledLayout } from '../../styles/layout.style';
import fetchData from '../util/fetchData';


const MapEffect = ({ useMap }) => {


  const lat = useSelector((state) => state.locationData.latitude);
  const lng = useSelector((state) => state.locationData.longitude);

  const map = useMap();
  React.useEffect(() => {
    console.log('map', map, 'center', map.options.center)
    map.setView([lat, lng])
    // map.locate();
  }, [lat, lng])

  return null
}

export default function Home() {

  const dispatch = useDispatch();
  const locationData = useSelector((state) => state.locationData);
  const lat = useSelector((state) => state.locationData.latitude);
  const lng = useSelector((state) => state.locationData.longitude);
  const hasNoError = useSelector((state) => state.hasNoError);

  React.useEffect(async () => {
    console.log('mounted')
    dispatch({
      type: 'SET_LOCATION',
      payload: await fetchData('', locationData)
    })
    dispatch({type:'HAS_NO_ERROR'})
  }, [])

  return (
    <div>
      <Head>
        <title key='0'>IP Tracker</title>
        <link key='1' rel="icon" href="/favicon.ico" />
        <link key='2' rel="preconnect" href="https://fonts.gstatic.com" />
        <link key='3' href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>


      <StyledLayout>
        <Banner />
        <Map loc={[lat, lng]} style={{ height: '65vh', width: "100%", textAlign: 'center' }} center={[lat, lng]} zoom={12}>
          {({ TileLayer, Marker, Popup, useMap }) => (
            hasNoError ? <>
              <MapEffect useMap={useMap} />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              <Marker position={[lat, lng]}>
                <Popup>
                  {locationData.district + ' ' + locationData.city}
                  <br />
                  {locationData.country_name}
                </Popup>
              </Marker>
            </> : null
          )}
        </Map>
      </StyledLayout>
      <Footer />
    </div>
  )
}

// export async function getStaticProps() {

//   const res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_API}`)
//   const data = await res.json();

//   return {
//     props: {
//       data
//     }
//   }

// }

// console.log(process.env.NEXT_PUBLIC_API, process.env.API)