import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Title } from '../components';
import { AddIcon } from '../components/Icons';
import { Players } from '../components/Players';
import { useEffect, useState } from 'react';
import { StakeHolderService } from '../services';
import { IPlayerStakeholder } from '../interfaces';

export function PlayersScreen({ navigation: { navigate } }) {
  const [players, setPlayers] = useState<IPlayerStakeholder[]>([]);

  useEffect(() => {
    StakeHolderService.getAllPlayers()
      .then(({ data }) => setPlayers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Title fontSize={18} children={'Usuários'} />
          <TouchableOpacity
            children={<AddIcon />}
            onPress={() => navigate('AddUsers')}
          />
        </View>
        <ScrollView style={styles.content}>
          <Players
            searchShow
            players={players}
            screen="players"
            navigate={navigate}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  safeArea: {
    width: '100%',
    height: '100%',
  },
  content: {
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#C1C1C1',
    borderBottomWidth: 0.5,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
});
