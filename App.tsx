import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// import ProductScreen from './src/screens/ProductScreen';
// import HomeScreen from './src/screens/HomeScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <HomeScreen /> */}
      {/* <ProductScreen /> */}
      <ShoppingCartScreen />
    </SafeAreaView>
  );
}

export default App;
