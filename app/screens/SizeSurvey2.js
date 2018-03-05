import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RkButton} from 'react-native-ui-kitten';

class SizeSurvey2 extends Component {

  static navigationOptions = {
    title: 'Form',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Size Survey2</Text>
        <RkButton
          onPress={() => this.props.navigation.navigate('Form3')}>
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
  title: {
    fontSize: 35,
    color: '#c8b7b5',
  },
  input: {
    margin: 10,
  }
})

export default SizeSurvey2;
