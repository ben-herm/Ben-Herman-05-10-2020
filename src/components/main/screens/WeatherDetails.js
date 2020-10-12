import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  updateLocations,
  deleteFromFavorites,
  changeTempUnits,
} from '../../../actions/LocationsActions';
import images from '../../../resources/Images';
import {convertToCelsius, convertToDay} from '../../../utils/utilities';
import {Card} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('window').width;
const WeatherDetails = ({route, navigation, location}) => {
  const {locations, favoriteLocations, units} = useSelector(
    (state) => state.LocationsReducer,
  );

  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);
  const [openModal, setOpenModal] = useState({shouldOpen: false, method: ''});

  const {WeatherText, Temperature, WeatherIcon, name, key, forecast} = location;
  const {Metric, Imperial} = Temperature;
  const {
    data: {Headline, DailyForecasts},
  } = forecast;

  useEffect(() => {
    checkIfLocationIsFavorite();
  }, [location]);

  const renderBtn = () => {
    if (isFavorite) {
      return (
        <TouchableOpacity
          onPress={() => DeleteLocationFromFavorites(location)}
          style={styles.addToFavBtn}>
          <LinearGradient
            colors={['#ffb347', '#ffcc33']}
            style={styles.gradient}>
            <Text style={styles.favBtnTxt}>{'Delete From Favorites'}</Text>
          </LinearGradient>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => addLocatioToFavorites(location)}
        style={styles.addToFavBtn}>
        <LinearGradient colors={['#ffb347', '#ffcc33']} style={styles.gradient}>
          <Text style={styles.favBtnTxt}>{'Add To Favorites'}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const checkIfLocationIsFavorite = () => {
    let Favorites = [];
    if (typeof favoriteLocations == 'string') {
      Favorites = JSON.parse(favoriteLocations);
    }
    if (Favorites.length > 0) {
      let isFav = Favorites.some((fav) => fav.name == location.name);
      isFav ? setIsFavorite(true) : setIsFavorite(false);
    }
  };

  const changeTemperatureUnit = () => {
    return (
      <TouchableOpacity
        onPress={() => setIsCelsius(!isCelsius)}
        style={{
          margin: 5,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
          paddingHorizontal: 10,
          backgroundColor: 'transparent',
        }}>
        <LinearGradient
          colors={['black', 'black']}
          style={{...styles.gradient, width: '120%'}}>
          <Text style={styles.favBtnTxt}>{'Change Units'}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const addLocatioToFavorites = (location) => {
    let newFavorites = [];
    if (typeof favoriteLocations == 'string') {
      newFavorites = JSON.parse(favoriteLocations);
    }
    newFavorites && newFavorites.some((fav) => fav.name === location.name);
    newFavorites.push(location);
    dispatch(updateLocations(JSON.stringify(newFavorites)));
    setIsFavorite(true);
  };

  const DeleteLocationFromFavorites = () => {
    let oldFavorites = [];
    if (typeof favoriteLocations == 'string') {
      oldFavorites = JSON.parse(favoriteLocations);
    }
    let newFavorites = oldFavorites.filter((loc) => loc.name !== location.name);
    dispatch(deleteFromFavorites(JSON.stringify(newFavorites)));
    setIsFavorite(false);
  };

  const renderDailyForecast = () => {
    let foreCasts = DailyForecasts.map((cast) => {
      const {
        Temperature: {Minimum, Maximum},
        Day,
      } = cast;
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            borderRadius: 16.6,
            backgroundColor: 'transparent',
          }}>
          <Text style={{alignSelf: 'center', color: 'white'}}>
            {convertToDay(cast.Date)}
          </Text>
          <Image
            style={styles.imageForecast}
            resizeMode="cover"
            source={images[Day.Icon]}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignSelf: 'center',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                ...styles.TemperatureTxt,
                marginTop: 3,
                fontSize: 12,
                paddingHorizontal: 2,
              }}>
              {units ? convertToCelsius(Maximum.Value) : Maximum.Value}
            </Text>
            {units ? (
              <Text style={{...styles.TemperatureTxt, fontSize: 14}}>
                &#x2103;
              </Text>
            ) : (
              <Text style={{...styles.TemperatureTxt, fontSize: 14}}>
                &#x2109;
              </Text>
            )}
          </View>
        </View>
      );
    });
    return foreCasts;
  };

  const renderLocationCard = () => {
    return (
      <Card containerStyle={styles.container}>
        <ScrollView
          contentContainerStyle={{
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Card.Title
            style={styles.cardTitle}>{`${name.toUpperCase()}`}</Card.Title>
          <Card.Divider />
          <View key={key} style={styles.cardContainer}>
            <View style={{flex: 1}}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={images[WeatherIcon]}
              />
            </View>
            <View style={styles.overview}>
              <Text style={styles.overViewTxt}>{WeatherText}</Text>
              <Text style={styles.overViewTxt}>{Headline.Text}</Text>
              {/* <Text style={styles.overViewTxt}>{`City: ${location.city}`}</Text> */}
              <View
                style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
                {/* {changeTemperatureUnit()} */}
                <Text
                  style={{
                    ...styles.TemperatureTxt,
                    marginTop: 4,
                    paddingHorizontal: 5,
                  }}>
                  {units ? Metric.Value + '' : Imperial.Value + ''}
                </Text>
                {units ? (
                  <Text style={{...styles.TemperatureTxt, fontSize: 26}}>
                    &#x2103;
                  </Text>
                ) : (
                  <Text style={{...styles.TemperatureTxt, fontSize: 26}}>
                    &#x2109;
                  </Text>
                )}
              </View>
              <Text
                style={{
                  ...styles.TemperatureTxt,
                  fontSize: 16,
                  marginTop: 15,
                  fontFamily: 'Roboto-LightItalic',
                }}>
                {'The Next 5 Days'}
              </Text>
              <View
                style={{
                  marginTop: 10,
                  borderBottomColor: 'white',
                  borderWidth: 1,
                }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
            }}>
            {renderDailyForecast()}
          </View>
          {renderBtn()}
        </ScrollView>
      </Card>
    );
  };

  return renderLocationCard();
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.63,
    shadowRadius: 2.62,
    elevation: 0,
    borderColor: 'transparent',
  },
  cardTitle: {
    fontSize: 20,
    width,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
  subSection: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
    height: 140,
    width: 250,
  },
  imageForecast: {
    flex: 1,
    alignSelf: 'center',
    height: 40,
    width: 40,
  },
  overview: {
    flex: 1,
    flexDirection: 'column',
  },
  overViewTxt: {
    fontSize: 18,
    padding: 5,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 1,
    color: 'white',
    textAlign: 'center',
  },
  TemperatureTxt: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 1,
    color: 'white',
    textAlign: 'center',
  },
  leftSideView: {
    flex: 1,
    flexDirection: 'column',
  },
  rightSideView: {
    flex: 1,
    flexDirection: 'column',
  },
  leftSideTxt: {
    fontSize: 14,
    marginHorizontal: 5,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: 'black',
    textAlign: 'auto',
  },
  gradient: {
    flex: 1,

    width,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  addToFavBtn: {
    margin: 5,
    height: 30,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  gotItBtn: {
    margin: 5,
    height: 30,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  favBtnTxt: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerModalView: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 40,
  },
  outerModalView: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 140,
    borderRadius: 16,
  },
});

export default WeatherDetails;
