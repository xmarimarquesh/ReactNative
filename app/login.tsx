import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  return (
    <>
      {/* <Text>Login</Text>
      <Link to="(tabs)" />
      <Button 
        title="Entrar" 
        onPress={() => navigation.navigate('/(tabs)')}
      /> */}
    </>
  );
}
