import React, { Component } from 'react';
import {
  Platform,
  View,
  Text,
  StyleSheet,
  Image } from 'react-native';

import {RkCard} from 'react-native-ui-kitten';

class Results extends Component {
    constructor(props){
      super(props);
      console.log(props);
    }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image source={require('./../assets/bra.png')} />
        <RkCard style={styles.content}>
          <View rkCardHeader>
            <Text style={styles.title}>Your suggested size:</Text>
          </View>
          <View rkCardContent>
            {/* <Text style={styles.size}>{this.props.screenProps.test.toString()}</Text> */}
          </View>
        </RkCard>
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
  },
  size: {
    fontSize: 20,
  }
})

export default Results;
