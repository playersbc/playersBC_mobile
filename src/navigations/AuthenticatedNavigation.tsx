import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from '../components';
import { DashboardStackNavigation } from './DashboardStackNavigation';

const Tab = createBottomTabNavigator();

export function AuthenticatedNavigation() {
  return (
    <>
      <Tab.Navigator
        tabBar={(props) => <TabBar {...props} />}
        initialRouteName="Dashboard"
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardStackNavigation}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
}
