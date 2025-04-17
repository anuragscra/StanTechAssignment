import {View, Text, FlatList} from 'react-native';
import React from 'react';
import GeneralStatusBar from '../../components/GeneralStatusBar';
import TextComp from '../../components/TextComp';
import CustomButton from '../../components/CustomButton';
import NoTaskCard from './NoTaskCard';
import ListCard from './ListCard';
import {useSelector} from 'react-redux';
import Loader from '../../components/Loader';

const ViewListScreen = ({navigation}) => {
  const {data, loading} = useSelector(state => state.tasks);

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <GeneralStatusBar />
      <View style={{margin: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextComp
            text={'List of your tasks'}
            customStyle={{fontWeight: '500', fontSize: 20}}
          />
          <CustomButton
            onPress={() => navigation.navigate('TaskFormScreen')}
            title={'+ Add task'}
            customStyle={{width: 90, height: 35}}
            textStyle={{color: '#FFFFFF', fontSize: 14}}
          />
        </View>
      </View>
      {loading ? (
        <Loader size="large" />
      ) : (
        <>
          {data?.length > 0 ? (
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                gap: 20,
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
              renderItem={({item, index}) => (
                <ListCard
                  item={item}
                  key={index.toString()}
                  navigation={navigation}
                />
              )}
            />
          ) : (
            <NoTaskCard />
          )}
        </>
      )}
    </View>
  );
};

export default ViewListScreen;
