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
import { ITransfer } from '../interfaces';
import { TransferService } from '../services';
import { HeaderStakeholder } from '../components/HeaderStakeholder';
import { Players } from '../components/Players';

export function AllTransfersScreen({ navigation: { navigate } }) {
  const [transfers, setTransfers] = useState<ITransfer[]>([]);
  const [transfersFinish, setTransfersFinish] = useState<ITransfer[]>([]);

  useEffect(() => {
    TransferService.getTransfers()
      .then(({ data }) => {
        setTransfers(data.filter((e) => e.isPending));
        setTransfersFinish(data.filter((e) => !e.isPending));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.subheader}>
          <TouchableOpacity onPress={() => navigate('Home')}>
            <BackIcon fill="#525252" size={30} />
          </TouchableOpacity>
          <Text style={styles.subheaderText}>Transferências</Text>
          <View />
        </View>
        <HeaderStakeholder />
        <View style={styles.playersContent}>
          <Text style={styles.subheaderText}>Solicitações feitas</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 8,
              paddingRight: 20,
            }}
          >
            <Text style={styles.text}>#</Text>
            <Text style={styles.text}>Nome</Text>
            <Text style={styles.text}>Clube</Text>
            <Text style={styles.text}>ID</Text>
            <Text style={styles.text}>Status</Text>
          </View>
          <Players
            navigate={navigate}
            screen="transfer"
            players={transfers}
            link={'OneTransfer'}
          />
        </View>
        <View style={styles.playersContent}>
          <Text style={styles.subheaderText}>Solicitações demandadas</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 8,
              paddingRight: 20,
            }}
          >
            <Text style={styles.text}>#</Text>
            <Text style={styles.text}>Nome</Text>
            <Text style={styles.text}>Clube</Text>
            <Text style={styles.text}>ID</Text>
            <Text style={styles.text}>Status</Text>
          </View>
          <Players
            navigate={navigate}
            screen="transfer"
            players={transfersFinish}
            link={'OneTransfer'}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F3',
  },
  playersContent: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginTop: 8,
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
  },
  content: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 12,
    backgroundColor: '#EEF2F3',
    padding: 6,
    paddingHorizontal: 12,
    color: '#525252',
    fontFamily: Theme.fontsFamily.display.medium,
    borderRadius: 20,
  },
});
