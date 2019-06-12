import React from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import SvgUri from 'react-native-svg-uri';
import { Text } from '../../widget';
import { CommonStyle } from '../../util';
import Navigation from '../../Navigation';
export default class PrimaryHeader extends React.Component {
    openDrawer = () => {
        Navigation.openDrawer();
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={this.openDrawer}>
                    <SvgUri
                        width='25'
                        height='25'
                        source={require('../../static/icons/home.svg')}
                    />
                </TouchableOpacity>
                <Text style={styles.textStyle}>这是通用头部</Text>
                <SvgUri
                    width='25'
                    height='25'
                    source={require('../../static/icons/home.svg')}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: CommonStyle.color.primary,
    },
    textStyle: {
        color: '#fff',
        paddingVertical: 20,
        fontWeight: 'bold',
    }
})