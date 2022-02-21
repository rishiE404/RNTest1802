import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Input from '../Test/InputScreen/Input'
import Main from '../Test/MainScreen/Main'

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Main} name="Main" options={{headerShown: false}} />
        <Stack.Screen component={Input} name="Input" />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;
