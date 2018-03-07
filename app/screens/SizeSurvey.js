import React, { Component } from 'react';
import { Platform, View, Text, TextInput, StyleSheet } from 'react-native';
import {RkButton, RkTextInput} from 'react-native-ui-kitten';


class SizeSurvey extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.screenProps.value.toString()}</Text>
        <RkTextInput
          placeholder='Loose Underbust'
          onChangeText={(value) => this.setState({value})}
        />
        <RkTextInput placeholder='Snug Underbust'/>
        <RkTextInput placeholder='Tight Underbust'/>
        <RkButton
          onPress={() => {this.props.navigation.navigate('Form2')}}>
          Next!
        </RkButton>
        <RkButton onPress={() => {this.props.screenProps.updateState()}}>Test</RkButton>
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
  },
  button: {
    padding: 20,
    margin: 10,
  }
})

export default SizeSurvey;
