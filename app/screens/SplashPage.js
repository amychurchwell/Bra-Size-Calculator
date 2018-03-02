import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class SplashPage extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>SplashPage</Text>
      </View>
    )
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
  },
})

export default SplashPage;
