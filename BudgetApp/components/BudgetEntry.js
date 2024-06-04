import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import { additem } from './redux/action';

const BudgetEntry = ({ navigation }) => {
  const saveEntry = () => {
    // Save entry logic
    console.warn("called");
    alert('Entry saved successfully!');
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Budget Entry</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} placeholder='Enter item name...' />
      <Text style={styles.label}>Planned Amount:</Text>
      <TextInput style={styles.input} placeholder='Enter planned amount...' keyboardType="numeric" />
      <Text style={styles.label}>Actual Amount:</Text>
      <TextInput style={styles.input} placeholder='Enter actual amount...' keyboardType="numeric" />
      <Button mode="contained" onPress={saveEntry} style={styles.button}>Save</Button>
      <Button onPress={() => navigation.navigate('BudgetListing')} style={styles.button}>Show Items</Button>
    </View>
  );
};

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

export default BudgetEntry;
