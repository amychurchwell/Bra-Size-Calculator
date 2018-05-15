import React, { Component } from 'react';
import {
  Platform,
  View,
  StyleSheet,
  Image } from 'react-native';

import { Container, Header, Content, Button, Text } from 'native-base';

class Results extends Component {
    constructor(props){
      super(props);
    }

  // componentDidMount(calculateCupSize());

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Image source={require('./../assets/bra.png')} />
        <Text style={styles.title}>Your suggested size:</Text>
          <Text style={styles.size}>{this.props.screenProps.bandSize.toString()}{this.props.screenProps.cupSize.toString()}</Text>
          <Button dark onPress={() => {this.props.screenProps.calculateCupSize()}}>
            <Text>Calculate!</Text>
          </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbe9e7',
    ...Platform.select({
      ios: { paddingTop: 30 }
    })
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    margin: 10,
  },
  size: {
    fontSize: 20,
  }
})

export default Results;
