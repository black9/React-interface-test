import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class MyInvest extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Empty </Text>
            </View>
        );
    }
}
export default MyInvest;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});