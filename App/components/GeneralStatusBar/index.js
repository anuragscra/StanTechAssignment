import {View, Platform, StatusBar} from 'react-native';
import React from 'react';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 50 : 40;
const GeneralStatusBar = ({
  backgroundColor = '#eef3ff',
  barStyle = 'dark-content',
  ...props
}) => {
  return (
    <View style={{height: STATUSBAR_HEIGHT, backgroundColor}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={barStyle}
        {...props}
      />
    </View>
  );
};

export default GeneralStatusBar;
