import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {ChatItem} from '../../type/type';

interface ChatState {
  chat: ChatItem[];
  activeChat: ChatItem | null;
  loading: boolean;
}

const initialState: ChatState = {
  chat: [],
  activeChat: null,
  loading: false,
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
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const {addChat, setActiveChat, clearChat, setLoading} =
  chatSlice.actions;
export const selectChat = (state: RootState) => state.chat.chat;
export const selectLoading = (state: RootState) => state.chat.loading;

export default chatSlice.reducer;
