import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {chatArray} from '../../type/type';

const ContentSingle = ({chat}: {chat: chatArray[]}) => {
  return (
    <View style={styles.sectionWrap}>
      {chat?.map((item, index) => (
        <View key={index} style={styles.sectionSingle}>
          <Text style={styles.messageText}>{item?.text}</Text>
        </View>
      ))}
    </View>
  );
};

export default ContentSingle;

const styles = StyleSheet.create({
  sectionWrap: {width: '80%'},
  sectionSingle: {
    paddingRight: '5%',
    backgroundColor: '#B4B4B4',
    borderTopLeftRadius: 0,
    padding: 10,
    borderRadius: 12,
  },
  messageText: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'inter',
    fontWeight: '400',
  },
});
