import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import TextComp from '../TextComp';

const CustomButton = ({title, customStyle, textStyle, onPress, loading}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 100,
        backgroundColor: '#0C66E4',
        ...customStyle,
      }}>
      <TextComp
        text={title}
        customStyle={{color: '#FFFFFF', fontWeight: '500', ...textStyle}}
      />
    </TouchableOpacity>
  );
};

export default CustomButton;
