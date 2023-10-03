import { StyleSheet, Text, View } from 'react-native';
import { Theme } from '../../theme';
import type { IPlayerStakeholder } from '../../interfaces';
import { PersonIcon } from '../Icons/PersonIcon';
import { PsgIcon } from '../Icons';
import { StatusIcon } from '../Icons/StatusIcon';
import { AtackIcon } from '../Icons/AtackIcon';

export function Details({ player }: { player: IPlayerStakeholder }) {
  return (
    <View style={styles.content}>
      <View style={styles.left}>
        <View style={styles.card}>
          <Text style={styles.title}>Nome</Text>
          <View style={styles.descCard}>
            <PersonIcon />
            <Text style={styles.desc}>{player?.name}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Time atual </Text>
          <View style={styles.descCard}>
            <PsgIcon />
            <Text style={styles.desc}>
              {player?.old_club ? player?.old_club : 'PSG'}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.right}>
        <View style={styles.card}>
          <Text style={styles.title}>Status</Text>
          <View style={styles.descCard}>
            <StatusIcon size={20} status={player?.status} />
            <Text style={styles.desc}>{player?.name}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Posição</Text>
          <View style={styles.descCard}>
            <AtackIcon />
            <Text style={styles.desc}>Atacante</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    gap: 4,
    padding: 4,
  },
  left: {
    flexDirection: 'column',
    gap: 4,
    width: '60%',
  },
  right: {
    flexDirection: 'column',
    gap: 4,
    width: '40%',
  },
  title: {
    fontSize: 16,
    color: '#525252',
    fontFamily: Theme.fontsFamily.display.medium,
  },
  desc: {
    fontSize: 14,
    color: '#525252',
    fontFamily: Theme.fontsFamily.display.medium,
  },
  descCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    gap: 10,
    borderRadius: 5,
    padding: 10,
    paddingLeft: 10,
  },
});
