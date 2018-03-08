import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

import {RkButton, RkTextInput, RkChoice} from 'react-native-ui-kitten';

class SizeSurvey3 extends Component {
  constructor(props){
    super(props);
  }

  static navigationOptions = {
    title: 'Form',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>More questions.</Text>
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
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    ...Platform.select({
      ios: { paddingTop: 30 }
    })
  }
})

export default SizeSurvey3;
