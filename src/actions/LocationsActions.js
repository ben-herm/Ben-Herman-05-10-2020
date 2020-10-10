import * as types from './types'

export const setLocations = payload => ({
  type: types.SET_LOCATIONS,
  payload,
})

export const updateLocations = payload => ({
  type: types.UPDATE_FAVORITES,
  payload,
})

export const deleteFromFavorites = payload => ({
  type: types.DELETE_FAVORITE_LOCATION,
  payload,
})

