import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';
import {useAuthorization} from '../components/AuthProvider';

const Stack = createStackNavigator();

export function Home() {
  const {authToken} = useAuthorization();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {authToken ? (
          <Stack.Screen name="Welcome" component={Welcome} />
        ) : (
          <Stack.Screen name="Register" component={Register} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
