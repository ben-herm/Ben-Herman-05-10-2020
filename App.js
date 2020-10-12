import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import RootContainer from './src/components/containers/RootContainer';
import {store, persistor} from './src/redux/';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

if (__DEV__) {
  import('./src/utils/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

Icon.loadFont();
LogBox.ignoreAllLogs();

const App: () => React$Node = () => {
  let persistorSub
  useEffect(() => {
    // persistor will update to know its finished loading
    persistorSub = persistor.subscribe(handlePersistorState)
    handlePersistorState()
    return () => {
      if (persistorSub) persistorSub()
    }
  }, [])

  const handlePersistorState = () => {
    const {bootstrapped} = persistor.getState()
    if (bootstrapped) {
      if (persistorSub) persistorSub()
    }
  }

  return (
    <>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            {<StatusBar barStyle="light-content" />}
            <RootContainer />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </>
  );
};

export default App;
