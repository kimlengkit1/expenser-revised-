import { createStackNavigator } from '@react-navigation/stack';
import { Stack } from 'expo-router';
import HomeScreen from './home';

const StackNavigator = createStackNavigator();

export default function AppLayout() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: true }}>
      <StackNavigator.Screen name="Home" component={HomeScreen} />
      {/* add other app screens here */}
    </StackNavigator.Navigator>
  );
}