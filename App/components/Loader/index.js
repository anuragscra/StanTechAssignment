import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

const Loader = ({size = 'small', color = 'red'}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loader;
