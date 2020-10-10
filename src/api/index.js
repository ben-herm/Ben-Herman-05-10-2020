import axios from 'axios'
import {API_KEY} from '@env'

export const fetchLocations = (query = '') =>
  new Promise((resolve, reject) => {
    axios
      .request({
        url: `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`,
        timeout: 3000,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => { 
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })

  export const fetchCurrentConditions = (key = '') =>
  new Promise((resolve, reject) => {
    axios
      .request({
        url: `https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API_KEY}`,
        timeout: 3000,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => { 
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })

  export const fetchForecast = (key = '') =>
  new Promise((resolve, reject) => {
    axios
      .request({
        url: `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`,
        timeout: 3000,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => { 
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })


