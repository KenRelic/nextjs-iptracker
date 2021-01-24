import Head from 'next/head';
import React from 'react';

import { useSelector } from 'react-redux';

import Map from '../components/Map';
import Banner from '../components/banner/Banner';

import { StyledLayout } from '../../styles/layout.style';


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

export default function Home(res) {
  const locationData = useSelector((state) => state.locationData);
  const lat = useSelector((state) => state.locationData.latitude);
  const lng = useSelector((state) => state.locationData.longitude);


  const [hasFetchError, setHasFetchError] = React.useState(false);


  return (
    <div>
      <Head>
        <title key='0'>IP Tracker</title>
        <link key='1' rel="icon" href="/favicon.ico" />
        <link key='2' rel="preconnect" href="https://fonts.gstatic.com" />
        <link key='3' href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>


      <StyledLayout>
        <Banner
          hasFetchError={hasFetchError}
          setHasFetchError={setHasFetchError} />


        <Map loc={[lat, lng]} style={{ height: '65vh', width: "100%", textAlign: 'center' }} center={[lat, lng]} zoom={12}>
          {({ TileLayer, Marker, Popup, useMap }) => (
            <>
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
            </>
          )}
        </Map>
      </StyledLayout>
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_API}`)
  const data = await res.json();

  return {
    props: {
      data
    }
  }

}

console.log(process.env.NEXT_PUBLIC_API, process.env.API)