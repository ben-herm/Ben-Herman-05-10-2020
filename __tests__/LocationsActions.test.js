import * as actions from '../src/actions/LocationsActions';
import * as types from '../src/actions/types';
import {locations} from '../jsonMockUp'

describe('actions', () => {
  it('should set Locations', () => {
    const expectedAction = {
      type: types.SET_LOCATIONS,
      payload: locations,
    };
    expect(actions.setLocations(locations)).toEqual(expectedAction);
  });

  it('should add to favorites', () => {
    const expectedAction = {
      type: types.UPDATE_FAVORITES,
      payload: locations,
    };
    expect(actions.updateLocations(locations)).toEqual(expectedAction);
  });
});
