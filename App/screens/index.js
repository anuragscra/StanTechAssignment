import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ViewListScreen from './ViewListScreen';
import TaskFormScreen from './TaskFormScreen';

const Stack = createNativeStackNavigator();

const InitialScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ViewListScreen" component={ViewListScreen} />
      <Stack.Screen name="TaskFormScreen" component={TaskFormScreen} />
    </Stack.Navigator>
  );
};

export default InitialScreen;
