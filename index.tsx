
import React from 'react';
import {AppRegistry} from 'react-native';
import Navigation from './src/Navigation';
import {name as appName} from './app.json';
// class App extends React.Component {
//     render() {
//         return Navigation.rootRouter()
//     }
// }
AppRegistry.registerComponent(appName, () => Navigation.rootRouter());
