import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Hoc from './src/hoc';
import { StockList } from './src/screens/views/stock-list.view';

const App = () => {
  return (
    <View style={styles.container}>
      <StockList></StockList>
    </View>
  );
}

//<Text>Higher-orderComponent Tutorial</Text>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;//Hoc(App);