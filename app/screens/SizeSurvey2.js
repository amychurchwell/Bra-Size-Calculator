import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RkButton, RkTextInput} from 'react-native-ui-kitten';

class SizeSurvey2 extends Component {
    constructor(props){
      super(props);
      console.log(props + "2");
    }

  static navigationOptions = {
    title: 'Form',
  };

  render() {
    return (
      <View style={styles.container}>
        <RkTextInput placeholder='Loose Underbust'/>
        <RkTextInput placeholder='Snug Underbust'/>
        <RkTextInput placeholder='Tight Underbust'/>
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

export default SizeSurvey2;
