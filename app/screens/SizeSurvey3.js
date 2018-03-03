import React, { Component } from 'react';
import { Platform, View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';

class SizeSurvey3 extends Component {

  static navigationOptions = {
    title: 'Form',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Size Survey3</Text>
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
          color="#4b2c20"
          onPress={() => this.props.navigation.navigate('Results')}
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
  title: {
    fontSize: 35,
    color: '#c8b7b5',
  },
  input: {
    margin: 10,
  }
})

export default SizeSurvey3;
