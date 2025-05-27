import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './signin';

const StackNavigator = createStackNavigator();

export default function AuthLayout() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen name="SignIn" component={SignInScreen} />
      {/* add other auth screens here */}
    </StackNavigator.Navigator>
  );
}
