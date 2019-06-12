import React from 'react';
import {createBottomTabNavigator, NavigationRouteConfigMap} from 'react-navigation';
import SvgUri from 'react-native-svg-uri';
import Home from '../home';
import Channel from '../channel';
import PrimaryHeader from '../header';
import {CommonStyle} from '../../util'

export default createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({focused}:NavigationRouteConfigMap ) => (<SvgUri
                    width='25'
                    height='25'
                    source={focused ? require('../../static/icons/home-active.svg') : require('../../static/icons/home.svg')}
                />)
            }
        },
        Channel: {
            screen: Channel,
            navigationOptions: {
                tabBarLabel: '频道',
                tabBarIcon: ({focused}:NavigationRouteConfigMap ) => (<SvgUri
                    width='25'
                    height='25'
                    source={focused ? require('../../static/icons/channel-active.svg') : require('../../static/icons/channel.svg')}
                />)
            }
        },
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: CommonStyle.color.primary,
        },
        navigationOptions:{
            // headerBackTitle: '后退',
            header: <PrimaryHeader />
            // header: null
        },
    }
)