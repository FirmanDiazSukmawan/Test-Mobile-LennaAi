export interface chatArray {
  title?: string;
  text: string;
  image: string;
}
export interface ChatItem {
  sender: string;
  recipient: string;
  chat: chatArray[];
  type: 'single' | 'multi';
}

export type dataChat = {
  data: ChatItem[];
};
