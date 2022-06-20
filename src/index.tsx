import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParam } from './types/root-navigation';

export default function RootNavigation() {
  return(
    <NavigationContainer>
      <RootNavigationStack.Navigator initialRouteName='root'>
        <RootNavigationStack.Screen name='root' component={() => null}></RootNavigationStack.Screen>
      </RootNavigationStack.Navigator>
    </NavigationContainer>
  );
}

const RootNavigationStack = createNativeStackNavigator<RootStackParam>();

