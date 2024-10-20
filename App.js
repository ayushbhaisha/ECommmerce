import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/Navigation/AppNavigation';
import { DataContextProvider } from './src/Contexts/DataContext';
import { CartContextProvider } from './src/Contexts/CartContext';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <DataContextProvider>
          <CartContextProvider>
            <AppNavigation />
          </CartContextProvider>
        </DataContextProvider>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App;