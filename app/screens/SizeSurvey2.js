import React, { Component } from 'react';
import { Platform, View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';

class SizeSurvey2 extends Component {

  static navigationOptions = {
    title: 'Form',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Size Survey2</Text>
        <TextInput
          style={styles.input}
          placeholder="Standing Bust"
        />
        <TextInput
          style={styles.input}
          placeholder="Leaning Bust"
        />
        <TextInput
          style={styles.input}
          placeholder="Lying Bust"
        />
        <Button
          title="Next!"
          onPress={() => this.props.navigation.navigate('Form3')}
        />
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
  input: {
  }
})

export default SizeSurvey2;
