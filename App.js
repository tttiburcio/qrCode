import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from './Form';
import GenerateQr from './GenerateQr';
import Ini from './Initial';
import Car from './Car';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" options={{ title: 'HESE - CVAP' }} component={Ini} />
        <Stack.Screen name="Equip" options={{ title: 'EQUIPAMENTO' }} component={Form} />
        <Stack.Screen name="Veic" options={{ title: 'VEÍCULOS' }} component={Car} />
        <Stack.Screen name="QrCode" options={{ title: 'QRCODE' }} component={GenerateQr} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
