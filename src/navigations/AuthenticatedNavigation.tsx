import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  AddPlayersScreen,
  AddUsersScreen,
  ApproveUserScreen,
  LoginStakeHolder,
  MenuScreen,
  PlayersScreen,
  StakeholdersScreen,
  UserScreen,
} from '../screens';
import { StyleSheet } from 'react-native';
import { Theme } from '../theme';
import MenuIcon from '../components/Icons/MenuIcon';
import { UserIcon } from '../components';
import { useAuthContext } from '../contexts';
import { AddStakeHolderScreen } from '../screens/AddStakeHolderScreen';
import { useState } from 'react';

const Drawer = createDrawerNavigator();

export function AuthenticatedNavigation() {
  const { stakeHolder } = useAuthContext();
  const [screen, setScreen] = useState(false);

  function drawerItemPress() {
    setScreen(true);
  }

  const headerBackground = {
    backgroundColor: Theme.colors.primary,
    borderBottomRightRadius: screen ? 0 : 20,
    borderBottomLeftRadius: screen ? 0 : 20,
    height: 120,
  };

  return (
    <>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerLeft: () => <MenuIcon onPress={navigation.toggleDrawer} />,
          headerRight: () => <UserIcon onPress={navigation.toggleDrawer} />,
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerRightContainerStyle: { paddingRight: 20 },
          headerStyle: headerBackground,
          headerTitle: stakeHolder && `Olá, ${stakeHolder}`,
          headerTitleAlign: 'left',
          headerTitleStyle: styles.title,
        })}
        initialRouteName="Dashboard"
      >
        <Drawer.Screen
          name="Home"
          component={MenuScreen}
          options={{
            headerTitle: stakeHolder,
            drawerLabel: 'Home',
          }}
        />
        <Drawer.Screen
          name="LoginStakeHolder"
          component={LoginStakeHolder}
          options={{
            headerTitle: '',
            drawerLabel: 'Login StakeHolder',
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
        <Drawer.Screen
          name="StakeHolders"
          component={StakeholdersScreen}
          options={{
            headerTitle: stakeHolder,
            drawerLabel: 'StakeHolders',
          }}
          listeners={{ drawerItemPress }}
        />
        <Drawer.Screen
          name="AddPlayer"
          component={AddPlayersScreen}
          options={{
            headerTitle: stakeHolder,
            drawerLabel: 'AddPlayer',
          }}
          listeners={{ drawerItemPress }}
        />
        <Drawer.Screen
          name="Players"
          component={PlayersScreen}
          options={{
            headerTitle: stakeHolder,
            drawerLabel: 'Players',
          }}
          listeners={{ drawerItemPress }}
        />
        <Drawer.Screen
          name="AddUsers"
          component={AddUsersScreen}
          options={{
            headerTitle: stakeHolder,
            drawerLabel: 'AddUsers',
          }}
          listeners={{ drawerItemPress }}
        />
        <Drawer.Screen
          name="ApproveUser"
          component={ApproveUserScreen}
          options={{
            headerTitle: stakeHolder,
            drawerLabel: 'ApproveUser',
          }}
          listeners={{ drawerItemPress }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            headerTitle: stakeHolder,
            drawerLabel: 'User',
          }}
          listeners={{ drawerItemPress }}
        />
      </Drawer.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontFamily: Theme.fontsFamily.display.medium,
  },
});
