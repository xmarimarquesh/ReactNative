import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Text } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{headerShown: false}}></Stack.Screen>
    </Stack>
  );
}
