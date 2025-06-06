import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BubbleProfileAi from './BubbleProfileAi';
import {ChatItem} from '../../type/type';
import ContentSingle from './ContentSingle';
import ContentMulti from './ContentMulti';

const Message = ({sender, chat, type}: ChatItem) => {
  return (
    <View style={[styles.messageContainer]}>
      {sender === 'bot' ? (
        <View style={styles.sectionMessageAi}>
          <BubbleProfileAi />
          <View style={styles.aiMessage}>
            {type === 'single' ? (
              <ContentSingle chat={chat} />
            ) : (
              <ContentMulti chat={chat} />
            )}
          </View>
        </View>
      ) : (
        <View style={styles.sectionUser}>
          <View style={styles.userMessage}>
            {chat?.map((item, index) => (
              <Text key={index} style={styles.messageText}>
                {item?.text}
              </Text>
            ))}
          </View>
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
    maxWidth: '100%',
  },
  sectionUser: {paddingRight: '5%'},
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#B4B4B4',
    borderTopRightRadius: 0,
    padding: 10,
    borderRadius: 12,
    maxWidth: '80%',
    // marginTop: 15,
  },
  messageText: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'inter',
    fontWeight: '400',
  },
});
