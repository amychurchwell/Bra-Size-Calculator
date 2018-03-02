import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from "./header";
import Footer from "./footer";

type Props = {};
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.welcome}>
          Welcome to Bra Size Calculator!
        </Text>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})
export default App;
