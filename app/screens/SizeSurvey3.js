import React, { Component } from 'react';
import { Platform, View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';

class SizeSurvey3 extends Component {

  static navigationOptions = {
    title: 'Form',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Size Survey3</Text>
        <TextInput
          style={styles.input}
          placeholder="Q1"
        />
        <TextInput
          style={styles.input}
          placeholder="Q2"
        />
        <TextInput
          style={styles.input}
          placeholder="Q3"
        />
        <Button
          title="Submit!"
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
    backgroundColor: '#F5FCFF',
    ...Platform.select({
      ios: { paddingTop: 30 }
    })
  },
  input: {
  }
})

export default SizeSurvey3;
