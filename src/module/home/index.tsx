import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {Text} from '../../widget';
import Navigation from '../../Navigation'
interface Props {}
interface State {}
class Home extends React.Component<Props, State> {

    onPress = () => {
        console.log(123, Navigation)
        Navigation.navigate('VideoDetail')
    }
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>
                <Text onPress={this.onPress}>go to details</Text>
            </ScrollView>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})