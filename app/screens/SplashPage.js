import React, { Component } from 'react';
import {
  Platform,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Button } from 'react-native';

class SplashPage extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('./../assets/bra.png')} />
        <Text style={styles.title}>I need help finding out my bra size.</Text>
        <Text style={styles.content}>Welcome to bra size calculator! A react native application created by Amy.</Text>
        <Button
          title="Let's go!"
          color="#4b2c20"
          onPress={() => this.props.navigation.navigate('Form')}
        />
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
