import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Hoc from './src/hoc';
import { StockList } from './src/screens/views/stock-list.view';
import { UserList } from './src/screens/views/user-list.view';

const StocksData = [
  {
      id: 1,
      name: 'TCS'
  },
  {
      id: 2,
      name: 'Infosys'
  },
  {
      id: 3,
      name: 'Reliance'
  }
];

const UsersData = [
  {
      id: 1,
      name: 'Krunal'
  },
  {
      id: 2,
      name: 'Ankit'
  },
  {
      id: 3,
      name: 'Rushabh'
  }
];

const Stocks = Hoc(
  StockList,
  StocksData
);

const Users = Hoc(
  UserList,
  UsersData
)

const App = () => {
  return (
    <View style={styles.container}>
      <Users></Users>
      <Stocks></Stocks>
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