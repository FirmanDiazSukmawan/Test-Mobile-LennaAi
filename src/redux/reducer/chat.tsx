import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {ChatItem} from '../../type/type';

interface ChatState {
  chat: ChatItem[];
  activeChat: ChatItem | null;
}

const initialState: ChatState = {
  chat: [],
  activeChat: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChat: (state, action) => {
      state.chat.push(action.payload);
    },
    setActiveChat: (state, action) => {
      state.activeChat = action.payload;
    },
    clearChat: state => {
      state.chat = [];
      state.activeChat = null;
    },
  },
});

export const {addChat, setActiveChat, clearChat} = chatSlice.actions;
export const selectChat = (state: RootState) => state.chat.chat;
export default chatSlice.reducer;
