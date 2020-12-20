import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings187177Navigator from '../features/Settings187177/navigator';
import Settings187162Navigator from '../features/Settings187162/navigator';
import NotificationList187161Navigator from '../features/NotificationList187161/navigator';
import Maps187160Navigator from '../features/Maps187160/navigator';
import BlankScreen0187159Navigator from '../features/BlankScreen0187159/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings187177: { screen: Settings187177Navigator },
Settings187162: { screen: Settings187162Navigator },
NotificationList187161: { screen: NotificationList187161Navigator },
Maps187160: { screen: Maps187160Navigator },
BlankScreen0187159: { screen: BlankScreen0187159Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
