import {
  fetchLocations,
  fetchCurrentConditions,
  fetchForecast,
} from '../src/api/index';
import axios from 'axios';
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
beforeEach(() => {
  fetch.resetMocks();
});

describe('Api Check', () => {
  it('fetchLocations', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      let p = new Promise((resolve, reject) => {
        resolve({
          json: function () {
            return {};
          },
        });
      });
      return p;
    });
    const response = await fetchLocations();
    expect(typeof response).toEqual('object');
  });

  it('fetchCurrentConditions', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      let p = new Promise((resolve, reject) => {
        resolve({
          json: function () {
            return {};
          },
        });
      });
      return p;
    });
    const response = await fetchCurrentConditions();
    expect(typeof response).toEqual('object');
  });

  it('fetchForecast', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      let p = new Promise((resolve, reject) => {
        resolve({
          json: function () {
            return {};
          },
        });
      });
      return p;
    });
    const response = await fetchForecast();
    expect(typeof response).toEqual('object');
  });
});
