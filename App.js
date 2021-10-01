import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BudgetEntryScreen from './screens/BudgetEntryScreen';
import BudgetListingScreen from './screens/BudgetListingScreen';
import { Provider as StoreProvider } from 'react-redux'
import store from './redux/store'

const Stack =  createStackNavigator()

function MyStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Budget" component={BudgetListingScreen} />
      <Stack.Screen name="Budget Entry" component={BudgetEntryScreen} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <StoreProvider store = {store}>
      <NavigationContainer>
         <MyStack />
      </NavigationContainer>

    </StoreProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

