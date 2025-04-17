import {View, Text} from 'react-native';
import React from 'react';

// Generic component for Text so that if any changes like font family it will change everywhere in the app
const TextComp = ({text, customStyle, ...props}) => {
  return (
    <Text
      style={{
        fontSize: 15,
        color: '#172B4D',
        ...customStyle,
      }}
      {...props}>
      {text}
    </Text>
  );
};

export default TextComp;
