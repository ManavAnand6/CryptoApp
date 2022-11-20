import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Splash } from '../screens/Splash';

const Stack = createNativeStackNavigator();

function RouteUser() {
  return (
    <Stack.Navigator
      initialRouteName="IntroStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="IntroStack" component={Splash} />
      <Stack.Screen name="HomeStack" component={Home} />
    </Stack.Navigator>
  );
}

export default RouteUser;
