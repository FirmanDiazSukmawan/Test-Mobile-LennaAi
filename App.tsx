import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {enableScreens} from 'react-native-screens';
import MainRouter from './src/route/MainRouter';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

enableScreens();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaView edges={['top']} style={styles.topSafeArea} />
          <SafeAreaView edges={['bottom']} style={styles.content}>
            <MainRouter />
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  topSafeArea: {
    backgroundColor: '#3A6CBE',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
