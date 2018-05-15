import React, { Component } from 'react';
import { Platform, View, StyleSheet } from 'react-native';

import { Container, Header, Content, Button, Text, Form, Item, Input, Label } from 'native-base';

class SizeSurvey2 extends Component {
    constructor(props){
      super(props);
    }

  static navigationOptions = {
    title: 'Form',
  };

  render() {
    return (
      <View>
        <Form>
          <Item floatingLabel>
            <Label>Standing Bust, AKA Step 4.</Label>
            <Input onChangeText={(text) => this.props.screenProps.setStandB(text)}/>
          </Item>
          <Item floatingLabel>
            <Label>Leaning Bust, AKA Step 5.</Label>
            <Input onChangeText={(text) => this.props.screenProps.setLeanB(text)}/>
          </Item>
          <Item floatingLabel last>
            <Label>Lying Bust, AKA Step 6.</Label>
            <Input onChangeText={(text) => this.props.screenProps.setLyingB(text)}/>
          </Item>
          <Button dark onPress={() => {this.props.navigation.navigate('Results')}}>
            <Text>Next!</Text>
          </Button>
        </Form>
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
