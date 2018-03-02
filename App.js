import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Platform, ListView, Keyboard, AsyncStorage } from "react-native";
import {
  StackNavigator,
} from 'react-navigation';

import Header from "./header";
import Footer from "./footer";
import SplashPage from "./app/screens/SplashPage";
import SizeSurvey from "./app/screens/SizeSurvey";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
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
    ...Platform.select({
      ios: { paddingTop: 30 }
    })
  }
})

export default StackNavigator({
  Home: {
    screen: SplashPage,
  },
});
