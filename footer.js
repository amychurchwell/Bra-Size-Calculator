import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Footer</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
})
export default Footer;
