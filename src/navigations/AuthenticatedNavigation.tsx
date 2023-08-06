import { createDrawerNavigator } from '@react-navigation/drawer';
import { LoginStakeHolder, MenuScreen } from '../screens';
import { StyleSheet } from 'react-native';
import { Theme } from '../theme';
import MenuIcon from '../components/Icons/MenuIcon';
import { UserIcon } from '../components';
import { useAuthContext } from '../contexts';
import { AddStakeHolderScreen } from '../screens/AddStakeHolderScreen';

const Drawer = createDrawerNavigator();

export function AuthenticatedNavigation() {
  const { stakeHolder } = useAuthContext();
  return (
    <>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerLeft: () => <MenuIcon onPress={navigation.toggleDrawer} />,
          headerRight: () => <UserIcon onPress={navigation.toggleDrawer} />,
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerRightContainerStyle: { paddingRight: 20 },
          headerStyle: styles.headerBackground,
          headerTitle: stakeHolder && `Olá, ${stakeHolder}`,
          headerTitleAlign: 'left',
          headerTitleStyle: styles.title,
        })}
        initialRouteName="Dashboard"
      >
        <Drawer.Screen
          name="LoginStakeHolder"
          component={LoginStakeHolder}
          options={{
            headerTitle: '',
            drawerLabel: 'Login StakeHolder',
          }}
        />
        <Drawer.Screen
          name="Home"
          component={MenuScreen}
          options={{
            headerTitle: stakeHolder,
            drawerLabel: 'Home',
          }}
        />
        <Drawer.Screen
          name="AddStakeHolder"
          component={AddStakeHolderScreen}
          options={{
            headerTitle: stakeHolder,
            drawerLabel: 'AddStakeHolder',
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
