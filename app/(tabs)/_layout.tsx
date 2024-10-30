import { Header } from '@/components/header';
import { LinearGradient } from 'expo-linear-gradient';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function TabLayout() {
  return (
    <>
      <Header image={require("../../assets/images/logo.png")} />
      <Tabs>
        <Tabs.Screen name='index' options={{tabBarLabel: "Home", tabBarLabelStyle: styles.label, headerShown: false, tabBarIcon: () => (<Text style={styles.icon}>🏠</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='casual' options={{tabBarLabel: "Casual", tabBarLabelStyle: styles.label, headerShown: false, tabBarIcon: () => (<Text style={styles.icon}>👗</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='social' options={{tabBarLabel: "Social", tabBarLabelStyle: styles.label, headerShown: false, tabBarIcon: () => (<Text style={styles.icon}>🧥</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='esportiva' options={{tabBarLabel: "Esportiva", tabBarLabelStyle: styles.label, headerShown: false, tabBarIcon: () => (<Text style={styles.icon}>🧤</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='banho' options={{tabBarLabel: "Banho", tabBarLabelStyle: styles.label, headerShown: false, tabBarIcon: () => (<Text style={styles.icon}>🩳</Text>)}}></Tabs.Screen>
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
      fontSize: 16, // Ajuste o tamanho conforme necessário
  },
  label: {
      fontSize: 16, // Ajuste o tamanho do rótulo conforme necessário
  },
});
