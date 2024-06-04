import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

const BudgetListing = () => {
  const savedEntries = [
  
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Budget Entries Listing</Text>
      {savedEntries.map((entry, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.itemName}>Name: {entry.itemName}</Text>
          <Text>Planned Amount: {entry.plannedAmount}</Text>
          <Text>Actual Amount: {entry.actualAmount}</Text>
        </View>
      ))}
    </ScrollView>
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
  listItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  itemName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default BudgetListing;
