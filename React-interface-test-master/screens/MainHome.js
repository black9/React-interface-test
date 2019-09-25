import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Dimensions,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get('window')

class MainHome extends Component {

    componentWillMount() {
        this.startHeaderHeight = 50
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>

                <Text style={{ fontSize: 30, fontWeight: '800', paddingHorizontal: 20, padding: 10 }}>
                                투자정보
                            </Text>
                    <ScrollView
                        scrollEventThrottle={16}>

                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>

                            <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                                <View style={{
                                    flexDirection: 'row', padding: 10,
                                    backgroundColor: 'white', marginHorizontal: 10,
                                    shadowOffset: { width: 0, height: 0 },
                                    shadowColor: 'black',
                                    shadowOpacity: 0.1,
                                    elevation: 1,
                                    marginTop: Platform.OS == 'android' ? 30 : null
                                }}>
                                    <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        placeholder="검색창"
                                        placeholderTextColor="grey"
                                        style={{ flex: 1, fontWeight: '200', backgroundColor: 'white' }}
                                    />
                                </View>
                            </View>

                            <View style={{ height: 70, marginTop: 20 }}>
                                <Text> 정렬 부분 </Text>
                            </View>
                            <Text> 투자 리스트 나열</Text>
                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default MainHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});