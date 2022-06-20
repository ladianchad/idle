import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from "react-query";
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { useEffect } from 'react';
import { getItems } from './config/gogifarm-api/item/item-api';
import getEnv from './env';

const queryClient = new QueryClient();

export default function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar></StatusBar>
    </QueryClientProvider>
  );
}

registerRootComponent(App);