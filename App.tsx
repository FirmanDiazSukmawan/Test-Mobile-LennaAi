import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {enableScreens} from 'react-native-screens';
import MainRouter from './src/route/MainRouter';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

enableScreens();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView edges={['top']} style={styles.topSafeArea} />
        <SafeAreaView edges={['bottom']} style={styles.content}>
          <MainRouter />
        </SafeAreaView>
      </NavigationContainer>
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
