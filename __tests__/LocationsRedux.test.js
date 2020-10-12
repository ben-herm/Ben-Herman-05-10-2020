
import reducer, {INITIAL_STATE} from '../src/reducers/LocationsRedux';
import {locations, favorite} from '../mockUps/jsonMockUp';
import * as types from '../src/actions/types';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(INITIAL_STATE, {})).toEqual({
      locations: [],
      favoriteLocations: [],
    });
  });

  it('should add location', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: types.SET_LOCATIONS,
        payload: locations,
      }),
    ).toEqual({
      locations: locations,
      favoriteLocations: [],
    });
  });

  it('should add favorite', () => {
    expect(
        reducer(INITIAL_STATE, {
          type: types.UPDATE_FAVORITES,
          payload: favorite,
        }),
      ).toEqual({
        locations: [],
        favoriteLocations: favorite,
      });
  });
});
