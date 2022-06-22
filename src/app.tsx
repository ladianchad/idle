import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from "react-query";
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import RootNavigation from './index';

const queryClient = new QueryClient();

export default function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigation/>
      <StatusBar/>
    </QueryClientProvider>
  );
}

registerRootComponent(App);