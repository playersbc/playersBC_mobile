import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { Theme } from '../theme';
import { BackIcon } from '../components';
import { useEffect, useState } from 'react';
import { StartBtns } from '../components/Transfers';
import { IPlayerStakeholder } from '../interfaces';
import { StakeHolderService } from '../services';
import { HeaderStakeholder } from '../components/HeaderStakeholder';

export function TransfersScreen({ navigation: { navigate } }) {
  const [transfer, setTransfer] = useState('');
  const [players, setPlayers] = useState<IPlayerStakeholder[]>([]);

  useEffect(() => {
    StakeHolderService.getAllPlayers()
      .then(({ data }) => setPlayers(data ? data : []))
      .catch((err) => console.log(err));
  }, []);

  function goBack() {
    if (transfer === '') return navigate('Home');
    setTransfer('');
  }

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.subheader}>
          <TouchableOpacity onPress={goBack}>
            <BackIcon fill="#525252" size={30} />
          </TouchableOpacity>
          <Text style={styles.subheaderText}>Transferências</Text>
          <View />
        </View>
        <HeaderStakeholder />
        <View style={styles.content}>
          <StartBtns
            players={players}
            setTransfer={setTransfer}
            transfer={transfer}
            navigate={navigate}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subheader: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  subheaderText: {
    fontSize: 16,
    fontFamily: Theme.fontsFamily.display.medium,
    color: '#525252',
  },
  safeArea: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
