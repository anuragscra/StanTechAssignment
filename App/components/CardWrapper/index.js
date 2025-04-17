import {View, Text} from 'react-native';
import React from 'react';

const CardWrapper = ({children, customStyle, handlePress}) => {
  return (
    <View
      style={{
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 4,
        backgroundColor: '#FFFFFF',
        ...customStyle,
      }}>
      {children}
    </View>
  );
};

export default CardWrapper;
