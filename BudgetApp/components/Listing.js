import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Listing = ({ savedValues }) => {
  const [asyncData, setAsyncData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the existing data from AsyncStorage
        const existingData = await AsyncStorage.getItem('SAVED_VALUES');
        if (existingData !== null) {
          setAsyncData(JSON.parse(existingData));
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Listing Screen</Text>
      <FlatList
        data={asyncData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>Name: {item.name}</Text>
            <Text>Planned Amount: {item.plannedAmount}</Text>
            <Text>Actual Amount: {item.actualAmount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  savedValues: state.savedValues
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
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default connect(mapStateToProps)(Listing);

