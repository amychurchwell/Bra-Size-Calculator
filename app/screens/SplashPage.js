import React, { Component } from 'react';
import {
  Platform,
  View,
  Text,
  Animated,
  StyleSheet,
  Image } from 'react-native';

import {RkButton} from 'react-native-ui-kitten';

class SplashPage extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('./../assets/bra.png')} />
        <Text style={styles.title}>Does your cup runneth over?</Text>
        <Text style={styles.content}>Welcome to bra size calculator! A react native application created by Amy.</Text>
        <RkButton
          onPress={() => this.props.navigation.navigate('Form')}>
          Let's go!
        </RkButton>
        <RkButton
          onPress={() => this.props.navigation.navigate('Results')}>
          Results.
        </RkButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbe9e7',
    ...Platform.select({
      ios: { paddingTop: 30 }
    })
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 35,
  },
  content: {
    margin: 15,
  }
})

export default SplashPage;
