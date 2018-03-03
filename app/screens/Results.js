import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';

class Results extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your suggested size(s):</Text>
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
  title: {
    flex: 1,
    fontSize: 30,
  }
})

export default Results;
