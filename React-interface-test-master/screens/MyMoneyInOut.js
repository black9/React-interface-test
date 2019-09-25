import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class MyMoneyInOut extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Empty </Text>
            </View>
        );
    }
}
export default MyMoneyInOut;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});