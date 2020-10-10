import React, {useState, useEffect, useCallback} from 'react';

import {View, StyleSheet, Switch} from 'react-native';
import {Toolbar} from 'react-native-material-ui';
import {Icon} from 'native-base';
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

const changeTheme = () => {
  const theme = useTheme();
  return (
    <Switch
      value={theme.mode === 'dark'}
      onValueChange={(value) => theme.setMode(value ? 'dark' : 'light')}
    />
  );
};

export default renderHeader = (props) => {
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
