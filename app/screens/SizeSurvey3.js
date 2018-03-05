import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

import {RkButton} from 'react-native-ui-kitten';

class SizeSurvey3 extends Component {

  static navigationOptions = {
    title: 'Form',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Size Survey3</Text>
        <RkButton
          onPress={() => this.props.navigation.navigate('Results')}>
          Submit!
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
