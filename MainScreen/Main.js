import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';

const Main = props => {
  var driver = [];

  const [changeState, setChangeState] = useState(0);

  if (typeof props.route.params !== 'undefined') {
    driver = props.route.params;
  }
  // console.log('visible', props.navigation.getParam('item'))

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#20315f',
          }}>
          User Data
        </Text>
      </View>

      <FlatList
        data={driver}
        renderItem={dataItem => (
          <View>
            <Text>First Name : {dataItem.item.FirstName}</Text>
            <Text>Last Name : {dataItem.item.LastName}</Text>
            <Text>Contact Number : {dataItem.item.Contact}</Text>
          </View>
        )}
      />

      <View>
        <TouchableOpacity
          disabled={changeState === 9}
          onPress={() => {
            setChangeState(driver.length);
            props.navigation.navigate('Input', driver);
          }}
          style={{
            marginBottom: 50,
            backgroundColor: '#87cefa',
            padding: 20,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}>
            Add User
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main;