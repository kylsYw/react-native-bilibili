import React, {Component} from 'react';
import {Text, TextBase} from 'react-native';


export default class BaseText extends Component<any> {
    render() {
        return (
            <Text
                allowFontScaling={false}
                {...this.props}
            >
                {this.props.children}
            </Text>
        );
    }
}
