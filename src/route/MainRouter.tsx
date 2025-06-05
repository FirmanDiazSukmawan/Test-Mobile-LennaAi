import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Chat from '../screens/chat';
import HeaderDefault from '../component/header/HeaderDefault';

const Stack = createStackNavigator();

const MainRouter = () => {
  const renderHeaderChat = () => <HeaderDefault />;

  return (
    <Stack.Navigator initialRouteName="chat">
      <Stack.Screen
        name="chat"
        component={Chat}
        options={{
          header: renderHeaderChat,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainRouter;
