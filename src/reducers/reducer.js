
// const initialState = {
//   input: '',
//   hasNoError:true,
//   locationData: {
//     latitude: 28.35753,
//     longitude: -81.55827,
//     ip: '8.8.8.8',
//     offset: -5,
//     isp: 'Google LLC',
//     district: 'Orange County',
//     city: 'Mountain View',
//     country_name: 'United States',
//   }

// }
const initialState = {
  input: '',
  hasNoError:true,
  locationData: {
    latitude: 28.35753,
    longitude: -81.55827,
    ip: '',
    offset: '',
    isp: '',
    district: '',
    city: '',
    country_name: '',
  }

}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return { ...state, locationData: action.payload }
    case 'SET_INPUT':
      return { ...state, input: action.payload }
    case 'HAS_ERROR':
      return { ...state, hasNoError: false }
      case 'HAS_NO_ERROR':
        return { ...state, hasNoError: true }
    default:
      return state;
  }
}