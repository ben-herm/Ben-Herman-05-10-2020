import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import WeatherDetails from '../src/components/main/screens/WeatherDetails';
import {favorite} from '../jsonMockUp';
import {useSelector, useDispatch} from 'react-redux';
import {store, persistor} from '../src/redux';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useState: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('renders correctly', () => {
  it('renders correctly', () => {
    renderer.create(<WeatherDetails location={selectedLocationData} />);
  });
});
