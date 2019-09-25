import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import {
    MaterialDialog,
} from 'react-native-material-dialog';
import { material } from 'react-native-typography';


class MyInvest extends Component{

    state ={
        basicCustomColorsVisible: false,
    }

    render() {
        return (
            <View style={styles.container}>
                
                <TouchableOpacity
                                onPress={() =>
                                    this.setState({ basicCustomColorsVisible: true })
                                }
                            >
                                <View style={styles.button}>
                                    <Text style={material.button}>이것은 테스트</Text>
                                </View>
                            </TouchableOpacity>

                <MaterialDialog
                    visible={this.state.basicCustomColorsVisible}
                    title={'돈 빌릴래?'}
                    titleColor="#F0F0F0"
                    colorAccent="#6ABED0"
                    backgroundColor="#181712"
                    okLabel="네"
                    onOk={() => {
                        this.setState({ basicCustomColorsVisible: false });
                    }}
                    cancelLabel="아니요"
                    onCancel={() => {
                        this.setState({ basicCustomColorsVisible: false });
                    }}
                >
                    <Text style={[material.subheading, { color: '#B0ABA0' }]}>
                        주의사항
              </Text>
                </MaterialDialog>
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