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
import { StakeHolderService } from '../services';
import { Details, PlayerInfo } from '../components/PlayerPage';
import { Passports } from '../components/Passports';
import type { IPlayerStakeholder } from '../interfaces';

export function PlayerScreen({ navigation: { navigate }, route }) {
  const [_id] = useState(route.params._id);
  const [player, setPlayer] = useState<IPlayerStakeholder>();
  const [passport, setPassport] = useState(false);

  useEffect(() => {
    StakeHolderService.getPlayerByOnChainId(_id.toString())
      .then(({ data }) => setPlayer(data))
      .catch((err) => console.log(err));
  }, [_id]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subheader}>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <TouchableOpacity onPress={() => navigate('Transfers')}>
            <BackIcon size={24} />
          </TouchableOpacity>
          <Text style={styles.subheaderText}>Detalhes do atleta</Text>
        </View>
      </View>
      <PlayerInfo
        player={player}
        setPassport={setPassport}
        passport={passport}
      />
      {!passport && (
        <>
          <Details player={player} />
          <View style={styles.card}>
            <Text style={styles.desc}>Início do contrato: 01/06/2013</Text>
            <Text style={styles.desc}>Fim do contrato: 01/06/2023</Text>
          </View>
        </>
      )}
      
      {passport && <Passports />}

      <View style={styles.cardBtn}>
        <Button
          onPress={() => navigate('CreateTransfer', { _id: player?.onChainId })}
          label={!passport ? 'Iniciar transferência' : 'Passaporte completo'}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F3',
  },
  subheader: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    backgroundColor: Theme.colors.primary,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  subheaderText: {
    fontSize: 16,
    fontFamily: Theme.fontsFamily.display.medium,
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20,
    marginHorizontal: 4,
    height: 60,
  },
  cardBtn: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 80,
    marginTop: 150,
  },
  desc: {
    fontSize: 11,
    color: '#525252',
    fontFamily: Theme.fontsFamily.display.medium,
  },
});
