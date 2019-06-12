
import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  NavigationActions,
  NavigationContainerComponent,
  DrawerActions} from 'react-navigation';
import bottomTabNavigator from './module/nav/BottomNav';
import createDrawerNavigator from './module/nav/DrawerNav';
import VideoDetail from './module/videoDetail';

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: bottomTabNavigator
  },
  // Drawer: {
  //   screen: createDrawerNavigator
  // },
  VideoDetail
}, {
  initialRouteName: 'Home'
});
const AppContainer = createAppContainer(AppStackNavigator);

export default class Navigation {

  private static rootNavigator: NavigationContainerComponent;

  static navigate(routeName: string) {
    console.log(Navigation.rootNavigator)
    Navigation.rootNavigator.dispatch(NavigationActions.navigate({routeName}));
  }

  static openDrawer() {
    Navigation.rootNavigator.dispatch(DrawerActions.openDrawer());
  }
  
  static closeDrawer() {
    Navigation.rootNavigator.dispatch(DrawerActions.closeDrawer());
  }

  static rootRouter(): React.ComponentType<any> {
    return class App extends React.Component {
      render() {
        return <AppContainer ref={(_: NavigationContainerComponent) => (Navigation.rootNavigator = _)} />
      }
  }
    // return <AppContainer ref={(_: NavigationContainerComponent) => (Navigation.rootNavigator = _)} />;
  }
}