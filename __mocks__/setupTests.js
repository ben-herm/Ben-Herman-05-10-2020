import 'react-native-gesture-handler/jestSetup';

import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';


global.fetch = require('jest-fetch-mock');
global.self = global
global.window = {}
global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

jest.useFakeTimers()

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');