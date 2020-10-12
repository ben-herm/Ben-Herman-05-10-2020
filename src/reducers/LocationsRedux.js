// @flow

import * as types from '../actions/types';
import {PURGE} from 'redux-persist';

export const INITIAL_STATE = {
  locations: [],
  favoriteLocations: [],
  units: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_LOCATIONS:
      return {...state, locations: action.payload};
    case types.UPDATE_FAVORITES:
      return {...state, favoriteLocations: action.payload};
    case types.DELETE_FAVORITE_LOCATION:
      return {...state, favoriteLocations: action.payload};
      case types.CHANGE_TEMPERATURE_UNITS:
        return {...state, units: action.payload};
    case PURGE:
      return {...INITIAL_STATE}; // Return the initial state of this reducer to 'reset' the app
    default:
      return state;
  }
};
