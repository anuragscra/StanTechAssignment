import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import GeneralStatusBar from '../../components/GeneralStatusBar';
import TextComp from '../../components/TextComp';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {useDispatch} from 'react-redux';
import {addTask, editTask} from '../../config/Store/TaskSlice';

const TaskFormScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const item = route.params?.item;
  const [inputFields, setInputFields] = useState({
    title: item?.title || '',
    description: item?.description || '',
  });
  const handleTask = () => {
    if (inputFields.title.trim() === '') {
      Alert.alert('Alert !', 'Please enter title ');
    } else if (inputFields.description.trim() === '') {
      Alert.alert('Alert !', 'Please enter description ');
    } else {
      if (item) {
        dispatch(
          editTask({
            id: item.id,
            title: inputFields.title,
            description: inputFields.description,
          }),
        );
      } else {
        dispatch(
          addTask({
            title: inputFields.title,
            description: inputFields.description,
          }),
        );
      }

      navigation.goBack();
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <GeneralStatusBar />
      <View style={{margin: 20, gap: 20}}>
        <TextComp
          text={'Create your new task !'}
          customStyle={{fontWeight: '500', fontSize: 20}}
        />
        <CustomTextInput
          title={'Title'}
          inputFields={inputFields}
          setInputFields={setInputFields}
          fieldName={'title'}
          maxLength={38}
        />
        <CustomTextInput
          title={'Description'}
          inputFields={inputFields}
          setInputFields={setInputFields}
          fieldName={'description'}
          multiline={true}
          maxLength={100}
        />
        <CustomButton
          onPress={handleTask}
          title={item ? 'Update task' : 'Add task'}
          customStyle={{width: '60%', alignSelf: 'center'}}
        />
      </View>
    </View>
  );
};

export default TaskFormScreen;
