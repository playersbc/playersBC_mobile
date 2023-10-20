import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import { BackIcon, Button } from '../components';
import { Theme } from '../theme';
import { useState, useEffect } from 'react';
import { TransferService } from '../services';
import type { ITransfer } from '../interfaces';
import { Details } from '../components/Transfers/Details';
import { HeaderStakeholder } from '../components/HeaderStakeholder';
import { Passports } from '../components/Passports';
import { useAuthContext } from '../contexts';

export function OneTransferScreen({ navigation: { navigate }, route }) {
  const [_id] = useState(route.params._id);
  const [transfer, setTransfer] = useState<ITransfer>();
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();

  async function onSubmit() {
    try {
      setLoading(true);
      await TransferService.acceptTransfer(
        {
          onChainId: transfer.onChainId,
          privateKey: user?.privateKey,
        },
        user.shareholderType
      );
      setLoading(false);
      await navigate('Success', {
        text: 'Transferência aprovada com sucesso!',
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    TransferService.getOneTransfer(_id.toString())
      .then(({ data }) => setTransfer(data))
      .catch((err) => console.log(err));
  }, [_id]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subheader}>
        <TouchableOpacity onPress={() => navigate('Transfers')}>
          <BackIcon fill="#525252" size={30} />
        </TouchableOpacity>
        <Text style={styles.subheaderText}>Solicitação de Transferências</Text>
        <View />
      </View>
      <HeaderStakeholder />
      <Details transfer={transfer} />
      <Passports />
      {user?.address !== transfer?.club_asking && (
        <View style={styles.cardBtn}>
          <Button
            loading={loading}
            disabled={loading}
            onPress={onSubmit}
            label={'Aprovar'}
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F3',
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
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20,
    height: 60,
  },
  desc: {
    fontSize: 11,
    color: '#525252',
    fontFamily: Theme.fontsFamily.display.medium,
  },
  cardBtn: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 80,
  },
});
