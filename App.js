import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

const Main = (props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      {/* <View>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#20315f'
        }}>
          User Data
        </Text>
      </View> */}
      <TouchableOpacity 
      onPress={() => props.navigation.navigate('Input')}
      style={{ marginBottom:50 ,backgroundColor: '#87cefa', padding: 20, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontWeight: 'bold', fontSize:18, color: '#fff'}}>Add User</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


const Input = (props) => {

  const [FirstName, setFirstName] = React.useState("");
  const [LastName, setLastName] = React.useState("");
  const [Contact, setContact] = React.useState("");

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', marginTop: 50}}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFirstName(text)}
        value={FirstName}
        placeholder="Enter your first name..."
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setLastName(text)}
        value={LastName}
        placeholder="Enter your last name..."
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setContact(text)}
        value={Contact}
        placeholder="enter your contact number..."
        keyboardType="numeric"
      />
      <TouchableOpacity 
      onPress={() => props.navigation.navigate('Main')}
      style={{ marginTop:20 ,backgroundColor: '#87cefa', padding: 20, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontWeight: 'bold', fontSize:18, color: '#fff'}}>Save </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 30,
    borderColor: 'gray',
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
    marginTop: 10  
  },
});

export default App;
