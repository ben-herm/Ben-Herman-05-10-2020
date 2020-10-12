import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View,Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Toolbar} from 'react-native-material-ui';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {changeTempUnits} from '../../../actions/LocationsActions'

const width = Dimensions.get('window').width;
const handleee = (props) => {
  return (
    <View>
      <Icon
        style={{color: 'white', padding: 10}}
        name="menu"
        onPress={() => props.navigation.openDrawer()}
      />
    </View>
  );
};

const changeUnitsBtn = (units) => {
  const dispatch = useDispatch()
  return (
    <TouchableOpacity
      onPress={() => dispatch(changeTempUnits(!units))}
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

export default renderHeader = (props) => {

  const {units} = useSelector(
    (state) => state.LocationsReducer,
  );
  const {title} = props;
  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Toolbar
        leftElement={handleee(props)}
        leftElementContainer={{marginLeft: 220}}
        style={{rightElement: {flex: 1}}}
        centerElement={title}
        rightElement={changeUnitsBtn(units)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    width,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  favBtnTxt: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
});
