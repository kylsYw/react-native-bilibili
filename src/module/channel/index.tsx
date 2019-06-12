import React from 'react';
import { View } from 'react-native';
interface Props {
    name?: string;
}
interface State {}
class Channel extends React.Component<Props, State> {
    render() {
        return (
            <View />
        )
    }
}

export default Channel;