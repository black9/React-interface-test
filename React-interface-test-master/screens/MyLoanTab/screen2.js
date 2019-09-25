import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class screen2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>대출신청 Screen</Text>
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
