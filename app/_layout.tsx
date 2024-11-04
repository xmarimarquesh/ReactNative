import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
    'Fontzinha': Inter_900Black
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="register" options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="(adm)" options={{headerShown: false}}></Stack.Screen>
    </Stack>
  );
}
