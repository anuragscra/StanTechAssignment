import {View, Text, Image} from 'react-native';
import React from 'react';
import noTaskImg from '../../assets/noCourse.png';
import TextComp from '../../components/TextComp';
const NoTaskCard = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={noTaskImg}
        style={{width: 130, height: 100, borderRadius: 13}}
      />
      <TextComp
        text={'No task available !'}
        customStyle={{fontSize: 18, color: 'red'}}
      />
    </View>
  );
};

export default NoTaskCard;
