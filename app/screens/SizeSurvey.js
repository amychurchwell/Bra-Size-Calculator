import React, { Component } from 'react';
import { Platform, View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';

import {RkButton} from 'react-native-ui-kitten';

class SizeSurvey extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      error: false
    };
  }

  static navigationOptions = {
    title: 'Form',
  };

  render() {
    return (
      <View>
        <RkButton
          onPress={() => this.props.navigation.navigate('Form2')}>
          Next!
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
  content: {
    padding: 20,
    margin: 10,
  },
  title: {
    fontSize: 35,
    color: '#c8b7b5',
  },
  input: {
    margin: 10,
  }
})

export default SizeSurvey;
