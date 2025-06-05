import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BubbleProfileAi from '../component/ui/BubbleProfileAi';
import Message from '../component/ui/Message';
import {TypeMessage} from '../type/type';

const messages: TypeMessage[] = [
  {from: 'user', text: 'Apa itu Lenna.ai?'},
  {
    from: 'ai',
    text: 'Lenna.ai adalah perusahaan teknologi AI asal Indonesia yang menyediakan platform chatbot dan asisten virtual untuk membantu bisnis meningkatkan layanan pelanggan secara otomatis dan efisien.',
  },
  {from: 'user', text: 'Apa saja Product Lenna Ai'},
  {
    from: 'ai',
    text: 'Triple box or gambar',
  },
];

const Chat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionFirstShowAiMessage}>
        <BubbleProfileAi />
        <View style={styles.aiMessage}>
          <Text style={styles.messageText}>Ask what you want to Know </Text>
          <View style={styles.sectionBox}>
            <Text style={styles.messageText}> halo</Text>
          </View>
        </View>
      </View>
      {messages.map((msg, index) => (
        <Message key={index} data={msg} />
      ))}
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    paddingTop: 10,
    flex: 1,
    gap: 15,
  },
  sectionFirstShowAiMessage: {
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
  messageText: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'inter',
    fontWeight: '400',
  },
  sectionBox: {backgroundColor: 'white'},
});
