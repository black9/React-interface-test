import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import MainHome from "./screens/MainHome";
import MyLoan from "./screens/MyLoan";
import MyMoneyInOut from "./screens/MyMoneyInOut";
import MyInvest from "./screens/MyInvest";
import MyProfile from "./screens/MyProfile";

export default createBottomTabNavigator(
  {
    MainHome: {
      screen: MainHome,
      navigationOptions: {
        tabBarLabel: "투자정보",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" color={tintColor} size={24} />
        )
      }
    },
    MyLoan: {
      screen: MyLoan,
      navigationOptions: {
        tabBarLabel: "대출내역",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-albums" color={tintColor} size={24} />
        )
      }
    },
    MyInvest: {
      screen: MyInvest,
      navigationOptions: {
        tabBarLabel: "투자내역",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-pulse" color={tintColor} size={24} />
        )
      }
    },
    MyMoneyInOut: {
      screen: MyMoneyInOut,
      navigationOptions: {
        tabBarLabel: "입출금내역",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-repeat" color={tintColor} size={24} />
        )
      }
    },
    MyProfile: {
      screen: MyProfile,
      navigationOptions: {
        tabBarLabel: "내 정보",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
