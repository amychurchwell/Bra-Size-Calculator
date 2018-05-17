import React, { Component } from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';

class SizeSurvey3 extends Component {
  constructor(props){
    super(props);
  }

  static navigationOptions = {
    title: 'Form',
  };

  render() {
    return (
      <View>
        <Text>More questions.</Text>
        <Button full dark
          onPress={() => this.props.navigation.navigate('Results')}>
          <Text>Submit!</Text>
        </Button>
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
