export const locations = [
  {
    Version: 1,
    Key: '328328',
    Type: 'City',
    Rank: 10,
    LocalizedName: 'London',
    Country: {
      ID: 'GB',
      LocalizedName: 'United Kingdom',
    },
    AdministrativeArea: {
      ID: 'LND',
      LocalizedName: 'London',
    },
  },
  {
    Version: 1,
    Key: '264120',
    Type: 'City',
    Rank: 10,
    LocalizedName: 'Lima',
    Country: {
      ID: 'PE',
      LocalizedName: 'Peru',
    },
    AdministrativeArea: {
      ID: 'LMA',
      LocalizedName: 'Lima',
    },
  },
  {
    Version: 1,
    Key: '102246',
    Type: 'City',
    Rank: 11,
    LocalizedName: 'Lanzhou',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'GS',
      LocalizedName: 'Gansu',
    },
  },
  {
    Version: 1,
    Key: '260622',
    Type: 'City',
    Rank: 11,
    LocalizedName: 'Lahore',
    Country: {
      ID: 'PK',
      LocalizedName: 'Pakistan',
    },
    AdministrativeArea: {
      ID: 'PB',
      LocalizedName: 'Punjab',
    },
  },
  {
    Version: 1,
    Key: '58668',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Langfang',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'HE',
      LocalizedName: 'Hebei',
    },
  },
  {
    Version: 1,
    Key: '59411',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Loudi',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'HN',
      LocalizedName: 'Hunan',
    },
  },
  {
    Version: 1,
    Key: '60972',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Leshan',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'SC',
      LocalizedName: 'Sichuan',
    },
  },
  {
    Version: 1,
    Key: '60636',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Liaocheng',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'SD',
      LocalizedName: 'Shandong',
    },
  },
  {
    Version: 1,
    Key: '60637',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Linyi',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'SD',
      LocalizedName: 'Shandong',
    },
  },
  {
    Version: 1,
    Key: '60838',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Linfen',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'SX',
      LocalizedName: 'Shanxi',
    },
  },
];

