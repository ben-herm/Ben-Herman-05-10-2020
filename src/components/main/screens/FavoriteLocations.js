import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
  SafeAreaView,
} from 'react-native';
import WeatherDetails from '../../main/screens/WeatherDetails';
import {navigateToPage} from '../../../utils/utilities';
import LinearGradient from 'react-native-linear-gradient';
import {CustomLoader} from '../common/CustomLoader';
import images from '../../../resources/Images';
const {width} = Dimensions.get('window');
const FavoriteLocations = (props) => {
  const {favoriteLocations, locations} = useSelector(
    (state) => state.LocationsReducer,
  );
  const [favoritesDetails, setFavoritesDetails] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  useEffect(() => {
    setFavorites();
  }, [favoriteLocations]);

  useEffect(() => {
    if (!favoritesDetails) {
      setIsLoader(true);
    } else {
      setIsLoader(false);
    }
  }, [favoritesDetails]);

  const setFavorites = async () => {
    let oldFavorites = [];
    if (typeof favoriteLocations == 'string') {
      oldFavorites = JSON.parse(favoriteLocations);
    }
    setFavoritesDetails(oldFavorites);
    setIsLoader(false);
  };

  const renderFlatListItem = (data) => {
    const {
      item: {
        WeatherIcon,
        name,
        key,
        WeatherText,
        Temperature: {Metric, Imperial},
      },
    } = data;
    return (
      <TouchableOpacity onPress={() => navigateToPage('SearchPage', props.navigation, {
        location: data.item
      })}>
        <View style={styles.imageCard}>
          <View style={{flex: 1, alignSelf: 'flex-start', padding: 10}}>
            <Text style={styles.TxtStyle}>{name.toUpperCase()}</Text>
          </View>
          <View style={{flex: 1, alignSelf: 'flex-start', padding: 10}}>
            <Text style={styles.TxtStyle}>{key}</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              padding: 10,
              flexDirection: 'row',
            }}>
            <Text style={{...styles.TxtStyle}}>{`${Metric.Value}`}&#x2103;{`\n/${Imperial.Value}`}&#x2109;</Text>
          </View>
     
          <View style={{flex: 1}}>
            <Image
              style={styles.imageForecast}
              resizeMode="cover"
              source={images[WeatherIcon]}
            />
          </View>

          {/* <WeatherDetails location={data.item} /> */}
        </View>
      </TouchableOpacity>
    );
  };

  // render flat list

  const renderFlatList = () => {
    return (
      <FlatList
        bounces={false}
        data={favoritesDetails || []}
        showsVerticalScrollIndicator={true}
        renderItem={(item) => renderFlatListItem(item)}
        keyExtractor={(item) => item.id}
        numColumns={1}
        extraData={null}
        style={styles.listStyle}
      />
    );
  };

  // render no favorites msg

  const renderNoFavoritesMsg = () => {
    return (
      <View style={styles.noFavoritesMsg}>
        <Text style={styles.noFavortiesTxt}>
          {'Please Add A Favorite Location From The Search Screen'}
        </Text>
      </View>
    );
  };

  const renderView = () => {
    if (!isLoader && favoritesDetails) {
      {
        return favoritesDetails.length > 0 ? (
          <View
            style={{
              alignSelf: 'center',
              alignItems: 'space-between',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            {renderFlatList()}
          </View>
        ) : (
          renderNoFavoritesMsg()
        );
      }
    }
    return (
      <View
        style={{
          flex: 1,
          width,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 0,
        }}>
        <CustomLoader color={'white'} size={75} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#009FFD', '#2A2A72']}
        style={{
          flex: 1,
          width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {renderView()}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black',
    alignItems: 'center',

  },
  loader: {
    position: 'absolute',
    top: '40%',
    bottom: 0,
    left: 0,
    right: 0,
  },
  imageCard: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    padding:5,
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 2,
    },

    shadowOpacity: 0.63,
    shadowRadius: 2.62,
    elevation: 10,
    backgroundColor: 'transparent',
    opacity:0.9,
    width: width - 10,
    borderRadius: 16.6,
    borderWidth: 2,
    borderColor: 'white',
  },
  noFavoritesMsg: {
    flex: 1,
    justifyContent: 'center',
  },
  imageForecast: {
    flex: 1,
    alignSelf: 'center',
    height: 40,
    width: 40,
  },
  noFavortiesTxt: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  TxtStyle: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 1,
    color: 'white',
  },
  image: {
    flex: 1,
    width: 'auto',
    height: 140,
  },
});

export default FavoriteLocations;
