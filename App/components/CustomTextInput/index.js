import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';

const CustomTextInput = ({
  title,
  inputFields,
  setInputFields,
  fieldName,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={{
        backgroundColor: isFocused ? '#fffffd' : '#F0F3F4',
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: isFocused ? '#007cf8' : '#F0F3F4',
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={inputFields[fieldName]}
            placeholderTextColor={'#8f96a3'}
            placeholder={title}
            onChangeText={e => {
              let allValue = {...inputFields};
              allValue[fieldName] = e;
              setInputFields(allValue);
            }}
            style={{
              minHeight: 50,
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              fontWeight: '500',
              color: '#172B4D',
              width: '100%',
              textAlignVertical: 'top',
            }}
            {...props}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomTextInput;
