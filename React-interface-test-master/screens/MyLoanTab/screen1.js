import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Picker } from "react-native";

export default class screen1 extends Component  {
  render() {
    return (
      <View style={styles.container}>
        <Text>대출현황 Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
