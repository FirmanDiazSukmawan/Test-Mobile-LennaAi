import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {chatArray} from '../../type/type';

const ContentMulti = ({chat}: {chat: chatArray[]}) => {
  return (
    <View style={styles.wrapperChat}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerSection}>
        {chat?.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.sectionMulti}>
              <Image
                source={item?.image}
                alt="image"
                resizeMode="cover"
                style={styles.images}
              />
            </View>
            <Text
              style={styles.messageTitle}
              numberOfLines={2}
              ellipsizeMode="tail">
              {item.title}
            </Text>
            <Text
              style={styles.messageText}
              numberOfLines={3}
              ellipsizeMode="tail">
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContentMulti;

const styles = StyleSheet.create({
  wrapperChat: {width: '100%'},
  containerSection: {gap: 14, alignItems: 'flex-start', paddingBottom: 10},
  card: {
    width: 135,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    gap: 5,
  },
  sectionMulti: {
    backgroundColor: 'gray',
    height: 87,
    borderTopStartRadius: 12,
    borderTopRightRadius: 12,
  },
  messageTitle: {
    fontSize: 14,
    color: 'black',
    fontWeight: '600',
    textAlign: 'left',
    height: 40,
    paddingHorizontal: 11,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  messageText: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'inter',
    fontWeight: '400',
    textAlign: 'left',
    height: 45,
    paddingHorizontal: 11,
  },
  images: {
    width: null,
    height: null,
    flex: 1,
    borderRadius: 12,
  },
});
