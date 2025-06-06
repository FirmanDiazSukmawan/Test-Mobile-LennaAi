import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import BubbleProfileAi from '../component/ui/BubbleProfileAi';
import Message from '../component/ui/Message';
import Input from '../component/form/input';
import {useDispatch, useSelector} from 'react-redux';
import {addChat, clearChat, selectChat} from '../redux/reducer/chat';
import {getFAQAnswer} from '../component/function/filterReplyAi';

const dummyFAQ = [
  {
    id: 1,
    title: 'Apa itu Lena.Ai',
  },
  {
    id: 2,
    title: 'Apa saja product Lenna.ai',
  },
  {
    id: 3,
    title: 'Client Lena.ai',
  },
  {
    id: 4,
    title: 'Apa itu Lena.Ai',
  },
];

const Chat = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const dataChat = useSelector(selectChat);

  const handleSubmit = async () => {
    if (!text.trim()) return;

    await dispatch(
      addChat({
        sender: 'user',
        recipient: 'bot',
        chat: [
          {
            image: '',
            text: text,
          },
        ],
        type: 'single',
      }),
    );

    const answer = await getFAQAnswer(text);
    await dispatch(addChat(answer));
    setText('');
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={50}
      style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={dataChat}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <Message
              recipient={item?.recipient}
              sender={item?.sender}
              chat={item?.chat}
              type={item?.type}
            />
          )}
          // keyboardDismissMode="interactive"
          // automaticallyAdjustContentInsets={false}
          // contentInsetAdjustmentBehavior="never"
          // automaticallyAdjustKeyboardInsets={true}
          ItemSeparatorComponent={() => <View style={{height: 15}} />}
          contentContainerStyle={styles.containerFlatList}
          // keyboardShouldPersistTaps="handled"
          ListHeaderComponent={
            <View style={styles.sectionFirstShowAiMessage}>
              <BubbleProfileAi />
              <View style={styles.aiMessage}>
                <Text style={styles.messageTextTittle}>
                  Ask what you want to Know
                </Text>
                <View style={styles.sectionBox}>
                  {dummyFAQ?.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => dispatch(clearChat())}>
                      <Text style={styles.messageText}>{item?.title}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          }
        />

        <View style={styles.inputWrapper}>
          <Input
            name="search"
            type="text"
            placeholder={'Tanya apa saja ...'}
            placeholderTextColor="black"
            value={text}
            onChange={(val: string) => setText(val)}
            style={styles.input}
            error_messages={[]}
            addOn={{
              iconName: 'search',
              iconSize: 20,
              iconColor: 'blue',
              style: styles.iconInput,
              onClick: () => handleSubmit(),
            }}
            onSubmitEditing={() => handleSubmit()}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: '5%',
  },
  sectionFirstShowAiMessage: {
    gap: 5,
    marginBottom: 10,
  },
  containerFlatList: {
    paddingVertical: 20,
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#B4B4B4',
    borderRadius: 12,
    maxWidth: '80%',
    marginBottom: 15,
  },
  messageText: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'inter',
    fontWeight: '400',
    borderBottomWidth: 1,
    paddingVertical: 9,
  },
  messageTextTittle: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'inter',
    fontWeight: '400',
    padding: 10,
  },
  sectionBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  inputWrapper: {
    paddingVertical: 10,
    paddingRight: '5%',
  },
  input: {
    backgroundColor: '#D6D6D6',
    height: 54,
    borderRadius: 12,
    color: 'black',
    paddingHorizontal: 15,
  },
  iconInput: {
    position: 'absolute',
    right: 15,
    top: '30%',
  },
});
