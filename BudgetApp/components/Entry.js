import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { setInputValue, saveInputValues } from './redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Entry = ({ inputValues, setInputValue, saveInputValues, navigation }) => {
  const [name, setName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');

  const handleSave = async () => {
    const values = {
      name,
      plannedAmount: parseFloat(plannedAmount),
      actualAmount: parseFloat(actualAmount)
    };

    try {
      // Fetch existing data from AsyncStorage
      const existingData = await AsyncStorage.getItem('SAVED_VALUES');
      let newData = [];

      if (existingData !== null) {
        newData = JSON.parse(existingData);
      }

      // Add the new value to the existing array
      newData.push(values);

      // Save the updated array back to AsyncStorage
      await AsyncStorage.setItem('SAVED_VALUES', JSON.stringify(newData));

      // Update the state or trigger any necessary Redux action
      saveInputValues(values);
      alert('Entry saved successfully!');
      setName('');
      setPlannedAmount('');
      setActualAmount('');
    } catch (error) {
      console.error("Error saving data: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Budget Entry</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter item name...'
        value={name}
        onChangeText={(text) => {
          setName(text);
          setInputValue('name', text);
        }}
      />

      <Text style={styles.label}>Planned Amount:</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter planned amount...'
        keyboardType="numeric"
        value={plannedAmount}
        onChangeText={(text) => {
          setPlannedAmount(text);
          setInputValue('plannedAmount', text);
        }}
      />
      <Text style={styles.label}>Actual Amount:</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter actual amount...'
        keyboardType="numeric"
        value={actualAmount}
        onChangeText={(text) => {
          setActualAmount(text);
          setInputValue('actualAmount', text);
        }}
      />
      <Button mode="contained" onPress={handleSave} style={styles.button}>Save</Button>
      <Button onPress={() => navigation.navigate('Listing')} style={styles.button}>Show Items</Button>
    </View>
  );
};

const mapStateToProps = (state) => ({
  inputValues: state.inputValues
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 4,
  },
  button: {
    width: '100%',
    marginBottom: 10,
  },
});

export default connect(mapStateToProps, { setInputValue, saveInputValues })(Entry);