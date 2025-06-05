import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BubbleProfileAi from './BubbleProfileAi';
import {TypeMessage} from '../../type/type';

type dataMessage = {
  data: TypeMessage;
};

const Message = ({data}: dataMessage) => {
  console.log(data);
  return (
    <View style={[styles.messageContainer]}>
      {data?.from === 'ai' ? (
        <View style={styles.sectionMessageAi}>
          <BubbleProfileAi />
          <View style={styles.aiMessage}>
            <Text style={styles.messageText}>{data.text}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.userMessage}>
          <Text style={styles.messageText}>{data.text}</Text>
        </View>
      )}
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: '100%',
  },
  sectionMessageAi: {
    gap: 5,
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#B4B4B4',
    borderTopLeftRadius: 0,
    padding: 10,
    borderRadius: 12,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#B4B4B4',
    borderTopRightRadius: 0,
    padding: 10,
    borderRadius: 12,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'inter',
    fontWeight: '400',
  },
});
