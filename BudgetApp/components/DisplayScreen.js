// DisplayScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

const DisplayScreen = ({ savedValues }) => {
  return (
    <View>
      <FlatList
        data={savedValues}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Age: {item.age}</Text>
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  savedValues: state.savedValues
});

export default connect(mapStateToProps)(DisplayScreen);
