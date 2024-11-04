import { Header } from '@/components/header';
import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

export default function TabLayout() {
  return (
    <>
      <Header image={require("../../assets/images/logo.png")} />
      <Tabs>
        <Tabs.Screen name='index' options={{tabBarLabel: "", headerShown: false, tabBarIcon: () => (<Text>🏠</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='addProduct' options={{tabBarLabel: "", headerShown: false, tabBarIcon: () => (<Text>➕</Text>)}}></Tabs.Screen>
      </Tabs>
    </>
  );
}
