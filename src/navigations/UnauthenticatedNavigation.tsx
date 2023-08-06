import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../screens';
import { SignInScreen } from '../screens/SignInScreen';

const Stack = createNativeStackNavigator();

export function UnauthenticatedNavigation() {
  return (
    <>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}
