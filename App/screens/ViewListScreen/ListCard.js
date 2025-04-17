import {View, Text} from 'react-native';
import React from 'react';
import CardWrapper from '../../components/CardWrapper';
import TextComp from '../../components/TextComp';
import CustomButton from '../../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {removeTask} from '../../config/Store/TaskSlice';

const ListCard = ({item, navigation}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeTask(item.id));
  };
  const handleEdit = () => {
    navigation.navigate('TaskFormScreen', {item});
  };
  return (
    <CardWrapper customStyle={{height: 150, borderRadius: 5}}>
      <View style={{padding: 10, flex: 1}}>
        <TextComp
          text={item.title}
          customStyle={{fontWeight: '700', fontsize: 18}}
        />
        <TextComp text={item.description} customStyle={{marginTop: 10}} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
            width: '100%',
            bottom: 10,
            right: 10,
          }}>
          <CustomButton
            title={'Edit task'}
            textStyle={{fontWeight: '400', fontSize: 12}}
            onPress={handleEdit}
            customStyle={{
              width: '33%',
              height: 25,
              backgroundColor: '#0055CC90',
            }}
          />
          <CustomButton
            title={'Delete task'}
            textStyle={{fontWeight: '400', fontSize: 12}}
            onPress={handleDelete}
            customStyle={{
              width: '33%',
              height: 25,
              backgroundColor: '#db2228',
            }}
          />
        </View>
      </View>
    </CardWrapper>
  );
};

export default ListCard;
