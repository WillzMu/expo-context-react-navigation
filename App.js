// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalContextProvider } from './context/globalContext'
import FullNameScreen from './FullNameScreen'
import DetailsScreen from './Details'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const KYCStack = createStackNavigator()

function KYC() {
  return (
    <KYCStack.Navigator>
      <Stack.Screen name="FullName" component={FullNameScreen} />
    </KYCStack.Navigator>
  )
}

function App() {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'FullNameScreen') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#FF0000',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={KYC} />
          <Tab.Screen name="Details" component={DetailsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}

export default App;
