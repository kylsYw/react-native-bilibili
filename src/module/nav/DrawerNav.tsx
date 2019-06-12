import {createDrawerNavigator} from 'react-navigation';
import BottomNav from './BottomNav';
export default createDrawerNavigator(
    {
        Main: BottomNav
    },
    {
        drawerWidth: 281,
        initialRouteName: 'Main',
    }
)