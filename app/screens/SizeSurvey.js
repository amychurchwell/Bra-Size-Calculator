import React, { Component } from 'react';
import { Platform, View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';

class SizeSurvey extends Component {

  static navigationOptions = {
    title: 'Form',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Size Survey</Text>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Loose Underbust"
          />
          <TextInput
            style={styles.input}
            placeholder="Snug Underbust"
          />
          <TextInput
            style={styles.input}
            placeholder="Tight Underbust"
          />
        </View>
        <Button
          title="Next"
          color="#4b2c20"
          onPress={() => this.props.navigation.navigate('Form2')}
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
  content: {
    padding: 20,
    margin: 10,
  },
  title: {
    fontSize: 35,
    color: '#c8b7b5',
  },
  input: {
    margin: 10,
  }
})

export default SizeSurvey;
