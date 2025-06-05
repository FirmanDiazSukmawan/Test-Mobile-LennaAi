import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BubbleProfileAi = () => {
  return (
    <View style={styles.section}>
      <View style={styles.bubble} />
      <Text style={styles.textNickname}>Lenna Virtual Assistant</Text>
    </View>
  );
};

export default BubbleProfileAi;

const styles = StyleSheet.create({
  section: {flexDirection: 'row', gap: 5, alignItems: 'center'},
  bubble: {
    width: 30,
    height: 30,
    backgroundColor: '#B4B4B4',
    borderRadius: 30,
  },
  textNickname: {
    color: 'black',
    fontFamily: 'inter',
    fontSize: 10,
    fontWeight: '400',
  },
});
