

const initialState = {
  input: '',
  locationData: {
    latitude: 64,
    longitude: -122,
    ip: '8.8.8.8',
    offset: -8,
    isp: 'Google LLC',
    district: 'Mountain View',
    city: 'California',
    country_name: 'US',
  }

}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return { ...state, locationData: action.payload }
    case 'SET_INPUT':
      return { ...state, input: action.payload }
    default:
      return state;
  }
}