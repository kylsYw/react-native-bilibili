import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Text} from '../../widget';

interface Props {}
interface State {}

class VideoDetail extends React.Component<Props, State> {

    render() {
        return (
            <View style={styles.container}>
                <Text>VideoDetail</Text>
            </View>
        )
    }
}

export default VideoDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})