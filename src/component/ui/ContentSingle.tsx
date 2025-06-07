import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {chatArray} from '../../type/type';

const ContentSingle = ({chat}: {chat: chatArray[]}) => {
  console.log(chat);
  return (
    <View style={styles.sectionWrap}>
      {chat?.map((item, index) => (
        <View key={index} style={styles.sectionMessage}>
          <View style={styles.pictureSingle}>
            <Image
              source={item?.image}
              alt="image"
              resizeMode="cover"
              style={styles.images}
            />
          </View>
          <View key={index} style={styles.sectionSingle}>
            <Text style={styles.messageText}>{item?.text}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ContentSingle;

const styles = StyleSheet.create({
  sectionWrap: {width: 237},
  sectionSingle: {
    paddingRight: '5%',
    backgroundColor: '#B4B4B4',
    borderBottomLeftRadius: 0,
    padding: 10,
    borderRadius: 12,
    flexDirection: 'column',
  },
  sectionMessage: {gap: 10, flexDirection: 'column'},
  messageText: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'inter',
    fontWeight: '400',
  },
  pictureSingle: {
    backgroundColor: 'gray',
    height: 119,
    borderRadius: 12,
    width: '100%',
  },
  images: {
    width: null,
    height: null,
    flex: 1,
    borderRadius: 12,
  },
});
