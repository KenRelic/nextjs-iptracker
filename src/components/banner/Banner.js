import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { StyledBanner } from './banner.style'

import fetchData from '../../util/fetchData';

const useMapData = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input);
  const locationData = useSelector((state) => state.locationData);

  const getLocation = () => {
    dispatch({
      type: 'SET_LOCATION',
      payload: fetchData(input)
    })
  }

  const setInput = (value) => {
    dispatch({
      type: 'SET_INPUT',
      payload: value
    })
  }

  return { input, locationData, getLocation, setInput }
}

export default function Banner(props) {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(['404', 'IP Not Found'])
  const { input, locationData, getLocation, setInput } = useMapData();
  const hasNoError = useSelector((state) => state.hasNoError);

  async function handleSetLocation(input, setErrorMsg) {
    let data = await fetchData(input, setErrorMsg)
    if (data && data.ip) {
      dispatch({
        type: 'SET_LOCATION',
        payload: data
      })
      dispatch({type:'HAS_NO_ERROR'})
    } else{
      dispatch({type:'HAS_ERROR'})
    }
  }

  return (
    <StyledBanner>
      <div className="container">
        <h1 className="title">NextJS IP Tracker</h1>
        <div className="search-wrapper">
          <input type="search"
            placeholder="Search for any IP Address"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="submit-btn" type="button"
            onClick={() => handleSetLocation(input, setErrorMessage)}></button>
        </div>

        <div className="result-section">
          {hasNoError ?
            <><div className="criteria">
              <h2 className="sub-title">IP ADDRESS</h2>
              <p className="result-value">{locationData.ip}</p>
            </div>
              <div className="separator"></div>
              <div className="criteria">
                <h2 className="sub-title">LOCATION</h2>
                <p className="result-value">{locationData.district + ', ' + locationData.city + ', ' + locationData.country_name}</p>
              </div>
              <div className="separator"></div>
              <div className="criteria">
                <h2 className="sub-title">TIMEZONE</h2>
                <p className="result-value">{locationData.offset}:00</p>
              </div>
              <div className="separator"></div>
              <div className="criteria">
                <h2 className="sub-title">ISP</h2>
                <p className="result-value">{locationData.isp}</p>
              </div></> :
            <div className="error-message">
              <h2 className="sub-title">{errorMessage[0]}</h2>
              <p className="result-value">{errorMessage[1]}</p>
            </div>}
        </div>

      </div>
    </StyledBanner>
  )
}