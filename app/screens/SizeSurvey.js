import React, { Component } from 'react';
import { Platform, View, StyleSheet, Image } from 'react-native';

import { Container, Header, Content, Button, Text, Form, Item, Input, Label } from 'native-base';


class SizeSurvey extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
        <Content>
          <Image
            source={require('./../assets/measuring-tape.png')}/>
        </Content>
        <Form>
          <Item floatingLabel>
            <Label>Snug Underbust.</Label>
            <Input onChangeText={(text) => this.props.screenProps.setBand(text)}/>
          </Item>
          <Item floatingLabel last>
            <Label>Loose Underbust. AKA Step1.</Label>
            <Input onChangeText={(text) => this.props.screenProps.setLooseUB(text)}/>
          </Item>
          <Button full dark
            onPress={() => {this.props.navigation.navigate('Form2')}}>
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
  },
  button: {
    padding: 20,
    margin: 10,
  }
})

export default SizeSurvey;
