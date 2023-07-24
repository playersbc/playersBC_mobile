import { createDrawerNavigator } from '@react-navigation/drawer';
import { MenuScreen } from '../screens';
import { StyleSheet } from 'react-native';
import { Theme } from '../theme';
import MenuIcon from '../components/Icons/MenuIcon';
import { UserIcon } from '../components';

const Drawer = createDrawerNavigator();
const StakeHolder = 'PlayerBC';

export function AuthenticatedNavigation() {
  return (
    <>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerLeft: () => <MenuIcon onPress={navigation.toggleDrawer} />,
          headerRight: () => <UserIcon onPress={navigation.toggleDrawer} />,
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerRightContainerStyle: { paddingRight: 20 },
          headerStyle: styles.headerBackground,
          headerTitle: `Olá, ${StakeHolder}`,
          headerTitleAlign: 'left',
          headerTitleStyle: styles.title,
        })}
        initialRouteName="Dashboard"
      >
        <Drawer.Screen
          name="Dashboard"
          component={MenuScreen}
          options={{
            drawerLabel: 'asdasd',
            drawerActiveBackgroundColor: '#000',
          }}
        />
      </Drawer.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: Theme.colors.primary,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    height: 120,
  },
  title: {
    color: '#fff',
    fontFamily: Theme.fontsFamily.display.medium,
  },
});
