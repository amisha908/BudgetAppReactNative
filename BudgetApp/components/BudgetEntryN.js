import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { saveInputValues } from './redux/action';

const BudgetEntry = ({ saveInputValues, navigation }) => {
  const [name, setName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');

  const handleSave = () => {
    const values = { name, plannedAmount, actualAmount };
    saveInputValues(values);
    setName('');
    setPlannedAmount('');
    setActualAmount('');
  };

  const handleDisplay = () => {
    navigation.navigate('BudgetListing');
  };

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Name"
      />
      <TextInput
        value={plannedAmount}
        onChangeText={text => setPlannedAmount(text)}
        placeholder="Planned Amount"
        keyboardType="numeric"
      />
      <TextInput
        value={actualAmount}
        onChangeText={text => setActualAmount(text)}
        placeholder="Actual Amount"
        keyboardType="numeric"
      />
      <Button title="Save Item" onPress={handleSave} />
      <Button title="Display Items" onPress={handleDisplay} />
    </View>
  );
};

const mapDispatchToProps = {
  saveInputValues
};

export default connect(null, mapDispatchToProps)(BudgetEntry);


  
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
  

  