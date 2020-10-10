import {combineReducers} from 'redux'
import storage from '@react-native-community/async-storage'
import {persistReducer} from 'redux-persist'
import LocationsReducer from './LocationsRedux'


const locationsReducerConfig = {
  key: 'LocationsReducer',
  storage,
}

const reducers = {
  LocationsReducer: persistReducer(locationsReducerConfig, LocationsReducer),
}

const appReducer = combineReducers(reducers)
export default appReducer
