import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Orientation from 'react-native-orientation';
import {
  ScrollView,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import {fetchLocations, fetchCurrentConditions, fetchForecast} from '../../api';
import {setLocations} from '../../actions/LocationsActions';
import WeatherDetails from '../main/screens/WeatherDetails';
const width = Dimensions.get('window').width;
import Autocomplete from 'react-native-autocomplete-input';
import _ from 'lodash';
import {PURGE} from 'redux-persist';
import {OpenPopUp} from './common/PopUp';
import LinearGradient from 'react-native-linear-gradient';

const SearchPage = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {locations, favoriteLocations} = useSelector(
    (state) => state.LocationsReducer,
  );

  const [openModal, setOpenModal] = useState({shouldOpen: false});
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [isPortrait, setIsPortrait] = useState(true);
  const [selectedLocationData, setselectedLocationData] = useState(
    (route.params && route.params.location) || null,
  );

  const fieldRef = useRef();

  useEffect(() => {
    handleOnLocationPress('tel Aviv');
    // const initial = Orientation.getInitialOrientation();
    // if (initial === 'PORTRAIT') {
    //   setIsPortrait(true);
    // } else {
    //   setIsPortrait(false);
    // }
    Orientation.addOrientationListener(_orientationDidChange);
  }, []);

  const _orientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE') {
      setIsPortrait(false);
    } else {
      setIsPortrait(true);
    }
  };

  useEffect(() => {
    if (route.params) {
      handleOnLocationPress(route.params.location.name);
    }
  }, [route.params]);

  // useEffect(() => {
  //   let keyboardDidHideListener = Keyboard.addListener(
  //     'keyboardDidHide',
  //     _keyboardDidHide,
  //   );
  //   return () => {
  //     keyboardDidHideListener.remove();
  //   };
  // }, []);

  // const _keyboardDidHide = () => {
  //   setData([]);
  // };

  const formatText = (text) => {
    return text.replace(/[^A-Za-z\s]*$/gi, '');
  };

  const fetchlocationsForSearch = (text) => {
    let newResults = [];
    fetchLocations(text)
      .then((loc) => {
        if (loc && loc.data.length > 0) {
          loc.data.forEach((result) => {
            newResults.push([result.LocalizedName, result.Key]);
          });
        }
        setData(newResults);
      })
      .catch((e) => {
        setOpenModal({
          shouldOpen: true,
          errorMsg: 'Request Invalid or Expired Key',
        });
      });
  };

  const autoCompleteSearch = (text) => {
    // let value = text.replace(/[^A-Za-z]/gi, '');
    const search = _.debounce(fetchlocationsForSearch, 600);
    setSearchQuery((prevSearch) => {
      if (prevSearch.cancel) {
        prevSearch.cancel();
      }
      return search;
    });
    if (text !== '') {
      setInputValue(text);
      search(text);
    }
  };

  const handleOnLocationPress = (item, key = '215854') => {
    setData([]);
    let newLocations = [];
    if (locations.length > 0) {
      newLocations = JSON.parse(locations);
    }

    const exists = newLocations.some((location) => location.name == item);

    data.some((location) => {
      if (location.includes(item)) {
        key = location[1];
      }
    });
    if (!exists) {
      fetchCurrentConditions(key)
        .then((response) => {
          fetchForecast(key)
            .then((forecast) => {
              newLocations.push({...response, name: item, key, forecast});
              dispatch(setLocations(JSON.stringify(newLocations)));
              setselectedLocationData({
                ...response.data[0],
                name: item,
                key,
                forecast,
              });
            })
            .catch((e) => {
              setOpenModal({
                shouldOpen: true,
                errorMsg: 'Request Invalid or Expired Key',
              });
            });
        })
        .catch((err) => {
          setOpenModal({
            shouldOpen: true,
            errorMsg: 'Request Invalid or Expired Key',
          });
        });
    } else {
      newLocations.forEach((location) => {
        if (location.name == item) {
          setselectedLocationData({
            ...location.data[0],
            name: item,
            key,
            forecast: location.forecast,
          });
        }
      });
    }
  };

  const handleOrientation = (value) => {
    return isPortrait ? value : value + 0.2;
  };

  const renderAutoComplete = () => {
    let resultsStrings = [];
    data.forEach((location) => {
      resultsStrings.push(location[0]);
    });
    return (
      <KeyboardAvoidingView
        behavior={'height'}
        style={{
          ...styles.containerView,
          flex: !selectedLocationData
            ? 1
            : data.length == 0
            ? handleOrientation(0.2)
            : handleOrientation(0.5),
          elevation: 99,
          zIndex: 99,
        }}>
        <ScrollView
        onScroll={()=> {}}
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{flex: 1, height: 400}}>
          <Autocomplete
            inputContainerStyle={{
              flex: 1,
              color: 'white',
              borderWidth: 0,
            }}
            containerStyle={{
              backgroundColor: 'transparent',
              borderColor: 'white',
            }}
            data={resultsStrings}
            defaultValue={query}
            value={inputValue}
            listContainerStyle={{
              position: 'absolute',
              top: isPortrait ? 65: data.length == 0 ? 65:0,
              left: 0,
              height: 250,
              width: width,
              elevation: 999,
              zIndex: 999,
            }}
            placeholder="Search For A Location"
            renderTextInput={() => (
              <TextField
                style={{color: 'white'}}
                label="Enter Location"
                formatText={formatText}
                disabledLineWidth={4}
                activeLineWidth={1}
                lineWidth={1}
                baseColor={'white'}
                tintColor={'white'}
                onBlur={()=>   setData([])}
                onChangeText={autoCompleteSearch}
                ref={fieldRef}
              />
            )}
            renderItem={({item, i}) => (
              <TouchableOpacity
                style={{padding: 5, borderColor: 'red'}}
                onPress={() => handleOnLocationPress(item)}>
                <Text style={{fontSize: 14}}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#009FFD', '#2A2A72']}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* {renderHeader()} */}
        {renderAutoComplete()}
        {selectedLocationData ? (
          <View
            // keyboardShouldPersistTaps="always"
            style={{
              flex: 1,
              ...styles.locationView,
              // borderWidth: 0,
              // borderColor: 'transparent',
            }}>
            <WeatherDetails data={data} location={selectedLocationData} />
          </View>
        ) : null}
      </LinearGradient>
      <OpenPopUp
        errorMsg={openModal.errorMsg}
        isVisible={openModal.shouldOpen}
        onPress={() => setOpenModal({shouldOpen: false})}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // minHeight: Math.round(Dimensions.get('window').height),
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  containerView: {
    padding: 0,
    marginTop: 10,
    width: '75%',
    alignSelf: 'center',
  },
  loader: {
    position: 'absolute',
    top: '50%',
    bottom: 0,
    left: 0,
    right: 0,
  },
  imageCard: {
    flex: 1,
    padding: 5,
    margin: 15,
    width: width * 0.5,
  },
  locationView: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    alignSelf: 'center',
    width: 'auto',
    height: 140,
    width: 250,
  },
});

export default SearchPage;
