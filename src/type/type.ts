import {ImageSourcePropType} from 'react-native';

export interface chatArray {
  title?: string;
  text: string;
  image: ImageSourcePropType | undefined;
}
export interface ChatItem {
  sender: string;
  recipient: string;
  chat: chatArray[];
  type: 'single' | 'multi';
  loading?: boolean;
  latestIndex?: boolean;
}

export type dataChat = {
  data: ChatItem[];
};
