import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class screen3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>대출포기 Screen</Text>
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

