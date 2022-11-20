import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RouteUser from './src/routes/RouteUser';

function App() {
  return (
    <NavigationContainer>
      <RouteUser />
    </NavigationContainer>
  )
}

export default App;