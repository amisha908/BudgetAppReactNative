// InputScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { setInputValue, saveInputValues } from './redux/action';

const InputScreen = ({ inputValues, setInputValue, saveInputValues, navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSave = () => {
    const values = { name, age };
    saveInputValues(values);
    setName(''); // Clear input fields after saving
    setAge('');
  };

  const handleDisplay = () => {
    navigation.navigate('DisplayScreen'); // Navigate to the DisplayScreen
  };

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={(text) => {
          setName(text);
          setInputValue('name', text);
        }}
        placeholder="Name"
      />
      <TextInput
        value={age}
        onChangeText={(text) => {
          setAge(text);
          setInputValue('age', text);
        }}
        placeholder="Age"
        keyboardType="numeric"
      />
      <Button title="Save Item" onPress={handleSave} />
      <Button title="Display Items" onPress={handleDisplay} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  inputValues: state.inputValues
});

export default connect(mapStateToProps, { setInputValue, saveInputValues })(InputScreen);
