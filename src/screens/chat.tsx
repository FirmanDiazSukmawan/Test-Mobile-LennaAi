import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BubbleProfileAi from '../component/ui/BubbleProfileAi';
import Message from '../component/ui/Message';
import {TypeMessage} from '../type/type';
import Input from '../component/form/input';

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
  {from: 'user', text: 'Apa saja Product Lenna Ai'},
  {
    from: 'ai',
    text: 'Triple box or gambar',
  },
  {from: 'user', text: 'Apa saja Product Lenna Ai'},
  {
    from: 'ai',
    text: 'Triple box or gambar',
  },
  {from: 'user', text: 'Apa saja Product Lenna Ai'},
  {
    from: 'ai',
    text: 'Triple box or gambar',
  },
];

const Chat = () => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    console.log('halo');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
      <View style={{flex: 1}}>
        <FlatList
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Message data={item} />}
          contentContainerStyle={{gap: 15, paddingBottom: 50}}
          ListHeaderComponent={
            <View style={styles.sectionFirstShowAiMessage}>
              <BubbleProfileAi />
              <View style={styles.aiMessage}>
                <Text style={styles.messageText}>
                  Ask what you want to Know
                </Text>
                <View style={styles.sectionBox}>
                  <Text style={styles.messageText}>halo</Text>
                </View>
              </View>
            </View>
          }
        />
      </View>
      <View style={styles.inputWrapper}>
        <Input
          name="search"
          type="text"
          placeholder={'Search Product ...'}
          placeholderTextColor="black"
          value={search}
          onChange={(text: any) => setSearch(text)}
          style={styles.input}
          sectionStyle={styles.sectionSearch}
          error_messages={[]}
          addOn={{
            iconName: 'search',
            iconSize: 20,
            iconColor: 'blue',
            style: styles.iconInput,
            onClick: () => handleSearch(),
          }}
          onSubmitEditing={() => handleSearch()}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    paddingTop: 10,
    flex: 1,
    gap: 15,
    position: 'relative',
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
  inputWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignSelf: 'center',
  },
  sectionSearch: {
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    position: 'relative',
    color: 'black',
  },
  iconInput: {
    position: 'absolute',
    right: 15,
    top: '26%',
  },
});
