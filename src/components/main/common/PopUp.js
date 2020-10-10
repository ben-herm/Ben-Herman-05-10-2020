import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Modal from 'react-native-modal';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export const OpenPopUp = ({ isVisible, errorMsg = 'Error', onPress}) => {
  return (
    <View style={styles.modalContainer}>
      <Modal
        useNativeDriver={true}
        transparent
        isVisible={isVisible}
        // hasBackdrop={true}
        animationInTiming={750}>
        <View style={styles.outerModalView}>
          <View style={styles.innerModalView}>
            {
              <Text style={{textAlign: 'center', fontSize: 20}}>
                {errorMsg}
              </Text>
            }
          </View>
          <View style={{position: 'absolute', bottom: 25}}>
            <TouchableOpacity
              onPress={() => onPress(false,'')}
              style={styles.gotItBtn}>
              <LinearGradient
                colors={['#ffb347', '#ffcc33']}
                style={styles.gradient}>
                <Text style={styles.favBtnTxt}>{'Got it!'}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    position:'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'black',
    borderRadius: 16,
    borderWidth: 1,
  },
  favBtnTxt: {
    fontSize: 12,
    color: 'white',
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
