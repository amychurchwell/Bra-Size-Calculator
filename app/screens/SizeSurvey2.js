import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RkButton, RkTextInput} from 'react-native-ui-kitten';

class SizeSurvey2 extends Component {
    constructor(props){
      super(props);
    }

  static navigationOptions = {
    title: 'Form',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.screenProps.standB.toString()}</Text>
        <Text>{this.props.screenProps.leanB.toString()}</Text>
        <Text>{this.props.screenProps.looseUB.toString()}</Text>
        <Text>{this.props.screenProps.cupSize.toString()}</Text>
        <RkTextInput
          placeholder='Standing Bust'
          value={this.props.screenProps.standB}
          onChangeText={(text) => this.props.screenProps.setStandB(text)}
        />
        <RkTextInput
          placeholder='Leaning Bust'
          value={this.props.screenProps.leanB}
          onChangeText={(text) => this.props.screenProps.setLeanB(text)}
        />
        <RkButton onPress={() => {this.props.navigation.navigate('Form3')}}>
          Next!
        </RkButton>
        <RkButton onPress={() => {this.props.screenProps.calculateCupSize()}}>
          Calculate!
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
