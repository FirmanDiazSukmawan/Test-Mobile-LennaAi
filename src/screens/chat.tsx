import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Message from '../component/ui/Message';
import Input from '../component/form/input';
import {useDispatch, useSelector} from 'react-redux';
import {
  addChat,
  clearChat,
  selectChat,
  selectLoading,
  setLoading,
} from '../redux/reducer/chat';
import {getFAQAnswer} from '../component/function/filterReplyAi';
import HeaderFlatListFaq from '../component/header/HeaderFlatListFaq';
import {Text} from 'react-native-gesture-handler';

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

const ItemSeparator = () => <View style={styles.gapFlatList} />;

const Chat = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const dataChat = useSelector(selectChat);
  const loading = useSelector(selectLoading);
  const [keyboardOffset, setKeyboardOffset] = useState(
    Platform.OS === 'ios' ? 90 : 0,
  );

  const handleSubmitWithText = async (submitText?: string) => {
    const messageText = submitText || text;

    if (!messageText.trim()) {
      return;
    }

    await dispatch(setLoading(true));

    await dispatch(
      addChat({
        sender: 'user',
        recipient: 'bot',
        chat: [
          {
            image: '',
            text: messageText,
          },
        ],
        type: 'single',
      }),
    );

    const answer = await getFAQAnswer(messageText);
    await dispatch(addChat(answer));
    setText('');
    Keyboard.dismiss();

    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  };

  const handleFAQPress = (faqText: string) => {
    setText(faqText);
    handleSubmitWithText(faqText);
  };

  const handleSubmit = async () => {
    handleSubmitWithText();
  };

  useEffect(() => {
    const onKeyboardShow = (e: any) => {
      const height = e?.endCoordinates?.height ?? 0;

      console.log('Keyboard height:', e?.endCoordinates?.height);

      if (Platform.OS === 'android') {
        setKeyboardOffset(height - 175);
      } else {
        setKeyboardOffset(90);
      }
    };

    const onKeyboardHide = () => {
      setKeyboardOffset(0);
    };

    const showSub = Keyboard.addListener('keyboardDidShow', onKeyboardShow);
    const hideSub = Keyboard.addListener('keyboardDidHide', onKeyboardHide);

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={keyboardOffset}
      style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={dataChat}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <Message
              recipient={item?.recipient}
              sender={item?.sender}
              chat={item?.chat}
              type={item?.type}
              loading={loading && index === dataChat?.length - 1}
              latestIndex={index === dataChat?.length - 1}
            />
          )}
          ItemSeparatorComponent={ItemSeparator}
          contentContainerStyle={styles.containerFlatList}
          ListHeaderComponent={
            <HeaderFlatListFaq
              dummyFAQ={dummyFAQ}
              onFAQPress={handleFAQPress}
            />
          }
        />

        <View style={styles.inputWrapper}>
          <TouchableOpacity onPress={() => dispatch(clearChat())}>
            <Text style={styles.resetText}>Reset Chat</Text>
          </TouchableOpacity>
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
    backgroundColor: '#f6f6f6',
    paddingLeft: '5%',
  },

  containerFlatList: {
    paddingVertical: 20,
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
    top: 10,
  },
  gapFlatList: {height: 15},
  resetText: {
    color: '#3A6CBE',
    fontWeight: '600',
    textAlign: 'right',
    marginBottom: 5,
    marginRight: 5,
  },
});
