import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';

const Input = props => {

  const [FirstName, setFirstName] = React.useState("");
  const [LastName, setLastName] = React.useState("");
  const [Contact, setContact] = React.useState("");

  var persiData = props.route.params;

  const passData = () => {

    if (FirstName === "" || LastName === "" || Contact === "") {
      Alert.alert("Required",
        "Please fill al the details...",
        [{ title: 'ok', onPress: () => { }, style: 'cancel' }])
    } else {
      var currData = [{
        FirstName: FirstName,
        LastName: LastName,
        Contact: Contact
      }];

      if (typeof (persiData) === 'undefined') {
        persiData.push(currData);
      } else {
        persiData.push.apply(persiData, currData);
      }

      props.navigation.navigate('Main', persiData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
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
        onPress={passData}
        style={{ marginTop: 20, backgroundColor: '#87cefa', padding: 20, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}>Save </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 30,
    borderColor: 'gray',
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
    marginTop: 10,
  },
});

export default Input;