import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import image from '../../assets/lenna-logo-white.png';

const HeaderDefault = () => {
  return (
    <View style={styles.section}>
      <View style={styles.leftLogo}>
        <Image source={image} style={styles.logo} />
      </View>
      <Text style={styles.textHeader}>Lenna BOT FAQ</Text>
    </View>
  );
};

export default HeaderDefault;

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#3A6CBE',
    paddingBottom: 27.5,
    paddingTop: 27.5,
    paddingHorizontal: '5%',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
  },
  leftLogo: {
    alignSelf: 'flex-start',
    left: '5%',
    position: 'absolute',
    top: 27.5,
  },
  logo: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  textHeader: {
    fontWeight: '400',
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'inter',
  },
});
