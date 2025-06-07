import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BubbleProfileAi from '../ui/BubbleProfileAi';

interface FaqItem {
  id: number;
  title: string;
}

interface Props {
  dummyFAQ: FaqItem[];

  onFAQPress: (text: string) => void;
}

const HeaderFlatListFaq = ({dummyFAQ, onFAQPress}: Props) => {
  return (
    <View style={styles.sectionFirstShowAiMessage}>
      <BubbleProfileAi />
      <View style={styles.aiMessage}>
        <Text style={styles.messageTextTittle}>Ask what you want to Know</Text>
        <View style={styles.sectionBox}>
          {dummyFAQ?.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onFAQPress(item.title)}>
              <Text style={styles.messageText}>{item?.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default HeaderFlatListFaq;

const styles = StyleSheet.create({
  sectionFirstShowAiMessage: {
    gap: 5,
    marginBottom: 10,
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
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
