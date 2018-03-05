import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';

import {RkCard} from 'react-native-ui-kitten';

class Results extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <RkCard>
          <View rkCardHeader>
            <Text>Your suggested size:</Text>
          </View>
          <View rkCardContent>
            <Text> quick brown fox jumps over the lazy dog</Text>
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
  }
})

export default Results;
