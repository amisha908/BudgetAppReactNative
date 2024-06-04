import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from redux toolkit
import rootReducer from './components/redux/reducer';
import { Provider } from 'react-redux';
import Entry from './components/Entry';
import Listing from './components/Listing';
import AsyncStorage from '@react-native-async-storage/async-storage';

const store = configureStore({
  reducer: rootReducer
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (


    <PaperProvider>
      <Provider store={store}> 
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Entry" component={Entry} />
             <Stack.Screen name="Listing" component={Listing} />
           </Stack.Navigator>
         </NavigationContainer>
       </Provider>
     </PaperProvider>
  );
};