export const favorite = [
  'location',
  {
    LocalObservationDateTime: '2020-10-10T03:35:00-05:00',
    EpochTime: 1602318900,
    WeatherText: 'Cloudy',
    WeatherIcon: 7,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: {
        Value: 15.9,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 61,
        Unit: 'F',
        UnitType: 18,
      },
    },
    MobileLink:
      'http://m.accuweather.com/en/pe/lima/264120/current-weather/264120?lang=en-us',
    Link:
      'http://www.accuweather.com/en/pe/lima/264120/current-weather/264120?lang=en-us',
    name: 'Lima',
    key: '264120',
    forecast: {
      data: {
        Headline: {
          EffectiveDate: '2020-10-10T07:00:00-05:00',
          EffectiveEpochDate: 1602331200,
          Severity: 7,
          Text: 'Mostly sunny this weekend',
          Category: '',
          EndDate: null,
          EndEpochDate: null,
          MobileLink:
            'http://m.accuweather.com/en/pe/lima/264120/extended-weather-forecast/264120?lang=en-us',
          Link:
            'http://www.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?lang=en-us',
        },
        DailyForecasts: [
          {
            Date: '2020-10-09T07:00:00-05:00',
            EpochDate: 1602244800,
            Temperature: {
              Minimum: {
                Value: 61,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 65,
                Unit: 'F',
                UnitType: 18,
              },
            },
            Day: {
              Icon: 4,
              IconPhrase: 'Intermittent clouds',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 36,
              IconPhrase: 'Intermittent clouds',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?lang=en-us',
            Link:
              'http://www.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?lang=en-us',
          },
          {
            Date: '2020-10-10T07:00:00-05:00',
            EpochDate: 1602331200,
            Temperature: {
              Minimum: {
                Value: 60,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 66,
                Unit: 'F',
                UnitType: 18,
              },
            },
            Day: {
              Icon: 1,
              IconPhrase: 'Sunny',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 34,
              IconPhrase: 'Mostly clear',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?day=1&lang=en-us',
            Link:
              'http://www.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?day=1&lang=en-us',
          },
          {
            Date: '2020-10-11T07:00:00-05:00',
            EpochDate: 1602417600,
            Temperature: {
              Minimum: {
                Value: 60,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 67,
                Unit: 'F',
                UnitType: 18,
              },
            },
            Day: {
              Icon: 3,
              IconPhrase: 'Partly sunny',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Partly cloudy',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?day=2&lang=en-us',
            Link:
              'http://www.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?day=2&lang=en-us',
          },
          {
            Date: '2020-10-12T07:00:00-05:00',
            EpochDate: 1602504000,
            Temperature: {
              Minimum: {
                Value: 60,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 66,
                Unit: 'F',
                UnitType: 18,
              },
            },
            Day: {
              Icon: 3,
              IconPhrase: 'Partly sunny',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Partly cloudy',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?day=3&lang=en-us',
            Link:
              'http://www.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?day=3&lang=en-us',
          },
          {
            Date: '2020-10-13T07:00:00-05:00',
            EpochDate: 1602590400,
            Temperature: {
              Minimum: {
                Value: 59,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 66,
                Unit: 'F',
                UnitType: 18,
              },
            },
            Day: {
              Icon: 3,
              IconPhrase: 'Partly sunny',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 36,
              IconPhrase: 'Intermittent clouds',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?day=4&lang=en-us',
            Link:
              'http://www.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?day=4&lang=en-us',
          },
        ],
      },
      status: 200,
      headers: {
        connection: 'keep-alive',
        'transfer-encoding': 'chunked',
        'content-type': 'application/json; charset=utf-8',
        'access-control-allow-methods': 'GET, PUT, POST, DELETE',
        vary: 'Accept-Encoding',
        'access-control-allow-origin': '*',
        expires: 'Sat, 10 Oct 2020 09:03:18 GMT',
        'access-control-max-age': '3628800',
        'ratelimit-limit': '50',
        'x-forwarded-port': '80',
        'access-control-allow-headers': 'origin, x-requested-with, accept',
        'x-forwarded-for': '79.176.161.106',
        'x-forwarded-proto': 'http',
        server: 'Microsoft-IIS/10.0',
        'accept-encoding': 'gzip',
        accept: 'application/json, text/plain, */*',
        host: 'api.accuweather.com',
        date: 'Sat, 10 Oct 2020 08:45:22 GMT',
        'user-agent': 'okhttp/4.2.2',
        'ratelimit-remaining': '44',
        'cache-control': 'public, max-age=1076',
      },
      config: {
        url:
          'http://dataservice.accuweather.com/forecasts/v1/daily/5day/264120?apikey=5kgsgcq6D2u7L3NaOr2fElYVLisn1HRr',
        headers: {
          Accept: 'application/json, text/plain, */*',
        },
        transformRequest: [' transformRequest() '],
        transformResponse: [' transformResponse() '],
        timeout: 3000,
        adapter: ' xhrAdapter() ',
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: ' validateStatus() ',
        method: 'get',
      },
      request: {
        UNSENT: 0,
        OPENED: 1,
        HEADERS_RECEIVED: 2,
        LOADING: 3,
        DONE: 4,
        readyState: 4,
        status: 200,
        timeout: 3000,
        withCredentials: true,
        upload: {},
        _aborted: false,
        _hasError: false,
        _method: 'GET',
        _perfKey: 'network_XMLHttpRequest_1014',
        _response:
          '{"Headline":{"EffectiveDate":"2020-10-10T07:00:00-05:00","EffectiveEpochDate":1602331200,"Severity":7,"Text":"Mostly sunny this weekend","Category":"","EndDate":null,"EndEpochDate":null,"MobileLink":"http://m.accuweather.com/en/pe/lima/264120/extended-weather-forecast/264120?lang=en-us","Link":"http://www.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?lang=en-us"},"DailyForecasts":[{"Date":"2020-10-09T07:00:00-05:00","EpochDate":1602244800,"Temperature":{"Minimum":{"Value":61.0,"Unit":"F","UnitType":18},"Maximum":{"Value":65.0,"Unit":"F","UnitType":18}},"Day":{"Icon":4,"IconPhrase":"Intermittent clouds","HasPrecipitation":false},"Night":{"Icon":36,"IconPhrase":"Intermittent clouds","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?lang=en-us","Link":"http://www.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?lang=en-us"},{"Date":"2020-10-10T07:00:00-05:00","EpochDate":1602331200,"Temperature":{"Minimum":{"Value":60.0,"Unit":"F","UnitType":18},"Maximum":{"Value":66.0,"Unit":"F","UnitType":18}},"Day":{"Icon":1,"IconPhrase":"Sunny","HasPrecipitation":false},"Night":{"Icon":34,"IconPhrase":"Mostly clear","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?day=1&lang=en-us","Link":"http://www.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?day=1&lang=en-us"},{"Date":"2020-10-11T07:00:00-05:00","EpochDate":1602417600,"Temperature":{"Minimum":{"Value":60.0,"Unit":"F","UnitType":18},"Maximum":{"Value":67.0,"Unit":"F","UnitType":18}},"Day":{"Icon":3,"IconPhrase":"Partly sunny","HasPrecipitation":false},"Night":{"Icon":35,"IconPhrase":"Partly cloudy","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?day=2&lang=en-us","Link":"http://www.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?day=2&lang=en-us"},{"Date":"2020-10-12T07:00:00-05:00","EpochDate":1602504000,"Temperature":{"Minimum":{"Value":60.0,"Unit":"F","UnitType":18},"Maximum":{"Value":66.0,"Unit":"F","UnitType":18}},"Day":{"Icon":3,"IconPhrase":"Partly sunny","HasPrecipitation":false},"Night":{"Icon":35,"IconPhrase":"Partly cloudy","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?day=3&lang=en-us","Link":"http://www.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?day=3&lang=en-us"},{"Date":"2020-10-13T07:00:00-05:00","EpochDate":1602590400,"Temperature":{"Minimum":{"Value":59.0,"Unit":"F","UnitType":18},"Maximum":{"Value":66.0,"Unit":"F","UnitType":18}},"Day":{"Icon":3,"IconPhrase":"Partly sunny","HasPrecipitation":false},"Night":{"Icon":36,"IconPhrase":"Intermittent clouds","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?day=4&lang=en-us","Link":"http://www.accuweather.com/en/pe/lima/264120/daily-weather-forecast/264120?day=4&lang=en-us"}]}',
        _url:
          'http://dataservice.accuweather.com/forecasts/v1/daily/5day/264120?apikey=5kgsgcq6D2u7L3NaOr2fElYVLisn1HRr',
        _timedOut: false,
        _trackingName: 1014,
        _incrementalEvents: true,
        responseHeaders: {
          Connection: 'keep-alive',
          'Transfer-Encoding': 'chunked',
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
          Vary: 'Accept-Encoding',
          'Access-Control-Allow-Origin': '*',
          Expires: 'Sat, 10 Oct 2020 09:03:18 GMT',
          'Access-Control-Max-Age': '3628800',
          'RateLimit-Limit': '50',
          'X-Forwarded-Port': '80',
          'Access-Control-Allow-Headers': 'origin, x-requested-with, accept',
          'X-Forwarded-For': '79.176.161.106',
          'X-Forwarded-Proto': 'http',
          Server: 'Microsoft-IIS/10.0',
          'Accept-Encoding': 'gzip',
          accept: 'application/json, text/plain, */*',
          Host: 'api.accuweather.com',
          Date: 'Sat, 10 Oct 2020 08:45:22 GMT',
          'User-Agent': 'okhttp/4.2.2',
          'RateLimit-Remaining': '44',
          'Cache-Control': 'public, max-age=1076',
        },
        _requestId: null,
        _headers: {
          accept: 'application/json, text/plain, */*',
        },
        _responseType: '',
        _sent: true,
        _lowerCaseResponseHeaders: {
          connection: 'keep-alive',
          'transfer-encoding': 'chunked',
          'content-type': 'application/json; charset=utf-8',
          'access-control-allow-methods': 'GET, PUT, POST, DELETE',
          vary: 'Accept-Encoding',
          'access-control-allow-origin': '*',
          expires: 'Sat, 10 Oct 2020 09:03:18 GMT',
          'access-control-max-age': '3628800',
          'ratelimit-limit': '50',
          'x-forwarded-port': '80',
          'access-control-allow-headers': 'origin, x-requested-with, accept',
          'x-forwarded-for': '79.176.161.106',
          'x-forwarded-proto': 'http',
          server: 'Microsoft-IIS/10.0',
          'accept-encoding': 'gzip',
          accept: 'application/json, text/plain, */*',
          host: 'api.accuweather.com',
          date: 'Sat, 10 Oct 2020 08:45:22 GMT',
          'user-agent': 'okhttp/4.2.2',
          'ratelimit-remaining': '44',
          'cache-control': 'public, max-age=1076',
        },
        _subscriptions: [],
        responseURL:
          'http://dataservice.accuweather.com/forecasts/v1/daily/5day/264120?apikey=5kgsgcq6D2u7L3NaOr2fElYVLisn1HRr',
      },
    },
  },
];

// export const singleContact =
