import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {enableScreens} from 'react-native-screens';
import MainRouter from './src/route/MainRouter';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import BootSplash from 'react-native-bootsplash';

enableScreens();

function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(async () => {
      await BootSplash.hide();
    }, 1000);
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <SafeAreaView edges={['top']} style={styles.topSafeArea} />
            <SafeAreaView edges={['bottom']} style={styles.content}>
              <MainRouter />
            </SafeAreaView>
          </NavigationContainer>
        </PersistGate>
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
