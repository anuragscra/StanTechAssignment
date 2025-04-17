import 'react-native-get-random-values';
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import InitialScreen from './screens';
import {Provider, useDispatch} from 'react-redux';
import {store} from './config/Store';
import {loadTask} from './config/Store/TaskSlice';

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTask());
  }, []);
  return (
    <NavigationContainer>
      <InitialScreen />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
