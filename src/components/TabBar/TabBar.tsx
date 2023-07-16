import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ChartIcon, MoneyIcon, UserIcon } from '../Icons';
import { TabBarButton } from './TabBarButton';

export function TabBar({ state, navigation }: any) {
  return (
    <SafeAreaView edges={['bottom', 'right', 'left']} style={styles.container}>
      <TabBarButton
        icon={ChartIcon}
        isSelected={state.index === 0}
        onPress={() => navigation.navigate('Dashboard')}
      />
      <TabBarButton
        icon={MoneyIcon}
        isSelected={state.index === 1}
        onPress={() => navigation.navigate('Billings')}
      />
      <TabBarButton
        icon={UserIcon}
        isSelected={state.index === 2}
        onPress={() => navigation.navigate('Customers')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -5 },
  },
});
